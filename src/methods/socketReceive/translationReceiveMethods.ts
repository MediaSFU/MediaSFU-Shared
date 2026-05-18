import type { ShowAlert } from '../../types/types';
import type {
  TranslationTranscriptData,
} from '../utils/liveSubtitle';
import type { TranslationVoiceConfig } from '../utils/translationLanguages';
import { getLanguageName } from '../utils/translationLanguages';

export type LanguageMode = 'allowlist' | 'blocklist' | 'any';

export interface LanguageEntry {
  code: string;
  nickname?: string;
  voiceConfig?: TranslationVoiceConfig;
}

export interface TranslationRoomConfig {
  supportTranslation: boolean;
  spokenLanguageMode: LanguageMode;
  allowedSpokenLanguages?: LanguageEntry[];
  blockedSpokenLanguages?: string[];
  listenLanguageMode: LanguageMode;
  allowedListenLanguages?: LanguageEntry[];
  blockedListenLanguages?: string[];
  maxActiveChannelsPerSpeaker: number;
  autoDetectSpokenLanguage: boolean;
  allowSpokenLanguageChange?: boolean;
  allowListenLanguageChange?: boolean;
  translationVoiceConfig?: TranslationVoiceConfig | null;
  providerGroups?: {
    groupA?: {
      languages: string[];
      sttNickName?: string;
      llmNickName?: string;
      ttsNickName?: string;
    };
    groupB?: {
      languages: string[];
      sttNickName?: string;
      llmNickName?: string;
      ttsNickName?: string;
    };
    default?: {
      sttNickName?: string;
      llmNickName?: string;
      ttsNickName?: string;
    };
  } | null;
}

export interface TranslationRoomConfigData {
  config: TranslationRoomConfig;
}

export interface TranslationConfigUpdatedData {
  config: TranslationRoomConfig;
}

export interface TranslationLanguageSetData {
  success: boolean;
  language: string;
  enabled: boolean;
  error?: string;
}

export interface TranslationSubscribedData {
  speakerId: string;
  speakerName?: string;
  language: string;
  channelCreated: boolean;
  producerId?: string;
  originalProducerId?: string;
}

export interface TranslationUnsubscribedData {
  speakerId: string;
  language: string;
  channelClosed: boolean;
}

export interface TranslationProducerReadyData {
  speakerId: string;
  speakerName?: string;
  language: string;
  producerId: string;
  originalProducerId: string;
}

export interface TranslationProducerClosedData {
  speakerId: string;
  language: string;
  producerId: string;
  reason?: string;
}

export interface TranslationChannelsAvailableData {
  speakerId: string;
  speakerName?: string;
  languages: string[];
  originalProducerId: string;
}

export interface TranslationMemberStateData {
  memberId: string;
  memberName?: string;
  state: {
    speaking?: {
      enabled: boolean;
      inputLanguage: string;
      originalProducerId: string;
    };
    listening?: {
      [speakerId: string]: {
        language: string;
        producerId: string | null;
      };
    };
  };
}

export interface TranslationErrorData {
  error: string;
  code?: string;
  details?: unknown;
  availableChannels?: string[];
  maxChannels?: number;
  message?: string;
}

export interface TranslationSpeakerOutputChangedData {
  speakerId: string;
  speakerName: string;
  inputLanguage: string;
  outputLanguage: string | null;
  originalProducerId: string;
  enabled: boolean;
}

export interface TranslationProducerMap {
  [originalProducerId: string]: {
    [languageCode: string]: string;
  };
}

export interface TranslationRoomConfigOptions {
  data: TranslationRoomConfigData;
  updateTranslationConfig?: (config: TranslationRoomConfig) => void;
  updateTranslationSupported?: (supported: boolean) => void;
}

export interface TranslationConfigUpdatedOptions {
  data: TranslationConfigUpdatedData;
  updateTranslationConfig?: (config: TranslationRoomConfig) => void;
  showAlert?: ShowAlert;
}

export interface TranslationLanguageSetOptions {
  data: TranslationLanguageSetData;
  updateMySpokenLanguage?: (lang: string) => void;
  updateMySpokenLanguageEnabled?: (enabled: boolean) => void;
  showAlert?: ShowAlert;
}

export interface TranslationSubscribedOptions {
  data: TranslationSubscribedData;
  updateListenPreferences?: (updater: (prev: Map<string, string>) => Map<string, string>) => void;
  updateTranslationProducerMap?: (updater: (prev: TranslationProducerMap) => TranslationProducerMap) => void;
  startConsumingTranslation?: (producerId: string, speakerId: string, language: string, originalProducerId?: string) => Promise<void>;
  showAlert?: ShowAlert;
}

