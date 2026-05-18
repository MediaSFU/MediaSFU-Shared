import type { ResponseJoinLocalRoom, ResponseJoinRoom } from '../../types/types';

export interface CreateResponseJoinRoomOptions {
  localRoom: ResponseJoinLocalRoom;
}

export type CreateResponseJoinRoomType = (options: CreateResponseJoinRoomOptions) => Promise<ResponseJoinRoom>;

/**
 * Converts a local-room join response into the broader MediaSFU join response shape.
 *
 * This helper is useful when local/demo or self-hosted room flows need to be
 * normalized to the same response contract consumed by the main runtime.
 *
 * @param options Response conversion options.
 * @returns A normalized `ResponseJoinRoom` object.
 *
 * @example
 * ```typescript
 * const normalized = await createResponseJoinRoom({ localRoom });
 * if (normalized.success) {
 *   console.log(normalized.meetingRoomParams);
 * }
 * ```
 */
export const createResponseJoinRoom: CreateResponseJoinRoomType = async ({
  localRoom,
}: CreateResponseJoinRoomOptions): Promise<ResponseJoinRoom> => {
  return {
    rtpCapabilities: localRoom.rtpCapabilities ?? null,
    success: localRoom.rtpCapabilities !== null,
    roomRecvIPs: [],
    meetingRoomParams: localRoom.eventRoomParams,
    recordingParams: localRoom.recordingParams,
    secureCode: localRoom.secureCode,
    recordOnly: false,
    isHost: localRoom.isHost,
    safeRoom: false,
    autoStartSafeRoom: false,
    safeRoomStarted: false,
    safeRoomEnded: false,
    reason: localRoom.isBanned ? 'User is banned from the room.' : undefined,
    banned: localRoom.isBanned,
    suspended: false,
    noAdmin: localRoom.hostNotJoined,
  };
};