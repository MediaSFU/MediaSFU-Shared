import type { Socket } from 'socket.io-client'
import { recordPauseTimer } from './recordPauseTimer'
import type { ShowAlert } from '../../types/types'

export interface StopRecordingParameters {
  roomName: string
  socket: Socket
  localSocket?: Socket
  showAlert?: ShowAlert
  startReport: boolean
  endReport: boolean
  recordStarted: boolean
  recordPaused: boolean
  recordStopped: boolean
  updateRecordPaused: (paused: boolean) => void
  updateRecordStopped: (stopped: boolean) => void
  updateStartReport: (startReport: boolean) => void
  updateEndReport: (endReport: boolean) => void
  updateShowRecordButtons: (show: boolean) => void
  whiteboardStarted: boolean
  whiteboardEnded: boolean
  recordingMediaOptions: string
  captureCanvasStream: (options: { parameters: any; start?: boolean }) => void
  getUpdatedAllParams: () => StopRecordingParameters
  [key: string]: any
}

export interface StopRecordingOptions {
  parameters: StopRecordingParameters
}

export type StopRecordingType = (options: StopRecordingOptions) => Promise<void>

/**
 * Stops the recording process if it has been started and not yet stopped.
 */
export const stopRecording: StopRecordingType = async ({ parameters }) => {
  let {
    roomName,
    socket,
    localSocket,
    showAlert,
    startReport,
    endReport,
    recordStarted,
    recordPaused,
    recordStopped,
    updateRecordPaused,
    updateRecordStopped,
    updateStartReport,
    updateEndReport,
    updateShowRecordButtons,
    whiteboardStarted,
    whiteboardEnded,
    recordingMediaOptions,
    captureCanvasStream,
  } = parameters

  let recAttempt = false

  if (recordStarted && !recordStopped) {
    const stop = recordPauseTimer({
      stop: true,
      isTimerRunning: parameters.isTimerRunning,
      canPauseResume: parameters.canPauseResume,
      showAlert: parameters.showAlert,
    })

    if (stop) {
      const action = 'stopRecord'

      const socketRef = localSocket && localSocket.connected ? localSocket : socket

      await new Promise<void>((resolve) => {
        socketRef.emit(
          action,
          { roomName },
          ({ success, reason, recordState }: { success: boolean; reason: string; recordState: string }) => {
            if (success) {
              startReport = false
              endReport = true
              recordPaused = false
              recordStopped = true
              recAttempt = true

              updateStartReport(startReport)
              updateEndReport(endReport)
              updateRecordPaused(recordPaused)
              updateRecordStopped(recordStopped)
              showAlert?.({ message: 'Recording Stopped', type: 'success' })
              updateShowRecordButtons(false)
            } else {
              const reasonMessage = `Recording Stop Failed: ${reason}; the recording is currently ${recordState}`
              showAlert?.({ message: reasonMessage, type: 'danger' })
              recAttempt = false
            }

            resolve()
          },
        )
      })

      try {
        if (
          recAttempt &&
          whiteboardStarted &&
          !whiteboardEnded &&
          recordingMediaOptions === 'video'
        ) {
          captureCanvasStream({ parameters: parameters.getUpdatedAllParams(), start: false })
        }
      } catch (error) {
        console.error('Error capturing canvas stream:', error)
      }
    } else {
      return
    }
  } else {
    showAlert?.({
      message: 'Recording is not started yet or already stopped',
      type: 'danger',
    })
  }
}
