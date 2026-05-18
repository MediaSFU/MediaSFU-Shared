import { Socket } from "socket.io-client";
import { SignalNewConsumerTransportParameters, SignalNewConsumerTransportType } from '../types/types';

interface TranslationMeta {
  speakerId: string;
  speakerName: string;
  language: string;
  originalProducerId?: string;
  isSpeakerControlled?: boolean;
}

interface ProducerInfo {
  id: string;
  translationMeta?: TranslationMeta | null;
}

export interface GetPipedProducersAltParameters extends Omit<SignalNewConsumerTransportParameters, 'getUpdatedAllParams'> {
  member: string;

  listenerTranslationPreferences?: {
    perSpeaker: Map<string, { speakerId: string; language: string | null; wantOriginal: boolean }>;
    globalLanguage: string | null;
  };

  // mediasfu functions
  signalNewConsumerTransport: SignalNewConsumerTransportType;
  startConsumingTranslation?: (
    producerId: string,
    speakerId: string,
    language: string,
    originalProducerId?: string,
    nsock?: Socket
  ) => Promise<void>;
  getUpdatedAllParams?: () => GetPipedProducersAltParameters;
  [key: string]: any;
}

export interface GetPipedProducersAltOptions {
  community?: boolean;
  nsock: Socket;
  islevel: string;
  parameters: GetPipedProducersAltParameters;
}

// Export the type definition for the function
export type GetPipedProducersAltType = (options: GetPipedProducersAltOptions) => Promise<void>;

const shouldConsumeTranslationProducer = (
  translationMeta: TranslationMeta,
  listenerTranslationPreferences?: {
    perSpeaker: Map<string, { speakerId: string; language: string | null; wantOriginal: boolean }>;
    globalLanguage: string | null;
  }
): boolean => {
  const normalizedLang = translationMeta.language?.toLowerCase();
  const speakerId = translationMeta.speakerId;
  const isSpeakerControlled = translationMeta.isSpeakerControlled === true;

  if (listenerTranslationPreferences) {
    const perSpeakerPref = listenerTranslationPreferences.perSpeaker?.get(speakerId);
    if (perSpeakerPref) {
      if (perSpeakerPref.wantOriginal) {
        return false;
      }
      if (perSpeakerPref.language) {
        return perSpeakerPref.language.toLowerCase() === normalizedLang;
      }
    }

    const globalPref = listenerTranslationPreferences.globalLanguage;
    if (globalPref) {
      return globalPref.toLowerCase() === normalizedLang;
    }
  }

  if (isSpeakerControlled) {
    return true;
  }

  return false;
};

/**
 * Retrieves piped producers and signals new consumer transport for each retrieved producer.
 *
 * @param {GetPipedProducersAltOptions} options - The options for retrieving piped producers.
 * @param {boolean} options.community - A flag indicating if the room is a community edition room.
 * @param {Socket} options.nsock - The WebSocket instance used for communication.
 * @param {string} options.islevel - A flag indicating the level of the request.
 * @param {GetPipedProducersAltParameters} options.parameters - Additional parameters for the request.
 * @param {string} options.parameters.member - The member identifier.
 * @param {Function} options.parameters.signalNewConsumerTransport - A function to signal new consumer transport.
 *
 * @returns {Promise<void>} A promise that resolves when the operation is complete.
 *
 * @throws {Error} If an error occurs during the process of retrieving producers.
 *
 * @example
 * const options = {
 *   community: false,
 *   nsock: socketInstance,
 *   islevel: '1',
 *   parameters: {
 *     member: 'memberId',
 *     signalNewConsumerTransport: async ({ nsock, remoteProducerId, islevel, parameters }) => {
 *       // Implementation for signaling new consumer transport
 *     },
 *   },
 * };
 *
 * getPipedProducersAlt(options)
 *   .then(() => {
 *     console.log('Successfully retrieved piped producers');
 *   })
 *   .catch((error) => {
 *     console.error('Error retrieving piped producers:', error);
 *   });
 */

export const getPipedProducersAlt = async ({
  community = false,
  nsock,
  islevel,
  parameters,
}: GetPipedProducersAltOptions): Promise<void> => {
  try {
    const freshParams = parameters.getUpdatedAllParams ? parameters.getUpdatedAllParams() : parameters;

    const {
      member,
      signalNewConsumerTransport,
      startConsumingTranslation,
      listenerTranslationPreferences,
    } = freshParams;

    const emitName = community ? "getProducersAlt" : "getProducersPipedAlt";

    // Emit request to get piped producers using WebSocket
    await nsock.emit(
      emitName,
      { islevel, member },
      async (producers: (string | ProducerInfo)[]) => {
        // Check if producers are retrieved
        if (producers.length > 0) {
          for (const producer of producers) {
            let producerId: string;
            let translationMeta: TranslationMeta | null = null;

            if (typeof producer === 'string') {
              producerId = producer;
            } else {
              producerId = producer.id;
              translationMeta = producer.translationMeta || null;
            }

            if (translationMeta) {
              const shouldConsume = shouldConsumeTranslationProducer(
                translationMeta,
                listenerTranslationPreferences,
              );

              if (!shouldConsume) {
                continue;
              }

              if (startConsumingTranslation) {
                await startConsumingTranslation(
                  producerId,
                  translationMeta.speakerId,
                  translationMeta.language,
                  translationMeta.originalProducerId,
                  nsock,
                );
                continue;
              }
            }

            await signalNewConsumerTransport({
              nsock,
              remoteProducerId: producerId,
              islevel,
              parameters: freshParams as unknown as SignalNewConsumerTransportParameters,
            });
          }
        }
      }
    );
  } catch (error) {
    // Handle errors during the process of retrieving producers
    console.log("Error getting piped producers:", (error as Error).message);
  }
};
