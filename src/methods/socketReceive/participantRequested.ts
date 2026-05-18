import type { Request, WaitingRoomParticipant } from '../../types/types';

export interface ParticipantRequestedOptions {
  userRequest: Request;
  requestList: Request[];
  waitingRoomList: WaitingRoomParticipant[];
  updateTotalReqWait: (count: number) => void;
  updateRequestList: (list: Request[]) => void;
}

export type ParticipantRequestedType = (
  options: ParticipantRequestedOptions,
) => Promise<void>;

/**
 * Appends a new participant request and refreshes the combined request/waiting count.
 *
 * @param {ParticipantRequestedOptions} options - Request payload and state setters.
 * @returns {Promise<void>} Resolves after the request state is updated.
 *
 * @example
 * ```typescript
 * await participantRequested({
 *   userRequest,
 *   requestList,
 *   waitingRoomList,
 *   updateRequestList: setRequestList,
 *   updateTotalReqWait: setTotalReqWait,
 * });
 * ```
 */
export const participantRequested = async ({
  userRequest,
  requestList,
  waitingRoomList,
  updateTotalReqWait,
  updateRequestList,
}: ParticipantRequestedOptions): Promise<void> => {
  const hasMatchingRequest = requestList.some(
    (request) => request.id === userRequest.id && request.icon === userRequest.icon,
  );

  const updatedRequestList = hasMatchingRequest
    ? requestList
    : [...requestList, userRequest];
  updateRequestList(updatedRequestList);
  updateTotalReqWait(updatedRequestList.length + waitingRoomList.length);
};
