import type { ShowAlert } from '../../types/types';

export interface StoppedRecordingOptions {
  state: string;
  reason: string;
  showAlert?: ShowAlert;
}

export type StoppedRecordingType = (
  options: StoppedRecordingOptions,
) => Promise<void>;

/**
 * Shows a reasoned alert when the backend reports that recording has stopped.
 *
 * @param {StoppedRecordingOptions} options - Recording stop state and alert helper.
 * @returns {Promise<void>} Resolves after the alert is dispatched.
 *
 * @example
 * ```typescript
 * await stoppedRecording({
 *   state: 'stop',
 *   reason: 'The session ended',
 *   showAlert,
 * });
 * ```
 */
export const stoppedRecording = async ({
  state,
  reason,
  showAlert,
}: StoppedRecordingOptions): Promise<void> => {
  try {
    if (state === 'stop') {
      showAlert?.({
        message: `The recording has stopped - ${reason}.`,
        duration: 3000,
        type: 'danger',
      });
    }
  } catch (error) {
    console.log('Error in stoppedRecording: ', error);
  }
};