export interface TranslationUnsubscribedOptions {
  data: TranslationUnsubscribedData;
  updateListenPreferences?: (updater: (prev: Map<string, string>) => Map<string, string>) => void;
  stopConsumingTranslation?: (speakerId: string, language: string) => Promise<void>;
}

export interface TranslationProducerReadyOptions {
  data: TranslationProducerReadyData;
  updateTranslationProducerMap?: (updater: (prev: TranslationProducerMap) => TranslationProducerMap) => void;
  startConsumingTranslation?: (producerId: string, speakerId: string, language: string, originalProducerId: string) => Promise<void>;
  pauseOriginalProducer?: (originalProducerId: string) => Promise<void>;
  showAlert?: ShowAlert;
}

export interface TranslationProducerClosedOptions {
  data: TranslationProducerClosedData;
  updateTranslationProducerMap?: (updater: (prev: TranslationProducerMap) => TranslationProducerMap) => void;
  stopConsumingTranslation?: (producerId: string) => Promise<void>;
  resumeOriginalProducer?: (speakerId: string) => Promise<void>;
  showAlert?: ShowAlert;
}

export interface TranslationChannelsAvailableOptions {
  data: TranslationChannelsAvailableData;
  updateAvailableTranslationChannels?: (speakerId: string, languages: string[], originalProducerId: string) => void;
  myDefaultListenLanguage?: string | null;
  socket?: {
    emit: (event: string, payload: Record<string, unknown>) => void;
  } | null;
  roomName?: string;
}

export interface TranslationMemberStateOptions {
  data: TranslationMemberStateData;
  updateParticipantTranslationState?: (memberId: string, state: TranslationMemberStateData['state']) => void;
}

export interface TranslationErrorOptions {
  data: TranslationErrorData;
  showAlert?: ShowAlert;
}

export interface TranslationTranscriptOptions {
  data: TranslationTranscriptData;
  updateTranscripts?: (updater: (prev: TranslationTranscriptData[]) => TranslationTranscriptData[]) => void;
  onTranscriptReceived?: (transcript: TranslationTranscriptData) => void;
  maxTranscripts?: number;
}

export interface TranslationSpeakerOutputChangedOptions {
  data: TranslationSpeakerOutputChangedData;
  pauseOriginalProducer?: (originalProducerId: string, speakerId: string) => Promise<void>;
  resumeOriginalProducer?: (originalProducerId: string, speakerId: string) => Promise<void>;
  stopConsumingTranslationForSpeaker?: (speakerId: string) => Promise<void>;
  updateSpeakerTranslationState?: (speakerId: string, outputLanguage: string | null, originalProducerId: string) => void;
  showAlert?: ShowAlert;
  listenerOverride?: { speakerId: string; wantOriginal: boolean; preferredLanguage?: string } | null;
}

export type TranslationRoomConfigType = (options: TranslationRoomConfigOptions) => Promise<void>;
export type TranslationConfigUpdatedType = (options: TranslationConfigUpdatedOptions) => Promise<void>;
export type TranslationLanguageSetType = (options: TranslationLanguageSetOptions) => Promise<void>;
export type TranslationSubscribedType = (options: TranslationSubscribedOptions) => Promise<void>;
export type TranslationUnsubscribedType = (options: TranslationUnsubscribedOptions) => Promise<void>;
export type TranslationProducerReadyType = (options: TranslationProducerReadyOptions) => Promise<void>;
export type TranslationProducerClosedType = (options: TranslationProducerClosedOptions) => Promise<void>;
export type TranslationChannelsAvailableType = (options: TranslationChannelsAvailableOptions) => Promise<void>;
export type TranslationMemberStateType = (options: TranslationMemberStateOptions) => Promise<void>;
export type TranslationErrorType = (options: TranslationErrorOptions) => Promise<void>;
export type TranslationTranscriptType = (options: TranslationTranscriptOptions) => Promise<void>;
export type TranslationSpeakerOutputChangedType = (options: TranslationSpeakerOutputChangedOptions) => Promise<void>;

export const translationRoomConfig: TranslationRoomConfigType = async ({
  data,
  updateTranslationConfig,
  updateTranslationSupported,
}): Promise<void> => {
  try {
    const { config } = data;
    updateTranslationSupported?.(config.supportTranslation);

    if (updateTranslationConfig && config.supportTranslation) {
      updateTranslationConfig(config);
    }
  } catch (error) {
    console.error('Error handling translation:roomConfig:', error);
  }
};

