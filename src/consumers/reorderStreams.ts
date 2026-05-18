 
import { Participant, Stream } from "../types/types";

interface ReorderStreamLike {
  producerId?: string | null;
}

interface ReorderParticipantLike {
  name: string;
  islevel?: string | null;
  videoID?: string | null;
  ScreenID?: string | null;
}

type ChangeVidsInvoker = (options: {
  screenChanged?: boolean;
  parameters: any;
}) => Promise<void>;

type StreamCollectionUpdater<TEntry> = {
  bivarianceHack: (streams: TEntry[]) => void;
}["bivarianceHack"];

const getProducerId = (value: unknown): string | null | undefined => {
  return (value as ReorderStreamLike | null | undefined)?.producerId;
};

export interface ReorderStreamsParameters<
  TStream extends ReorderStreamLike = Stream,
  TParticipant extends ReorderParticipantLike = Participant,
  TChangeVidsParameters = unknown,
> {
  allVideoStreams: (TStream | TParticipant)[];
  participants: TParticipant[];
  oldAllStreams: (TStream | TParticipant)[];
  screenId?: string;
  adminVidID?: string;
  newLimitedStreams: (TStream | TParticipant)[];
  newLimitedStreamsIDs: string[];
  activeSounds: string[];
  screenShareIDStream?: string;
  screenShareNameStream?: string;
  adminIDStream?: string;
  adminNameStream?: string;
  updateNewLimitedStreams: StreamCollectionUpdater<TStream | TParticipant>;
  updateNewLimitedStreamsIDs: (ids: string[]) => void;
  updateActiveSounds: (sounds: string[]) => void;
  updateScreenShareIDStream: (id: string) => void;
  updateScreenShareNameStream: (name: string) => void;
  updateAdminIDStream: (id: string) => void;
  updateAdminNameStream: (name: string) => void;
  updateYouYouStream: StreamCollectionUpdater<TStream | TParticipant>;

  // mediasfu functions
  changeVids: ChangeVidsInvoker;
  getUpdatedAllParams: () => ReorderStreamsParameters<TStream, TParticipant, TChangeVidsParameters>;
  [key: string]: any;
}

export interface ReorderStreamsOptions<
  TParameters extends ReorderStreamsParameters<any, any, any> = ReorderStreamsParameters,
> {
  add?: boolean;
  screenChanged?: boolean;
  parameters: TParameters;
}


export type ReorderStreamsType = <
  TParameters extends ReorderStreamsParameters<any, any, any> = ReorderStreamsParameters,
>(options: ReorderStreamsOptions<TParameters>) => Promise<void>;

/**
 * Reorders the video streams based on the provided options and updates the UI accordingly.
 *
 * @param {ReorderStreamsOptions} options - The options for reordering streams.
 * @param {boolean} [options.add=false] - Whether to add new streams or not.
 * @param {boolean} [options.screenChanged=false] - Whether the screen has changed or not.
 * @param {Object} options.parameters - The parameters required for reordering streams.
 * @param {Function} options.parameters.getUpdatedAllParams - Function to get updated parameters.
 * @param {Array} options.parameters.allVideoStreams - Array of all video streams.
 * @param {Array} options.parameters.participants - Array of participants.
 * @param {Array} options.parameters.oldAllStreams - Array of old streams.
 * @param {string} options.parameters.screenId - ID of the screen.
 * @param {string} options.parameters.adminVidID - ID of the admin video.
 * @param {Array} options.parameters.newLimitedStreams - Array of new limited streams.
 * @param {Array} options.parameters.newLimitedStreamsIDs - Array of new limited stream IDs.
 * @param {Array} options.parameters.activeSounds - Array of active sounds.
 * @param {string} options.parameters.screenShareIDStream - ID of the screen share stream.
 * @param {string} options.parameters.screenShareNameStream - Name of the screen share stream.
 * @param {string} options.parameters.adminIDStream - ID of the admin stream.
 * @param {string} options.parameters.adminNameStream - Name of the admin stream.
 * @param {Function} options.parameters.updateNewLimitedStreams - Function to update new limited streams.
 * @param {Function} options.parameters.updateNewLimitedStreamsIDs - Function to update new limited stream IDs.
 * @param {Function} options.parameters.updateActiveSounds - Function to update active sounds.
 * @param {Function} options.parameters.updateScreenShareIDStream - Function to update screen share ID stream.
 * @param {Function} options.parameters.updateScreenShareNameStream - Function to update screen share name stream.
 * @param {Function} options.parameters.updateAdminIDStream - Function to update admin ID stream.
 * @param {Function} options.parameters.updateAdminNameStream - Function to update admin name stream.
 * @param {Function} options.parameters.updateYouYouStream - Function to update YouYou stream.
 * @param {Function} options.parameters.changeVids - Function to reflect changes on the UI.
 *
 * @returns {Promise<void>} A promise that resolves when the reordering is complete.
 *
 * @throws {Error} Throws an error if there is an issue updating the streams.
 *
 * @example
 * ```typescript
 * await reorderStreams({
 *   add: true,
 *   screenChanged: false,
 *   parameters: {
 *     allVideoStreams: [...],
 *     participants: [...],
 *     // additional parameters...
 *   },
 * });
 * ```
 */

