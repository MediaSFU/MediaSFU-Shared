export interface StartRecordsSocketLike {
  emit: (
    event: string,
    payload: { roomName: string; member: string },
    callback?: (response: { success: boolean }) => void,
  ) => void;
}

export interface StartRecordsOptions {
  roomName: string;
  member: string;
  socket: StartRecordsSocketLike;
}

export type StartRecordsType = (options: StartRecordsOptions) => Promise<void>;

/**
 * Requests recording startup for the current room.
 *
 * @param {StartRecordsOptions} options - Room, member, and socket details.
 * @returns {Promise<void>} Resolves after the emit request is sent.
 *
 * @example
 * ```typescript
 * await startRecords({
 *   roomName: 'RoomA',
 *   member: 'AdminUser',
 *   socket,
 * });
 * ```
 */
export const startRecords = async ({
  roomName,
  member,
  socket,
}: StartRecordsOptions): Promise<void> => {
  socket.emit(
    'startRecordIng',
    { roomName, member },
    ({ success }: { success: boolean }) => {
      if (!success) {
        // no-op: caller-controlled UX
      }
    },
  );
};