export const translationConfigUpdated: TranslationConfigUpdatedType = async ({
  data,
  updateTranslationConfig,
  showAlert,
}): Promise<void> => {
  try {
    updateTranslationConfig?.(data.config);
    showAlert?.({
      message: 'Translation settings updated by host',
      type: 'info',
      duration: 2000,
    });
  } catch (error) {
    console.error('Error handling translation:configUpdated:', error);
  }
};

export const translationLanguageSet: TranslationLanguageSetType = async ({
  data,
  updateMySpokenLanguage,
  updateMySpokenLanguageEnabled,
  showAlert,
}): Promise<void> => {
  try {
    if (data.success) {
      updateMySpokenLanguage?.(data.language);
      updateMySpokenLanguageEnabled?.(data.enabled);
    } else if (showAlert && data.error) {
      showAlert({
        message: data.error,
        type: 'danger',
        duration: 3000,
      });
    }
  } catch (error) {
    console.error('Error handling translation:languageSet:', error);
  }
};

export const translationSubscribed: TranslationSubscribedType = async ({
  data,
  updateListenPreferences,
  updateTranslationProducerMap,
  startConsumingTranslation,
  showAlert,
}): Promise<void> => {
  try {
    const { speakerId, language, channelCreated, producerId, originalProducerId } = data;

    updateListenPreferences?.((prev) => {
      const next = new Map(prev);
      next.set(speakerId, language);
      return next;
    });

    if (producerId && originalProducerId && updateTranslationProducerMap) {
      updateTranslationProducerMap((prev) => ({
        ...prev,
        [originalProducerId]: {
          ...(prev[originalProducerId] || {}),
          [language]: producerId,
        },
      }));
    }

    if (producerId && startConsumingTranslation) {
      await startConsumingTranslation(producerId, speakerId, language, originalProducerId);
    }

    if (showAlert && channelCreated) {
      showAlert({
        message: `Translation channel created for ${language}`,
        type: 'success',
        duration: 2000,
      });
    }
  } catch (error) {
    console.error('Error handling translation:subscribed:', error);
  }
};

export const translationUnsubscribed: TranslationUnsubscribedType = async ({
  data,
  updateListenPreferences,
  stopConsumingTranslation,
}): Promise<void> => {
  try {
    updateListenPreferences?.((prev) => {
      const next = new Map(prev);
      next.delete(data.speakerId);
      return next;
    });

    if (stopConsumingTranslation) {
      await stopConsumingTranslation(data.speakerId, data.language);
    }
  } catch (error) {
    console.error('Error handling translation:unsubscribed:', error);
  }
};

export const translationProducerReady: TranslationProducerReadyType = async ({
  data,
  updateTranslationProducerMap,
  pauseOriginalProducer,
}): Promise<void> => {
  try {
    updateTranslationProducerMap?.((prev) => ({
      ...prev,
      [data.originalProducerId]: {
        ...(prev[data.originalProducerId] || {}),
        [data.language]: data.producerId,
      },
    }));

    if (pauseOriginalProducer) {
      await pauseOriginalProducer(data.originalProducerId);
    }
  } catch (error) {
    console.error('Error handling translation:producerReady:', error);
  }
};

export const translationProducerClosed: TranslationProducerClosedType = async ({
  data,
  updateTranslationProducerMap,
  stopConsumingTranslation,
  resumeOriginalProducer,
  showAlert,
}): Promise<void> => {
  try {
    if (updateTranslationProducerMap) {
      updateTranslationProducerMap((prev) => {
        const next = { ...prev };
        for (const [originalProducerId, languageMap] of Object.entries(next)) {
          if (languageMap[data.language] === data.producerId) {
            delete languageMap[data.language];
            if (Object.keys(languageMap).length === 0) {
              delete next[originalProducerId];
            }
          }
        }
        return next;
      });
    }

    if (stopConsumingTranslation) {
      await stopConsumingTranslation(data.producerId);
    }

    if (resumeOriginalProducer) {
      await resumeOriginalProducer(data.speakerId);
    }

    if (showAlert && data.reason) {
      showAlert({
        message: `Translation stopped: ${data.reason}`,
        type: 'info',
        duration: 2000,
      });
    }
  } catch (error) {
    console.error('Error handling translation:producerClosed:', error);
  }
};

