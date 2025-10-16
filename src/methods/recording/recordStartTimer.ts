import { recordUpdateTimer } from './recordUpdateTimer'

export interface RecordStartTimerParameters {
  recordStartTime: number
  recordTimerInterval?: NodeJS.Timeout | null
  isTimerRunning: boolean
  canPauseResume: boolean
  recordChangeSeconds: number
  recordPaused: boolean
  recordStopped: boolean
  roomName: string | null
  updateRecordStartTime: (time: number) => void
  updateRecordTimerInterval: (interval: NodeJS.Timeout | null) => void
  updateIsTimerRunning: (isRunning: boolean) => void
  updateCanPauseResume: (canPause: boolean) => void
  recordElapsedTime: number
  updateRecordElapsedTime: (elapsed: number) => void
  updateRecordingProgressTime: (formatted: string) => void
  getUpdatedAllParams: () => RecordStartTimerParameters
  [key: string]: any
}

export interface RecordStartTimerOptions {
  parameters: RecordStartTimerParameters
}

export type RecordStartTimerType = (options: RecordStartTimerOptions) => Promise<void>

/**
 * Starts a recording timer and manages its state.
 *
 * @param {RecordStartTimerOptions} options - The options for starting the recording timer.
 * @param {Function} options.parameters.getUpdatedAllParams - Function to get updated parameters.
 * @param {number} options.parameters.recordStartTime - The start time of the recording.
 * @param {number | null} options.parameters.recordTimerInterval - The interval ID for the recording timer.
 * @param {boolean} options.parameters.isTimerRunning - Flag indicating if the timer is running.
 * @param {boolean} options.parameters.canPauseResume - Flag indicating if pause/resume actions are enabled.
 * @param {number} options.parameters.recordChangeSeconds - The time after which pause/resume actions are enabled.
 * @param {Function} options.parameters.updateRecordStartTime - Function to update the recording start time.
 * @param {Function} options.parameters.updateRecordTimerInterval - Function to update the recording timer interval.
 * @param {Function} options.parameters.updateIsTimerRunning - Function to update the timer running state.
 * @param {Function} options.parameters.updateCanPauseResume - Function to update the pause/resume state.
 *
 * @example
 * ```typescript
 * await recordStartTimer({ parameters })
 * ```
 */
export const recordStartTimer: RecordStartTimerType = async ({ parameters }) => {
  const { getUpdatedAllParams } = parameters
  parameters = getUpdatedAllParams()

  let {
    recordStartTime,
    recordTimerInterval,
    isTimerRunning,
    canPauseResume,
    recordChangeSeconds,
    updateRecordStartTime,
    updateRecordTimerInterval,
    updateIsTimerRunning,
    updateCanPauseResume,
  } = parameters

  const enablePauseResume = (): void => {
    canPauseResume = true
    updateCanPauseResume(canPauseResume)
  }

  if (!isTimerRunning) {
    recordStartTime = new Date().getTime()
    updateRecordStartTime(recordStartTime)

    recordTimerInterval = setInterval(() => {
      recordUpdateTimer({
        recordElapsedTime: parameters.recordElapsedTime,
        recordStartTime,
        updateRecordElapsedTime: parameters.updateRecordElapsedTime,
        updateRecordingProgressTime: parameters.updateRecordingProgressTime,
      })

      parameters = getUpdatedAllParams()

      if (
        parameters.recordPaused ||
        parameters.recordStopped ||
        parameters.roomName === '' ||
        parameters.roomName === null
      ) {
        clearInterval(recordTimerInterval!)
        updateRecordTimerInterval(null)
        isTimerRunning = false
        updateIsTimerRunning(isTimerRunning)
        canPauseResume = false
        updateCanPauseResume(canPauseResume)
      }
    }, 1000)

    updateRecordTimerInterval(recordTimerInterval)
    isTimerRunning = true
    updateIsTimerRunning(isTimerRunning)
    canPauseResume = false
    updateCanPauseResume(canPauseResume)
    setTimeout(enablePauseResume, recordChangeSeconds)
  }
}