export const reorderStreams = async <
  TParameters extends ReorderStreamsParameters<any, any, any> = ReorderStreamsParameters,
>({
  add = false,
  screenChanged = false,
  parameters,
}: ReorderStreamsOptions<TParameters>): Promise<void> => {
  const { getUpdatedAllParams } = parameters;
  const updatedParameters = getUpdatedAllParams() as TParameters;

  let {
    allVideoStreams,
    participants,
    oldAllStreams,
    screenId,
    adminVidID,
    newLimitedStreams,
    newLimitedStreamsIDs,
    activeSounds,
    screenShareIDStream,
    screenShareNameStream,
    adminIDStream,
    adminNameStream,
    updateNewLimitedStreams,
    updateNewLimitedStreamsIDs,
    updateActiveSounds,
    updateScreenShareIDStream,
    updateScreenShareNameStream,
    updateAdminIDStream,
    updateAdminNameStream,
    updateYouYouStream,

    //mediasfu functions
    changeVids,
  } = updatedParameters;

  // function to reorder streams on the ui
  if (!add) {
    newLimitedStreams = [];
    newLimitedStreamsIDs = [];
    activeSounds = [];
  }

  const youyou = allVideoStreams.filter((stream) => getProducerId(stream) === "youyou");
  const admin = participants.filter((participant) => participant.islevel === "2");

  if (admin.length > 0) {
    adminVidID = admin[0].videoID ?? undefined;
  } else {
    adminVidID = "";
  }

  if (adminVidID) {
    const adminStream = allVideoStreams.find((stream) => getProducerId(stream) === adminVidID);

    if (!add) {
      newLimitedStreams = [...newLimitedStreams, ...youyou];
      newLimitedStreamsIDs = [...newLimitedStreamsIDs, ...youyou.map((stream) => getProducerId(stream) ?? "")];
    } else {
      const youyouStream = newLimitedStreams.find((stream) => getProducerId(stream) === "youyou");

      if (!youyouStream) {
        newLimitedStreams = [...newLimitedStreams, ...youyou];
        newLimitedStreamsIDs = [...newLimitedStreamsIDs, ...youyou.map((stream) => getProducerId(stream) ?? "")];
      }
    }

    if (adminStream) {
      adminIDStream = adminVidID;

      if (!add) {
        newLimitedStreams = [...newLimitedStreams, adminStream];
        newLimitedStreamsIDs = [...newLimitedStreamsIDs, getProducerId(adminStream) ?? ""];
      } else {
        const adminStreamer = newLimitedStreams.find((stream) => getProducerId(stream) === adminVidID);

        if (!adminStreamer) {
          newLimitedStreams = [...newLimitedStreams, adminStream];
          newLimitedStreamsIDs = [...newLimitedStreamsIDs, getProducerId(adminStream) ?? ""];
        }
      }
    } else {
      const oldAdminStream = oldAllStreams.find((stream) => getProducerId(stream) === adminVidID);

      if (oldAdminStream) {
        //add it to the allVideoStream

        adminIDStream = adminVidID;
        adminNameStream = admin[0].name;

        if (!add) {
          newLimitedStreams = [...newLimitedStreams, oldAdminStream];
          newLimitedStreamsIDs = [...newLimitedStreamsIDs, getProducerId(oldAdminStream) ?? ""];
        } else {
          const adminStreamer = newLimitedStreams.find((stream) => getProducerId(stream) === adminVidID);

          if (!adminStreamer) {
            newLimitedStreams = [...newLimitedStreams, oldAdminStream];
            newLimitedStreamsIDs = [...newLimitedStreamsIDs, getProducerId(oldAdminStream) ?? ""];
          }
        }
      }
    }

    const screenParticipant = participants.filter((participant) => participant.ScreenID === screenId);

    if (screenParticipant.length > 0) {
      const screenParticipantVidID = screenParticipant[0].videoID ?? undefined;
      const screenParticipantVidID_ = newLimitedStreams.filter((stream) => getProducerId(stream) === screenParticipantVidID);

      if (screenParticipantVidID_?.length < 1 && screenParticipantVidID) {
        screenShareIDStream = screenParticipantVidID;
        screenShareNameStream = screenParticipant[0].name;
        const screenParticipantVidID__ = allVideoStreams.filter((stream) => getProducerId(stream) === screenParticipantVidID);
        newLimitedStreams = [...newLimitedStreams, ...screenParticipantVidID__];
        newLimitedStreamsIDs = [...newLimitedStreamsIDs, ...screenParticipantVidID__.map((stream) => getProducerId(stream) ?? "")];
      }
    }
  } else {
    if (!add) {
      newLimitedStreams = [...newLimitedStreams, ...youyou];
      newLimitedStreamsIDs = [...newLimitedStreamsIDs, ...youyou.map((stream) => getProducerId(stream) ?? "")];
    } else {
      const youyouStream = newLimitedStreams.find((stream) => getProducerId(stream) === "youyou");

      if (!youyouStream) {
        newLimitedStreams = [...newLimitedStreams, ...youyou];
        newLimitedStreamsIDs = [...newLimitedStreamsIDs, ...youyou.map((stream) => getProducerId(stream) ?? "")];
      }
    }

    const screenParticipant = participants.filter((participant) => participant.ScreenID === screenId);

    if (screenParticipant.length > 0) {
      const screenParticipantVidID = screenParticipant[0].videoID ?? undefined;
      const screenParticipantVidID_ = newLimitedStreams.filter((stream) => getProducerId(stream) === screenParticipantVidID);

      if (screenParticipantVidID_?.length < 1 && screenParticipantVidID) {
        screenShareIDStream = screenParticipantVidID;
        screenShareNameStream = screenParticipant[0].name;
        const screenParticipantVidID__ = allVideoStreams.filter((stream) => getProducerId(stream) === screenParticipantVidID);
        newLimitedStreams = [...newLimitedStreams, ...screenParticipantVidID__];
        newLimitedStreamsIDs = [...newLimitedStreamsIDs, ...screenParticipantVidID__.map((stream) => getProducerId(stream) ?? "")];
      }
    }
  }

  updateNewLimitedStreams(newLimitedStreams);
  updateNewLimitedStreamsIDs(newLimitedStreamsIDs);
  updateActiveSounds(activeSounds);
  updateScreenShareIDStream(screenShareIDStream!);
  updateScreenShareNameStream(screenShareNameStream!);
  updateAdminIDStream(adminIDStream!);
  updateAdminNameStream(adminNameStream!);
  updateYouYouStream(youyou);

  //reflect the changes on the ui
  await changeVids({ screenChanged, parameters: updatedParameters });
};