export const translationChannelsAvailable: TranslationChannelsAvailableType = async ({
  data,
  updateAvailableTranslationChannels,
  myDefaultListenLanguage,
  socket,
  roomName,
}): Promise<void> => {
  try {
    updateAvailableTranslationChannels?.(data.speakerId, data.languages, data.originalProducerId);

    if (myDefaultListenLanguage && data.languages.includes(myDefaultListenLanguage) && socket && roomName) {
      socket.emit('translation:subscribe', {
        roomName,
        speakerId: data.speakerId,
        language: myDefaultListenLanguage,
        originalProducerId: data.originalProducerId,
      });
    }
  } catch (error) {
    console.error('Error handling translation:channelsAvailable:', error);
  }
};

export const translationMemberState: TranslationMemberStateType = async ({
  data,
  updateParticipantTranslationState,
}): Promise<void> => {
  try {
    updateParticipantTranslationState?.(data.memberId, data.state);
  } catch (error) {
    console.error('Error handling translation:memberState:', error);
  }
};

export const translationError: TranslationErrorType = async ({
  data,
  showAlert,
}): Promise<void> => {
  try {
    if (showAlert) {
      let message = data.error;

      switch (data.code) {
        case 'max_channels':
          if (data.availableChannels && data.availableChannels.length > 0) {
            message = `Maximum ${data.maxChannels || 5} translation channels reached. Available: ${data.availableChannels.join(', ')}`;
          } else {
            message = data.message || 'Maximum translation channels reached. Please wait for a slot to open.';
          }
          break;
        case 'speaker_not_found':
          message = 'Speaker not found or has left the meeting.';
          break;
        case 'language_not_allowed':
          message = 'This language is not available for translation in this room.';
          break;
        default:
          message = data.error || 'Translation error occurred';
      }

      showAlert({
        message,
        type: 'danger',
        duration: 5000,
      });
    }
  } catch (err) {
    console.error('Error handling translation:error:', err);
  }
};

export const translationTranscript: TranslationTranscriptType = async ({
  data,
  updateTranscripts,
  onTranscriptReceived,
  maxTranscripts = 100,
}): Promise<void> => {
  try {
    if (updateTranscripts) {
      updateTranscripts((prev) => {
        const next = [...prev, data];
        return next.length > maxTranscripts ? next.slice(-maxTranscripts) : next;
      });
    }

    onTranscriptReceived?.(data);
  } catch (err) {
    console.error('Error handling translation:transcript:', err);
  }
};

export const translationSpeakerOutputChanged: TranslationSpeakerOutputChangedType = async ({
  data,
  pauseOriginalProducer,
  resumeOriginalProducer,
  stopConsumingTranslationForSpeaker,
  updateSpeakerTranslationState,
  showAlert,
  listenerOverride,
}): Promise<void> => {
  try {
    updateSpeakerTranslationState?.(data.speakerId, data.outputLanguage, data.originalProducerId);

    const listenerWantsOriginal = listenerOverride?.wantOriginal === true;
    const listenerWantsDifferentLanguage = Boolean(
      listenerOverride?.preferredLanguage &&
      listenerOverride.preferredLanguage.toLowerCase() !== data.outputLanguage?.toLowerCase(),
    );

    if (listenerWantsOriginal) {
      showAlert?.({
        message: `${data.speakerName} is speaking in ${data.outputLanguage ? getLanguageName(data.outputLanguage) : 'translated'} but you're hearing original`,
        type: 'info',
        duration: 3000,
      });
      return;
    }

    if (listenerWantsDifferentLanguage) {
      if (pauseOriginalProducer && data.originalProducerId) {
        await pauseOriginalProducer(data.originalProducerId, data.speakerId);
      }
      return;
    }

    if (data.enabled && data.outputLanguage && data.originalProducerId) {
      if (pauseOriginalProducer) {
        await pauseOriginalProducer(data.originalProducerId, data.speakerId);
      }

      showAlert?.({
        message: `${data.speakerName} is now speaking in ${getLanguageName(data.outputLanguage)}`,
        type: 'info',
        duration: 3000,
      });
    } else if (!data.enabled || !data.outputLanguage) {
      if (stopConsumingTranslationForSpeaker) {
        await stopConsumingTranslationForSpeaker(data.speakerId);
      }

      if (resumeOriginalProducer && data.originalProducerId) {
        await resumeOriginalProducer(data.originalProducerId, data.speakerId);
      }

      if (showAlert && !data.enabled) {
        showAlert({
          message: `${data.speakerName} returned to original language`,
          type: 'info',
          duration: 3000,
        });
      }
    }
  } catch (err) {
    console.error('Error handling translation:speakerOutputChanged:', err);
  }
};