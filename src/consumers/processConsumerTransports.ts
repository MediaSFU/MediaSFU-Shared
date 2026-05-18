import { Stream, Participant, Transport, SleepType } from "../types/types";

interface ProducerIdCarrier {
  producerId?: string | null;
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

export interface ProcessConsumerTransportsParameters<
  TStreamEntry = Stream,
  TMediaEntry = Stream | Participant,
> {
  remoteScreenStream: TStreamEntry[];
  oldAllStreams: TMediaEntry[];
  newLimitedStreams: TMediaEntry[];

  // mediasfu functions
  sleep: SleepType;
  getUpdatedAllParams: () => ProcessConsumerTransportsParameters<TStreamEntry, TMediaEntry>;
  [key: string]: any;
}

export interface ProcessConsumerTransportsOptions<
  TTransport extends TransportLike = Transport,
  TStreamEntry = Stream,
  TMediaEntry = Stream | Participant,
> {
  consumerTransports: TTransport[];
  lStreams_: TMediaEntry[];
  parameters: ProcessConsumerTransportsParameters<TStreamEntry, TMediaEntry>;
}

// Export the type definition for the function
export type ProcessConsumerTransportsType = <
  TTransport extends TransportLike = Transport,
  TStreamEntry = Stream,
  TMediaEntry = Stream | Participant,
>(options: ProcessConsumerTransportsOptions<TTransport, TStreamEntry, TMediaEntry>) => Promise<void>;

/**
 * Processes consumer transports by pausing and resuming them based on certain conditions.
 *
 * @param {Object} options - The options for processing consumer transports.
 * @param {Array} options.consumerTransports - The list of consumer transports to process.
 * @param {Array} options.lStreams_ - The list of local streams.
 * @param {Object} options.parameters - The parameters object containing various stream arrays and utility functions.
 *
 * @returns {Promise<void>} - A promise that resolves when the processing is complete.
 *
 * @throws {Error} - Throws an error if there is an issue processing consumer transports.
 *
 * The function performs the following steps:
 * 1. Destructures and updates the parameters.
 * 2. Defines a helper function to check if a producerId is valid in given stream arrays.
 * 3. Filters consumer transports to resume based on certain conditions.
 * 4. Filters consumer transports to pause based on certain conditions.
 * 5. Pauses consumer transports after a short delay.
 * 6. Emits `consumer-pause` event for each filtered transport (not audio).
 * 7. Emits `consumer-resume` event for each filtered transport (not audio).
 *
 * @example
 * ```typescript
 * await processConsumerTransports({
 *   consumerTransports: [transport1, transport2],
 *   lStreams_: [stream1, stream2],
 *   parameters: {
 *     remoteScreenStream: [],
 *     oldAllStreams: [],
 *     newLimitedStreams: [],
 *     sleep: sleepFunction,
 *     getUpdatedAllParams: () => parameters,
 *   },
 * });
 * ```
 */

export async function processConsumerTransports<
  TTransport extends TransportLike = Transport,
  TStreamEntry = Stream,
  TMediaEntry = Stream | Participant,
>({
  consumerTransports,
  lStreams_,
  parameters,
}: ProcessConsumerTransportsOptions<TTransport, TStreamEntry, TMediaEntry>): Promise<void> {
  try {
    // Destructure parameters and get updated values
    parameters = parameters.getUpdatedAllParams();

    const {
      remoteScreenStream,
      oldAllStreams,
      newLimitedStreams,
      sleep,
    } = parameters;

    // Function to check if the producerId is valid in the given stream arrays
    function isValidProducerId(producerId: string | null | undefined, ...streamArrays: unknown[][]): boolean {
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
    }

    // Get paused consumer transports that are not audio
    const consumerTransportsToResume = consumerTransports.filter(
      (transport) =>
        isValidProducerId(
          transport.producerId,
          lStreams_,
          remoteScreenStream,
          oldAllStreams,
          newLimitedStreams
        ) &&
        transport.consumer?.paused === true &&
        transport.consumer?.kind !== "audio"
    );

    // Get unpaused consumer transports that are not audio
    const consumerTransportsToPause = consumerTransports.filter(
      (transport) =>
        transport.producerId &&
        transport.producerId !== null &&
        transport.producerId !== "" &&
        !lStreams_.some(
          (stream) => getProducerId(stream) === transport.producerId
        ) &&
        transport.consumer &&
        transport.consumer?.kind &&
        transport.consumer.paused !== true &&
        transport.consumer.kind !== "audio" &&
        !remoteScreenStream.some((stream) => getProducerId(stream) === transport.producerId) &&
        !oldAllStreams.some((stream) => getProducerId(stream) === transport.producerId) &&
        !newLimitedStreams.some((stream) => getProducerId(stream) === transport.producerId)
    );

    // Pause consumer transports after a short delay
    await sleep({ ms: 100 });

    // Emit consumer.pause() for each filtered transport (not audio)
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

    // Emit consumer.resume() for each filtered transport (not audio)
    for (const transport of consumerTransportsToResume) {
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
    if (error instanceof Error) {
      console.error(`Error processing consumer transports: ${error.message}`);
    } else {
      console.error('Error processing consumer transports:', error);
    }
    // throw new Error(`Error processing consumer transports: ${error.message}`);
  }
}
