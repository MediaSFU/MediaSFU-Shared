import { Stream, Transport, Participant, SleepType } from "../types/types";

interface ProducerIdCarrier {
  producerId?: string | null;
}

interface SpeakerTranslationStateLike {
  enabled?: boolean;
  speakerId?: string;
  speakerName?: string;
  originalProducerId?: string;
}

interface ParticipantLike {
  name?: string | null;
  audioID?: string | null;
}

const getProducerId = (value: unknown): string | null | undefined => {
  return (value as ProducerIdCarrier | null | undefined)?.producerId;
};

interface ConsumerLike {
  paused?: boolean;
  kind?: string;
  pause: () => unknown;
  resume: () => unknown;
}

interface SocketLike {
  emit: (
    event: string,
    payload: { serverConsumerId: string },
    callback?: ((payload?: { resumed: boolean }) => void | Promise<unknown>)
  ) => void;
}

interface TransportLike {
  producerId?: string | null;
  consumer?: ConsumerLike;
  socket_: SocketLike;
  serverConsumerTransportId: string;
}

const getSpeakerNameForProducerId = (
  producerId: string,
  parameters: Record<string, any>,
): string | undefined => {
  const participants = parameters.participants as ParticipantLike[] | undefined;
  const participant = participants?.find((candidate) => candidate.audioID === producerId);

  if (participant?.name) {
    return participant.name;
  }

  const audStreamName = (parameters.audStreamNames as Array<{ producerId?: string; name?: string }> | undefined)
    ?.find((stream) => stream.producerId === producerId && typeof stream.name === 'string');
  if (audStreamName?.name) {
    return audStreamName.name;
  }

  return (parameters.allAudioStreams as Array<{ producerId?: string; name?: string }> | undefined)
    ?.find((stream) => stream.producerId === producerId && typeof stream.name === 'string')
    ?.name;
};

const isOriginalAudioSuppressedByTranslation = (
  producerId: string | null | undefined,
  parameters: Record<string, any>,
): boolean => {
  if (!producerId) {
    return false;
  }

  const activeTranslationProducerIds = parameters.activeTranslationProducerIds as Set<string> | undefined;
  if (activeTranslationProducerIds?.has(producerId)) {
    return false;
  }

  const speakerTranslationStates = parameters.speakerTranslationStates as
    | Map<string, SpeakerTranslationStateLike>
    | undefined;

  if (!speakerTranslationStates?.size) {
    return false;
  }

  const speakerName = getSpeakerNameForProducerId(producerId, parameters);

  if (speakerName) {
    const speakerState = speakerTranslationStates.get(speakerName);
    if (speakerState?.enabled) {
      return true;
    }
  }

  return Array.from(speakerTranslationStates.values()).some((speakerState) => {
    if (!speakerState?.enabled) {
      return false;
    }

    if (speakerState.originalProducerId === producerId) {
      return true;
    }

    if (!speakerName) {
      return false;
    }

    return (
      speakerState.speakerId === speakerName ||
      speakerState.speakerName === speakerName
    );
  });
};

export interface ProcessConsumerTransportsAudioParameters {

  // mediasfu functions
  sleep: SleepType;
  [key: string]: any;
}

export interface ProcessConsumerTransportsAudioOptions<
  TTransport extends TransportLike = Transport,
  TMediaEntry = Stream | Participant,
> {
  consumerTransports: TTransport[];
  lStreams: TMediaEntry[];
  parameters: ProcessConsumerTransportsAudioParameters;
}

// Export the type definition for the function
export type ProcessConsumerTransportsAudioType = <
  TTransport extends TransportLike = Transport,
  TMediaEntry = Stream | Participant,
>(options: ProcessConsumerTransportsAudioOptions<TTransport, TMediaEntry>) => Promise<void>;

/**
 * Processes consumer transports for audio streams by pausing and resuming them based on their current state and the provided streams.
 *
 * @param {Object} options - The options for processing consumer transports.
 * @param {Array} options.consumerTransports - The list of consumer transports to process.
 * @param {Array} options.lStreams - The list of local streams to check against.
 * @param {Object} options.parameters - Additional parameters for processing.
 * @param {Function} options.parameters.sleep - A function to pause execution for a specified duration.
 *
 * @returns {Promise<void>} A promise that resolves when the processing is complete.
 *
 * @throws Will throw an error if there is an issue processing the consumer transports.
 *
 * @example
 * ```typescript
 * await processConsumerTransportsAudio({
 *   consumerTransports: [transport1, transport2],
 *   lStreams: [stream1, stream2],
 *   parameters: {
 *     sleep: sleepFunction,
 *   },
 * });
 * ```
 */

export const processConsumerTransportsAudio = async <
  TTransport extends TransportLike = Transport,
  TMediaEntry = Stream | Participant,
>({
  consumerTransports,
  lStreams,
  parameters,
}: ProcessConsumerTransportsAudioOptions<TTransport, TMediaEntry>): Promise<void> => {
  try {
    const { sleep } = parameters;

    // Function to check if the producerId is valid in the given stream arrays
    const isValidProducerId = (producerId: string | null | undefined, ...streamArrays: unknown[][]): boolean => {
      return (
        producerId !== null &&
        producerId !== "" &&
        streamArrays.some((streamArray) => {
          return (
            streamArray.length > 0 &&
          streamArray.some((stream) => getProducerId(stream) === producerId)
          );
        })
      );
    };

    // Get paused consumer transports that are audio
    const consumerTransportsToResume = consumerTransports.filter(
      (transport) =>
        isValidProducerId(transport.producerId, lStreams) &&
        !isOriginalAudioSuppressedByTranslation(transport.producerId, parameters) &&
        transport.consumer?.paused === true &&
        transport.consumer?.kind === "audio"
    );

    // Get unpaused consumer transports that are audio
    const consumerTransportsToPause = consumerTransports.filter(
      (transport) =>
        transport.producerId &&
        transport.producerId !== null &&
        transport.producerId !== "" &&
        (
          isOriginalAudioSuppressedByTranslation(transport.producerId, parameters) ||
          !lStreams.some(
            (stream) => getProducerId(stream) === transport.producerId
          )
        ) &&
        transport.consumer &&
        transport.consumer?.kind &&
        transport.consumer.paused !== true &&
        transport.consumer.kind === "audio"
    );

    await sleep({ms:100});

    // Emit consumer.pause() for each transport to pause
    for (const transport of consumerTransportsToPause) {
      transport.consumer?.pause();
      transport.socket_.emit(
        "consumer-pause",
        { serverConsumerId: transport.serverConsumerTransportId },
        async () => {
          // Handle the response if needed
        }
      );
    }

    // Emit consumer.resume() for each transport to resume
    for (const transport of consumerTransportsToResume) {
      if (isOriginalAudioSuppressedByTranslation(transport.producerId, parameters)) {
        continue;
      }

      transport.socket_.emit(
        "consumer-resume",
        { serverConsumerId: transport.serverConsumerTransportId },
        async ({ resumed }: { resumed: boolean } = { resumed: false }) => {
          if (resumed) {
            transport.consumer?.resume();
          }
        }
      );
    }
  } catch (error) {
    console.error("Error in processConsumerTransportsAudio:", error);
  }
};

