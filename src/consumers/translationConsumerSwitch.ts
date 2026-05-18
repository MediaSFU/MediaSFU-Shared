import { BreakoutParticipant, EventType, Participant, Transport } from '../types/types';

export interface TranslationConsumerSwitchParameters {
  consumerTransports: Transport[];
  roomName: string;
  member: string;
  updateConsumerTransports: (transports: Transport[]) => void;
  breakOutRoomStarted?: boolean;
  breakOutRoomEnded?: boolean;
  breakoutRooms?: BreakoutParticipant[][];
  limitedBreakRoom?: BreakoutParticipant[];
  participants?: Participant[];
  ref_participants?: Participant[];
  islevel?: string;
  eventType?: EventType;
  hostNewRoom?: number;
  [key: string]: any;
}

export interface PauseOriginalProducerOptions {
  originalProducerId: string;
  speakerId?: string;
  parameters: TranslationConsumerSwitchParameters;
}

export interface ResumeOriginalProducerOptions {
  originalProducerId: string;
  speakerId?: string;
  parameters: TranslationConsumerSwitchParameters;
}

export type PauseOriginalProducerType = (options: PauseOriginalProducerOptions) => Promise<void>;
export type ResumeOriginalProducerType = (options: ResumeOriginalProducerOptions) => Promise<void>;

export interface StopConsumingTranslationOptions {
  speakerId?: string;
  language: string;
  translationProducerMap: Record<string, Record<string, string>>;
  parameters: TranslationConsumerSwitchParameters;
}

export type StopConsumingTranslationType = (options: StopConsumingTranslationOptions) => Promise<string | null>;

export const isSpeakerInMyBreakoutRoom = (
  speakerName: string,
  parameters: TranslationConsumerSwitchParameters
): boolean => {
  const {
    breakOutRoomStarted = false,
    breakOutRoomEnded = false,
    limitedBreakRoom = [],
    participants = [],
    islevel = '1',
    eventType = 'conference',
    hostNewRoom = -1,
    breakoutRooms = [],
    member = '',
  } = parameters;

  if (!breakOutRoomStarted || breakOutRoomEnded) {
    return true;
  }

  const host = participants.find((p) => p.islevel === '2');
  const speakerIsHost = host?.name === speakerName;

  if (islevel !== '2') {
    if (eventType === 'webinar' && speakerIsHost) {
      return true;
    }

    if (eventType === 'conference' && speakerIsHost) {
      const roomMember = breakoutRooms.find((r) =>
        r.find((p) => p.name === member)
      );
      const memberBreakRoom = roomMember ? breakoutRooms.indexOf(roomMember) : -1;
      const inBreakRoom = memberBreakRoom !== -1;

      if (inBreakRoom) {
        return memberBreakRoom === hostNewRoom;
      }

      if (hostNewRoom === -1) {
        return true;
      }

      return hostNewRoom === memberBreakRoom && memberBreakRoom !== -1;
    }
  }

  return limitedBreakRoom.some((p) => p.name === speakerName);
};

export const pauseOriginalProducer = async ({
  originalProducerId,
  speakerId,
  parameters,
}: PauseOriginalProducerOptions): Promise<void> => {
  try {
    const { consumerTransports } = parameters;

    if (speakerId && !isSpeakerInMyBreakoutRoom(speakerId, parameters)) {
      return;
    }

    const transport = consumerTransports.find(
      (t) => t.producerId === originalProducerId && t.consumer?.kind === 'audio'
    );

    if (!transport?.consumer) {
      return;
    }

    if (transport.consumer.track) {
      transport.consumer.track.enabled = false;
    }

    if (transport.consumer.paused) {
      return;
    }

    transport.consumer.pause();

    transport.socket_?.emit(
      'consumer-pause',
      { serverConsumerId: transport.serverConsumerTransportId },
      async () => {}
    );
  } catch (error) {
    console.error('[TranslationSwitch] Error pausing original producer:', error);
  }
};

export const resumeOriginalProducer = async ({
  originalProducerId,
  speakerId,
  parameters,
}: ResumeOriginalProducerOptions): Promise<void> => {
  try {
    const { consumerTransports } = parameters;

    if (speakerId && !isSpeakerInMyBreakoutRoom(speakerId, parameters)) {
      return;
    }

    const transport = consumerTransports.find(
      (t) => t.producerId === originalProducerId && t.consumer?.kind === 'audio'
    );

    if (!transport?.consumer) {
      return;
    }

    if (!transport.consumer.paused) {
      if (transport.consumer.track) {
        transport.consumer.track.enabled = true;
      }
      return;
    }

    transport.socket_?.emit(
      'consumer-resume',
      { serverConsumerId: transport.serverConsumerTransportId },
      async ({ resumed }: { resumed: boolean }) => {
        if (resumed) {
          if (transport.consumer.track) {
            transport.consumer.track.enabled = true;
          }
          transport.consumer.resume();
        }
      }
    );
  } catch (error) {
    console.error('[TranslationSwitch] Error resuming original producer:', error);
  }
};

