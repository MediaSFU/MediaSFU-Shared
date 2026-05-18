import type { ShowAlert } from '../../types/types'
import { recordUpdateTimer } from './recordUpdateTimer'

export interface RecordResumeTimerParameters {
  isTimerRunning: boolean
  canPauseResume: boolean
  recordElapsedTime: number
  recordStartTime: number
  recordTimerInterval?: ReturnType<typeof setInterval> | null
  showAlert?: ShowAlert
  recordPaused: boolean
  recordStopped: boolean
  roomName: string | null
  updateRecordStartTime: (time: number) => void
  updateRecordTimerInterval: (interval: ReturnType<typeof setInterval> | null) => void
  updateIsTimerRunning: (isRunning: boolean) => void
  updateCanPauseResume: (canPause: boolean) => void
  updateRecordElapsedTime: (elapsed: number) => void
  updateRecordingProgressTime: (formatted: string) => void
  getUpdatedAllParams: () => RecordResumeTimerParameters
  [key: string]: any
}

export interface RecordResumeTimerOptions {
  parameters: RecordResumeTimerParameters
}

export type RecordResumeTimerType = (options: RecordResumeTimerOptions) => Promise<boolean>

/**
 * Resumes the recording timer if it is not already running and can be paused/resumed.
 */
export const recordResumeTimer: RecordResumeTimerType = async ({ parameters }) => {
  const { getUpdatedAllParams } = parameters
  parameters = getUpdatedAllParams()

  let {
    isTimerRunning,
    canPauseResume,
    recordElapsedTime,
    recordStartTime,
    recordTimerInterval,
    showAlert,
    updateRecordStartTime,
    updateRecordTimerInterval,
    updateIsTimerRunning,
    updateCanPauseResume,
  } = parameters

  if (!isTimerRunning && canPauseResume) {
    recordStartTime = new Date().getTime() - recordElapsedTime * 1000
    updateRecordStartTime(recordStartTime)

    recordTimerInterval = setInterval(() => {
      recordUpdateTimer({
        recordElapsedTime,
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

    updateRecordTimerInterval(recordTimerInterval!)
    isTimerRunning = true
    updateIsTimerRunning(isTimerRunning)
    canPauseResume = false
    updateCanPauseResume(canPauseResume)
    return true
  }

  showAlert?.({
    type: 'danger',
    message: 'Can only pause or resume after 15 seconds of starting or pausing or resuming recording',
  })
  return false
}
