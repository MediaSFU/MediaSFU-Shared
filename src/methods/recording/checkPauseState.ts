import type { ShowAlert } from '../../types/types'

export interface CheckPauseStateOptions {
  recordingMediaOptions: string
  recordingVideoPausesLimit: number
  recordingAudioPausesLimit: number
  pauseRecordCount: number
  showAlert?: ShowAlert
}

export type CheckPauseStateType = (options: CheckPauseStateOptions) => Promise<boolean>

/**
 * Checks if the recording can be paused based on the current pause count and the allowed pause limits.
 *
 * @param {Object} options - The options for checking the pause state.
 * @param {string} options.recordingMediaOptions - The type of media being recorded ("video" or "audio").
 * @param {number} options.recordingVideoPausesLimit - The maximum number of pauses allowed for video recordings.
 * @param {number} options.recordingAudioPausesLimit - The maximum number of pauses allowed for audio recordings.
 * @param {number} options.pauseRecordCount - The current count of pauses that have been made.
 * @param {Function} options.showAlert - Function to show an alert message if the pause limit is reached.
 *
 * @returns {Promise<boolean>} - Resolves to `true` if the recording can be paused, otherwise `false`.
 *
 * @example
 * ```typescript
 * const canPause = await checkPauseState({
 *   recordingMediaOptions: 'audio',
 *   recordingVideoPausesLimit: 3,
 *   recordingAudioPausesLimit: 5,
 *   pauseRecordCount: 4,
 *   showAlert: ({ message }) => console.log(message),
 * })
 * ```
 */
export const checkPauseState: CheckPauseStateType = async ({
  recordingMediaOptions,
  recordingVideoPausesLimit,
  recordingAudioPausesLimit,
  pauseRecordCount,
  showAlert,
}) => {
  const refLimit = recordingMediaOptions === 'video'
    ? recordingVideoPausesLimit
    : recordingAudioPausesLimit

  if (pauseRecordCount < refLimit) {
    return true
  }

  showAlert?.({
    message: 'You have reached the limit of pauses - you can choose to stop recording.',
    type: 'danger',
    duration: 3000,
  })
  return false
}
