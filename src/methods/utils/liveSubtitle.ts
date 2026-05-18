export interface TranslationTranscriptData {
  speakerId: string;
  speakerName?: string;
  language: string;
  originalText: string;
  translatedText?: string;
  timestamp?: number;
  targetLanguage?: string;
  isFinal?: boolean;
  [key: string]: any;
}

export interface LiveSubtitle {
  text: string;
  language: string;
  timestamp: number;
  expiresAt: number;
  speakerId: string;
  speakerName?: string;
}

export interface UpdateLiveSubtitlesOptions {
  currentSubtitles: Map<string, LiveSubtitle>;
  transcript: TranslationTranscriptData;
  now?: number;
}

export const createLiveSubtitle = (params: {
  text: string;
  language: string;
  speakerId: string;
  speakerName?: string;
  timestamp?: number;
}): LiveSubtitle => {
  const timestamp = params.timestamp ?? Date.now();
  const duration = Math.min(8000, Math.max(3000, 3000 + params.text.length * 50));

  return {
    text: params.text,
    language: params.language,
    timestamp,
    expiresAt: timestamp + duration,
    speakerId: params.speakerId,
    speakerName: params.speakerName,
  };
};

export const isSubtitleExpired = (subtitle: LiveSubtitle, now = Date.now()): boolean => {
  return now >= subtitle.expiresAt;
};

export const pruneExpiredSubtitles = (
  subtitles: Map<string, LiveSubtitle>,
  now = Date.now(),
): Map<string, LiveSubtitle> => {
  const next = new Map(subtitles);

  for (const [key, subtitle] of next.entries()) {
    if (isSubtitleExpired(subtitle, now)) {
      next.delete(key);
    }
  }

  return next;
};

export const updateLiveSubtitlesFromTranscript = ({
  currentSubtitles,
  transcript,
  now,
}: UpdateLiveSubtitlesOptions): Map<string, LiveSubtitle> => {
  const subtitle = createLiveSubtitle({
    text: transcript.translatedText || transcript.originalText,
    language: transcript.language,
    speakerId: transcript.speakerId,
    speakerName: transcript.speakerName,
    timestamp: now ?? transcript.timestamp,
  });

  const next = pruneExpiredSubtitles(currentSubtitles, subtitle.timestamp);
  next.set(transcript.speakerId, subtitle);

  if (transcript.speakerName) {
    next.set(transcript.speakerName, subtitle);
  }

  return next;
};

export const getSubtitleForSpeaker = (
  subtitles: Map<string, LiveSubtitle>,
  speakerId: string,
  speakerName?: string,
  now = Date.now(),
): LiveSubtitle | null => {
  const activeSubtitles = pruneExpiredSubtitles(subtitles, now);

  if (speakerId && activeSubtitles.has(speakerId)) {
    return activeSubtitles.get(speakerId) || null;
  }

  if (speakerName && activeSubtitles.has(speakerName)) {
    return activeSubtitles.get(speakerName) || null;
  }

  return null;
};