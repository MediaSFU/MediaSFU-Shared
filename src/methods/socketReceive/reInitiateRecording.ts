export interface ReInitiateRecordingSocketLike {
  emit: (
    event: string,
    payload: { roomName: string; member: string },
    callback?: (response: { success: boolean }) => void,
  ) => void;
}

export interface ReInitiateRecordingOptions {
  roomName: string;
  member: string;
  socket: ReInitiateRecordingSocketLike;
  adminRestrictSetting: boolean;
}

export type ReInitiateRecordingType = (
  options: ReInitiateRecordingOptions,
) => Promise<void>;

/**
 * Re-requests recording startup when host controls allow it.
 *
 * @param {ReInitiateRecordingOptions} options - Room identity, socket, and admin restriction state.
 * @returns {Promise<void>} Resolves after the emit request is sent or skipped.
 *
 * @example
 * ```typescript
 * await reInitiateRecording({
 *   roomName: 'exampleRoom',
 *   member: 'adminUser',
 *   socket,
 *   adminRestrictSetting: false,
 * });
 * ```
 */
export const reInitiateRecording = async ({
  roomName,
  member,
  socket,
  adminRestrictSetting,
}: ReInitiateRecordingOptions): Promise<void> => {
  if (!adminRestrictSetting) {
    socket.emit(
      'startRecordIng',
      { roomName, member },
      ({ success }: { success: boolean }) => {
        if (!success) {
          // no-op: caller-controlled UX
        }
      },
    );
  }
};
