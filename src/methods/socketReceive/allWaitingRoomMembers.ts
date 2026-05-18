import type { WaitingRoomParticipant } from '../../types/types';

export interface AllWaitingRoomMembersOptions {
  waitingParticipants: WaitingRoomParticipant[];
  updateWaitingRoomList: (participants: WaitingRoomParticipant[]) => void;
  updateTotalReqWait: (totalReqs: number) => void;
}

export type AllWaitingRoomMembersType = (
  options: AllWaitingRoomMembersOptions,
) => Promise<void>;

/**
 * Replaces the waiting-room list and recalculates the combined waiting count.
 *
 * @param {AllWaitingRoomMembersOptions} options - Waiting-room state setters.
 * @returns {Promise<void>} Resolves after the state updates run.
 *
 * @example
 * ```typescript
 * await allWaitingRoomMembers({
 *   waitingParticipants,
 *   updateWaitingRoomList: setWaitingRoomList,
 *   updateTotalReqWait: setTotalReqWait,
 * });
 * ```
 */
export const allWaitingRoomMembers = async ({
  waitingParticipants,
  updateWaitingRoomList,
  updateTotalReqWait,
}: AllWaitingRoomMembersOptions): Promise<void> => {
  updateWaitingRoomList(waitingParticipants);
  updateTotalReqWait(waitingParticipants.length);
};
