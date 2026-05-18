import { Participant, Stream, ProcessConsumerTransportsAudioParameters, Transport, EventType } from '../types/types';

interface BreakoutParticipantLike {
  name: string;
  breakRoom?: number | null;
}

interface ParticipantLike {
  name: string;
  islevel?: string | null;
  audioID?: string | null;
  producerId?: string | null;
  breakRoom?: number | null;
}

interface MediaEntryLike {
  producerId?: string | null;
  audioID?: string | null;
}

interface AudioTransportLike {
  producerId?: string | null;
  consumer?: {
    paused?: boolean;
    kind?: string;
    pause: () => unknown;
    resume: () => unknown;
  };
  socket_: {
    emit: (
      event: string,
      payload: { serverConsumerId: string },
      callback?: ((payload?: { resumed: boolean }) => void | Promise<unknown>)
    ) => void;
  };
  serverConsumerTransportId: string;
}

export interface ResumePauseAudioStreamsParameters<
  TTransport extends AudioTransportLike = Transport,
  TMediaEntry extends MediaEntryLike | ParticipantLike = Stream | Participant,
> extends ProcessConsumerTransportsAudioParameters {
  breakoutRooms: BreakoutParticipantLike[][];
  ref_participants: ParticipantLike[];
  allAudioStreams: TMediaEntry[];
  participants: ParticipantLike[];
  islevel: string;
  eventType: EventType;
  consumerTransports: TTransport[];
  limitedBreakRoom: BreakoutParticipantLike[];
  hostNewRoom: number;
  member: string;
  updateLimitedBreakRoom: (limitedBreakRoom: BreakoutParticipantLike[]) => void;

  // mediasfu functions
  processConsumerTransportsAudio: (options: {
    consumerTransports: TTransport[];
    lStreams: TMediaEntry[];
    parameters: ProcessConsumerTransportsAudioParameters;
  }) => Promise<void>;
  getUpdatedAllParams: () => ResumePauseAudioStreamsParameters<TTransport, TMediaEntry>;
  [key: string]: any;
}

export interface ResumePauseAudioStreamsOptions<
  TTransport extends AudioTransportLike = Transport,
  TMediaEntry extends MediaEntryLike | ParticipantLike = Stream | Participant,
> {
  breakRoom?: number;
  inBreakRoom?: boolean;
  parameters: ResumePauseAudioStreamsParameters<TTransport, TMediaEntry>;
}

// Export the type definition for the function
export type ResumePauseAudioStreamsType = (
  options: ResumePauseAudioStreamsOptions
) => Promise<void>;

/**
 * Resumes or pauses audio streams based on the provided options.
 *
 * @param {ResumePauseAudioStreamsOptions} options - The options for resuming or pausing audio streams.
 * @param {number} [options.breakRoom=-1] - The ID of the break room.
 * @param {boolean} [options.inBreakRoom=false] - Indicates if the participant is in a break room.
 * @param {ResumePauseAudioStreamsParameters} options.parameters - The parameters required for processing audio streams.
 *
 * @returns {Promise<void>} A promise that resolves when the audio streams have been processed.
 *
 * @throws Will log an error message if there is an issue processing the audio streams.
 *
 * @example
 * ```typescript
 * await resumePauseAudioStreams({
 *   breakRoom: 1,
 *   inBreakRoom: true,
 *   parameters: {
 *     // ...parameters here
 *   },
 * });
 * ```
 */

export const resumePauseAudioStreams = async <
  TTransport extends AudioTransportLike = Transport,
  TMediaEntry extends MediaEntryLike | ParticipantLike = Stream | Participant,
>({
  breakRoom = -1,
  inBreakRoom = false,
  parameters,
}: ResumePauseAudioStreamsOptions<TTransport, TMediaEntry>): Promise<void> => {
  const { getUpdatedAllParams } = parameters;
  parameters = getUpdatedAllParams();

  const {
    breakoutRooms,
    ref_participants,
    allAudioStreams,
    participants,
    islevel,
    eventType,
    consumerTransports,
    hostNewRoom,
    member,
    updateLimitedBreakRoom,
    processConsumerTransportsAudio,
  } = parameters;

  let room: BreakoutParticipantLike[] = [];
  let currentStreams: TMediaEntry[] = [];
  // Determine the room based on breakout status
  if (inBreakRoom && breakRoom !== -1) {
    room = breakoutRooms[breakRoom];
  } else {
    room = ref_participants
    .filter((participant) =>
      !breakoutRooms
        .flat()
        .map((obj) => obj.name)
        .includes(participant!.name)
    )
    .map(({ name, breakRoom }) => ({ name, breakRoom }));
  
  }

  updateLimitedBreakRoom(room);

  try {
    let addHostAudio = false;

    if (islevel !== "2" && eventType === "conference") {
      const roomMember = breakoutRooms.find((r) =>
        r.find((p) => p.name === member)
      );
      let memberBreakRoom = -1;
      if (roomMember) {
        memberBreakRoom = breakoutRooms.indexOf(roomMember);
      }

      if (
        (inBreakRoom && breakRoom !== hostNewRoom) ||
        (!inBreakRoom && hostNewRoom !== -1 && hostNewRoom !== memberBreakRoom)
      ) {
        const host = participants.find((obj) => obj.islevel === "2");
        // Remove the host from the room
        room = room.filter((participant) => participant.name !== host?.name);
      } else {
        if (
          (inBreakRoom && breakRoom === hostNewRoom) ||
          (!inBreakRoom && hostNewRoom === -1) ||
          (!inBreakRoom &&
            hostNewRoom === memberBreakRoom &&
            memberBreakRoom !== -1)
        ) {
          addHostAudio = true;
        }
      }
    }

    for (let participant of room) {
      let streams = allAudioStreams.filter((stream) => {
        if (
          (Object.prototype.hasOwnProperty.call(stream, "producerId") && stream.producerId) ||
          (Object.prototype.hasOwnProperty.call(stream, "audioID") && stream.audioID)
        ) {
          let producerId = stream.producerId || stream.audioID;
          let matchingParticipant = ref_participants.find(
            (obj) => obj.audioID == producerId
        );
          return (
            matchingParticipant && matchingParticipant.name == participant.name
          );
        }
        // Return false if the stream doesn't meet the criteria
        return false;
      });

      currentStreams.push(...streams);
    }

    // If webinar, add the host audio stream if it is not in the currentStreams
    if (islevel !== "2" && (eventType === "webinar" || addHostAudio)) {
      const host = participants.find((obj) => obj.islevel === "2");
      const hostStream = allAudioStreams.find(
        (obj) => obj.producerId === host?.audioID
      );
      if (hostStream && !currentStreams.includes(hostStream)) {
        currentStreams.push(hostStream);
        if (!room.map((obj) => obj.name).includes(host?.name ?? "")) {
          room.push({ name: host?.name || "", breakRoom: -1 });
        }
        updateLimitedBreakRoom(room);
      }
    }

    await processConsumerTransportsAudio({
      consumerTransports,
      lStreams: currentStreams,
      parameters,
    });
  } catch (error) {
    console.log('Error in resumePauseAudioStreams:', error);
  }
};
