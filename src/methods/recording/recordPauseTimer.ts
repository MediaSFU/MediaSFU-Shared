import type { ShowAlert } from '../../types/types'

export interface RecordPauseTimerOptions {
  stop?: boolean
  isTimerRunning: boolean
  canPauseResume: boolean
  showAlert?: ShowAlert
}

export type RecordPauseTimerType = (options: RecordPauseTimerOptions) => boolean

/**
 * Records the pause timer.
 *
 * @param {RecordPauseTimerOptions} options - The options for recording the pause timer.
 * @param {boolean} options.stop - A flag to stop the timer.
 * @param {boolean} options.isTimerRunning - Indicates if the timer is running.
 * @param {boolean} options.canPauseResume - Indicates if the timer can be paused or resumed.
 * @param {Function} options.showAlert - Function to show alerts.
 *
 * @returns {boolean} `true` if the timer can be paused or resumed, otherwise `false`.
 *
 * @example
 * ```typescript
 * const canPause = recordPauseTimer({
 *   stop: false,
 *   isTimerRunning: true,
 *   canPauseResume: true,
 *   showAlert: (alert) => console.log(alert.message),
 * })
 * ```
 */
export const recordPauseTimer: RecordPauseTimerType = ({
  stop = false,
  isTimerRunning,
  canPauseResume,
  showAlert,
}) => {
  if (isTimerRunning && canPauseResume) {
    return true
  }

  const message = stop
    ? 'Can only stop after 15 seconds of starting or pausing or resuming recording'
    : 'Can only pause or resume after 15 seconds of starting or pausing or resuming recording'

  showAlert?.({
    message,
    type: 'danger',
  })
  return false
}