export const isConsumingTranslationForSpeaker = (
  speakerId: string,
  consumerTransports: Transport[],
  translationProducerMap: Map<string, { translationProducerId: string; originalProducerId: string; language: string }>
): { consuming: boolean; language?: string; translationProducerId?: string; originalProducerId?: string } => {
  const translationInfo = translationProducerMap.get(speakerId);

  if (translationInfo) {
    const hasConsumer = consumerTransports.some(
      (t) => t.producerId === translationInfo.translationProducerId
    );

    if (hasConsumer) {
      return {
        consuming: true,
        language: translationInfo.language,
        translationProducerId: translationInfo.translationProducerId,
        originalProducerId: translationInfo.originalProducerId,
      };
    }
  }

  return { consuming: false };
};

export const getActiveTranslationConsumers = (
  translationProducerMap: Map<string, { translationProducerId: string; originalProducerId: string; language: string }>,
  consumerTransports: Transport[]
): Array<{ speakerId: string; translationProducerId: string; originalProducerId: string; language: string }> => {
  const results: Array<{ speakerId: string; translationProducerId: string; originalProducerId: string; language: string }> = [];

  translationProducerMap.forEach((info, speakerId) => {
    const hasConsumer = consumerTransports.some(
      (t) => t.producerId === info.translationProducerId
    );

    if (hasConsumer) {
      results.push({
        speakerId,
        ...info,
      });
    }
  });

  return results;
};

export const findOriginalProducerForSpeaker = (
  speakerId: string,
  allAudioStreams: Array<{ producerId: string; name?: string; [key: string]: any }>
): string | null => {
  const stream = allAudioStreams.find(
    (s) => s.name === speakerId || s.producerId?.includes(speakerId)
  );
  return stream?.producerId || null;
};

export const stopConsumingTranslation = async (options: StopConsumingTranslationOptions): Promise<string | null> => {
  const { language, translationProducerMap, parameters } = options;
  try {
    const { consumerTransports, updateConsumerTransports } = parameters;

    let originalProducerId: string | null = null;
    let translationProducerId: string | null = null;

    for (const [origId, langMap] of Object.entries(translationProducerMap)) {
      if (langMap && langMap[language]) {
        translationProducerId = langMap[language];
        originalProducerId = origId;
        break;
      }
    }

    if (!translationProducerId) {
      return originalProducerId;
    }

    const transportIndex = consumerTransports.findIndex(
      (t) => t.producerId === translationProducerId
    );

    if (transportIndex === -1) {
      return originalProducerId;
    }

    const transport = consumerTransports[transportIndex];

    if (transport.socket_ && transport.consumer) {
      transport.socket_.emit(
        'consumer-close',
        { serverConsumerId: transport.serverConsumerTransportId },
        () => {}
      );
    }

    if (transport.consumer) {
      transport.consumer.close();
    }

    const updatedTransports = consumerTransports.filter((_, i) => i !== transportIndex);
    updateConsumerTransports(updatedTransports);

    return originalProducerId;
  } catch (error) {
    console.error('[TranslationSwitch] Error stopping translation consumer:', error);
    return null;
  }
};

export const syncTranslationStateAfterBreakoutChange = async (
  translationProducerMap: Record<string, Record<string, string>>,
  speakerIdByProducerId: Record<string, string>,
  parameters: TranslationConsumerSwitchParameters
): Promise<void> => {
  try {
    const { consumerTransports } = parameters;

    for (const [originalProducerId, langMap] of Object.entries(translationProducerMap)) {
      const speakerId = speakerIdByProducerId[originalProducerId];
      if (!speakerId) continue;

      const inMyRoom = isSpeakerInMyBreakoutRoom(speakerId, parameters);
      const hasTranslation = Object.keys(langMap).length > 0;

      const originalConsumer = consumerTransports.find(
        (t) => t.producerId === originalProducerId && t.consumer?.kind === 'audio'
      );

      if (!originalConsumer) continue;

      if (inMyRoom && hasTranslation) {
        if (!originalConsumer.consumer.paused) {
          await pauseOriginalProducer({
            originalProducerId,
            speakerId,
            parameters,
          });
        }
      }
    }
  } catch (error) {
    console.error('[TranslationSwitch] Error syncing translation state:', error);
  }
};
