import { Participant, Transport, Stream } from "../types/types";

interface ParticipantLike {
  name: string;
  islevel?: string | null;
  videoID?: string | null;
}

interface ConsumerLike {
  kind?: string;
  resume: () => unknown;
}

interface SocketLike {
  emit: (
    event: string,
    payload: { serverConsumerId: string },
    callback?: ((payload: { resumed: boolean }) => void | Promise<unknown>)
  ) => void;
}

interface TransportLike {
  producerId?: string | null;
  consumer: ConsumerLike;
  socket_: SocketLike;
  serverConsumerTransportId: string;
}

export interface ResumePauseStreamsParameters<
  TParticipant extends ParticipantLike = Participant,
  TTransport extends TransportLike = Transport,
  TStream = Stream,
> {
  participants: TParticipant[];
  dispActiveNames: string[];
  remoteScreenStream: TStream[];
  consumerTransports: TTransport[];
  screenId?: string;
  islevel: string;

  // mediasfu functions
  getUpdatedAllParams: () => ResumePauseStreamsParameters<TParticipant, TTransport, TStream>;
  [key: string]: any;
}

export interface ResumePauseStreamsOptions<
  TParticipant extends ParticipantLike = Participant,
  TTransport extends TransportLike = Transport,
  TStream = Stream,
> {
  parameters: ResumePauseStreamsParameters<TParticipant, TTransport, TStream>;
}

// Export the type definition for the function
export type ResumePauseStreamsType = <
  TParticipant extends ParticipantLike = Participant,
  TTransport extends TransportLike = Transport,
  TStream = Stream,
>(options: ResumePauseStreamsOptions<TParticipant, TTransport, TStream>) => Promise<void>;

/**
 * Resumes or pauses streams based on the provided parameters.
 *
 * @param {ResumePauseStreamsOptions} options - The options for resuming or pausing streams.
 * @param {Object} options.parameters - The parameters for the function.
 * @param {Array} options.parameters.participants - The list of participants.
 * @param {Array} options.parameters.dispActiveNames - The list of active display names.
 * @param {Array} options.parameters.consumerTransports - The list of consumer transports.
 * @param {string} [options.parameters.screenId] - The screen producer ID.
 * @param {string} options.parameters.islevel - The level of the user.
 *
 * @returns {Promise<void>} A promise that resolves when the streams have been resumed or paused.
 *
 * @throws Will throw an error if there is an issue during the process of resuming or pausing streams.
 *
 * @example
 * ```typescript
 * await resumePauseStreams({
 *   parameters: {
 *     participants: participantArray,
 *     dispActiveNames: ['user1', 'user2'],
 *     consumerTransports: transportArray,
 *     screenId: 'screen-123',
 *     islevel: '1',
 *   },
 * });
 * ```
 */

export async function resumePauseStreams<
  TParticipant extends ParticipantLike = Participant,
  TTransport extends TransportLike = Transport,
  TStream = Stream,
>({
  parameters,
}: ResumePauseStreamsOptions<TParticipant, TTransport, TStream>): Promise<void> {
  try {
    // Destructure parameters
    const { participants, dispActiveNames, consumerTransports, screenId, islevel } = parameters;

    // Get the videoID of the host (islevel=2)
    const host = participants.find((obj) => obj.islevel === "2");
    const hostVideoID = host ? host.videoID : null;

    // Get videoIDs of participants in dispActiveNames and screenproducerId
    const videosIDs = dispActiveNames.map((name) => {
      const participant = participants.find((obj) => obj.name === name);
      return participant ? participant.videoID : null;
    });

    // Add screenproducerId to allVideoIDs if it's not null or empty
    if (screenId) {
      videosIDs.push(screenId);
    }

    // Add hostVideoID to allVideoIDs if it's not null or empty (only if the user is not the host)
    if (islevel !== "2" && hostVideoID) {
      videosIDs.push(hostVideoID);
    }

    // Remove null or empty videoIDs
    const allVideoIDs = videosIDs.filter(
      (videoID): videoID is string => videoID !== null && videoID !== ""
    );

    if (allVideoIDs.length > 0) {
      // Get consumer transports with producerId in allVideoIDs
      const consumerTransportsToResume = consumerTransports.filter(
        (transport) =>
          transport.producerId &&
          allVideoIDs.includes(transport.producerId) &&
          transport.consumer.kind !== "audio"
      );

      // Resume all consumerTransportsToResume
      for (const transport of consumerTransportsToResume) {
         transport.socket_.emit(
          "consumer-resume",
          { serverConsumerId: transport.serverConsumerTransportId },
          async ({ resumed }: { resumed: boolean }) => {
            if (resumed) {
               transport.consumer.resume();
            }
          }
        );
      }
    }
  } catch (error) {
    console.log("Error during resuming or pausing streams: ", error);
    // Handle errors during the process of resuming or pausing streams
  }
}

