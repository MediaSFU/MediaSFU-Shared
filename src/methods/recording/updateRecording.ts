import type { Socket } from 'socket.io-client'
import { checkPauseState } from './checkPauseState'
import { checkResumeState } from './checkResumeState'
import { recordPauseTimer } from './recordPauseTimer'
import {
  recordResumeTimer,
  type RecordResumeTimerParameters,
} from './recordResumeTimer'
import type { ShowAlert, UserRecordingParams } from '../../types/types'

export interface UpdateRecordingParameters extends RecordResumeTimerParameters {
  roomName: string
  userRecordingParams: UserRecordingParams
  socket: Socket
  localSocket?: Socket
  updateIsRecordingModalVisible: (visible: boolean) => void
  confirmedToRecord: boolean
  showAlert?: ShowAlert
  recordingMediaOptions: string
  videoAlreadyOn: boolean
  audioAlreadyOn: boolean
  recordStarted: boolean
  recordPaused: boolean
  recordResumed: boolean
  recordStopped: boolean
  recordChangeSeconds: number
  pauseRecordCount: number
  startReport: boolean
  endReport: boolean
  canRecord: boolean
  canPauseResume: boolean
  updateCanPauseResume: (canPauseResume: boolean) => void
  updatePauseRecordCount: (count: number) => void
  updateClearedToRecord: (cleared: boolean) => void
  updateRecordPaused: (paused: boolean) => void
  updateRecordResumed: (resumed: boolean) => void
  updateStartReport: (start: boolean) => void
  updateEndReport: (end: boolean) => void
  updateCanRecord: (canRecord: boolean) => void
  rePort: UpdateRecordingRePort
  getUpdatedAllParams: () => UpdateRecordingParameters
  [key: string]: any
}

export type UpdateRecordingRePort = (options: {
  restart?: boolean
  parameters: any
}) => Promise<void>

export interface UpdateRecordingOptions {
  parameters: UpdateRecordingParameters
}

export type UpdateRecordingType = (options: UpdateRecordingOptions) => Promise<void>

/**
 * Updates the recording state based on the provided parameters.
 */
export const updateRecording: UpdateRecordingType = async ({ parameters }) => {
  let {
    roomName,
    userRecordingParams,
    socket,
    localSocket,
    updateIsRecordingModalVisible,
    confirmedToRecord,
    showAlert,
    recordingMediaOptions,
    videoAlreadyOn,
    audioAlreadyOn,
    recordStarted,
    recordPaused,
    recordResumed,
    recordStopped,
    recordChangeSeconds,
    pauseRecordCount,
    startReport,
    endReport,
    canRecord,
    canPauseResume,
    updateCanPauseResume,
    updatePauseRecordCount,
    updateClearedToRecord,
    updateRecordPaused,
    updateRecordResumed,
    updateStartReport,
    updateEndReport,
    updateCanRecord,
    rePort,
  } = parameters

  if (recordStopped) {
    showAlert?.({
      message: 'Recording has already stopped',
      type: 'danger',
      duration: 3000,
    })
    return
  }

  if (recordingMediaOptions === 'video' && !videoAlreadyOn) {
    showAlert?.({
      message: 'You must turn on your video before you can start recording',
      type: 'danger',
      duration: 3000,
    })
    return
  }

  if (recordingMediaOptions === 'audio' && !audioAlreadyOn) {
    showAlert?.({
      message: 'You must turn on your audio before you can start recording',
      type: 'danger',
      duration: 3000,
    })
    return
  }

  const socketRef = localSocket && localSocket.connected ? localSocket : socket

  if (recordStarted && !recordPaused && !recordStopped) {
    const proceed = await checkPauseState({
      recordingMediaOptions,
      recordingVideoPausesLimit: parameters.recordingVideoPausesLimit,
      recordingAudioPausesLimit: parameters.recordingAudioPausesLimit,
      pauseRecordCount,
      showAlert,
    })

    if (!proceed) return

    const record = recordPauseTimer({
      stop: false,
      isTimerRunning: parameters.isTimerRunning,
      canPauseResume: parameters.canPauseResume,
      showAlert,
    })

    if (record) {
      const action = 'pauseRecord'
      await new Promise<void>((resolve) => {
        socketRef.emit(
          action,
          { roomName },
          async ({ success, reason, recordState, pauseCount }: { success: boolean; reason: string; recordState: string; pauseCount: number }) => {
            pauseRecordCount = pauseCount
            updatePauseRecordCount(pauseRecordCount)

            if (success) {
              startReport = false
              endReport = true
              recordPaused = true
              updateStartReport(startReport)
              updateEndReport(endReport)
              updateRecordPaused(recordPaused)

              showAlert?.({
                message: 'Recording paused',
                type: 'success',
                duration: 3000,
              })

              updateIsRecordingModalVisible(false)

              setTimeout(() => {
                canPauseResume = true
                updateCanPauseResume(canPauseResume)
              }, recordChangeSeconds)
            } else {
              showAlert?.({
                message: `Recording Pause Failed: ${reason}; the current state is: ${recordState}`,
                type: 'danger',
                duration: 3000,
              })
            }
            resolve()
          },
        )
      })
    }
  } else if (recordStarted && recordPaused && !recordStopped) {
    if (!confirmedToRecord) {
      showAlert?.({
        message: 'You must click confirm before you can start recording',
        type: 'danger',
        duration: 3000,
      })
      return
    }

    const proceed = await checkResumeState({
      recordingMediaOptions,
      recordingVideoPausesLimit: parameters.recordingVideoPausesLimit,
      recordingAudioPausesLimit: parameters.recordingAudioPausesLimit,
      pauseRecordCount,
    })

    if (!proceed) return

    const resume = await recordResumeTimer({ parameters })
    if (resume) {
      updateClearedToRecord(true)

      const action = 'resumeRecord'
      await new Promise<void>((resolve) => {
        socketRef.emit(
          action,
          { roomName, userRecordingParams },
          async ({ success, reason }: { success: boolean; reason: string }) => {
            if (success) {
              recordResumed = true
              recordPaused = false

              updateRecordPaused(recordPaused)
              updateRecordResumed(recordResumed)

              await rePort({ restart: true, parameters: parameters.getUpdatedAllParams() })
            } else {
              showAlert?.({
                message: `Recording could not resume - ${reason}`,
                type: 'danger',
                duration: 3000,
              })
            }
            canRecord = true
            startReport = false
            endReport = true

            updateCanRecord(canRecord)
            updateStartReport(startReport)
            updateEndReport(endReport)

            resolve()
          },
        )
      })

      updateIsRecordingModalVisible(false)

      setTimeout(() => {
        updateCanPauseResume(true)
      }, recordChangeSeconds)
    }
  }
}
