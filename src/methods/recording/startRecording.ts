import type { Socket } from 'socket.io-client'
import {
  recordStartTimer,
  type RecordStartTimerParameters,
} from './recordStartTimer'
import {
  recordResumeTimer,
  type RecordResumeTimerParameters,
} from './recordResumeTimer'
import type { UserRecordingParams, ShowAlert } from '../../types/types'

export interface StartRecordingParameters
  extends RecordStartTimerParameters,
    RecordResumeTimerParameters {
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
  startReport: boolean
  endReport: boolean
  canRecord: boolean
  updateClearedToRecord: (cleared: boolean) => void
  updateRecordStarted: (started: boolean) => void
  updateRecordPaused: (paused: boolean) => void
  updateRecordResumed: (resumed: boolean) => void
  updateStartReport: (started: boolean) => void
  updateEndReport: (ended: boolean) => void
  updateCanRecord: (canRecord: boolean) => void
  whiteboardStarted: boolean
  whiteboardEnded: boolean
  rePort: StartRecordingRePort
  captureCanvasStream: StartRecordingCaptureCanvasStream
  getUpdatedAllParams: () => StartRecordingParameters
  [key: string]: any
}

export type StartRecordingRePort = (options: {
  restart?: boolean
  parameters: any
}) => Promise<void>

export type StartRecordingCaptureCanvasStream = (options: {
  parameters: any
  start?: boolean
}) => Promise<void>

export interface StartRecordingOptions {
  parameters: StartRecordingParameters
}

export type StartRecordingType = (
  options: StartRecordingOptions,
) => Promise<boolean | undefined>

/**
 * Starts the recording process based on the provided parameters.
 *
 * @param {StartRecordingOptions} options - The options for starting the recording.
 * @param {object} options.parameters - The parameters required for starting the recording.
 * @param {string} options.parameters.roomName - The name of the room where recording is to be started.
 * @param {object} options.parameters.userRecordingParams - User-specific recording parameters.
 * @param {object} options.parameters.socket - The socket instance for communication.
 * @param {object} options.parameters.localSocket - The local socket instance for communication.
 * @param {function} options.parameters.updateIsRecordingModalVisible - Function to update the visibility of the recording modal.
 * @param {boolean} options.parameters.confirmedToRecord - Flag indicating if the user has confirmed to record.
 * @param {function} options.parameters.showAlert - Function to show alerts.
 * @param {string} options.parameters.recordingMediaOptions - The media options for recording (e.g., "video", "audio").
 * @param {boolean} options.parameters.videoAlreadyOn - Flag indicating if the video is already on.
 * @param {boolean} options.parameters.audioAlreadyOn - Flag indicating if the audio is already on.
 * @param {boolean} options.parameters.recordStarted - Flag indicating if the recording has started.
 * @param {boolean} options.parameters.recordPaused - Flag indicating if the recording is paused.
 * @param {boolean} options.parameters.recordResumed - Flag indicating if the recording is resumed.
 * @param {boolean} options.parameters.recordStopped - Flag indicating if the recording is stopped.
 * @param {boolean} options.parameters.startReport - Flag indicating if the start report is active.
 * @param {boolean} options.parameters.endReport - Flag indicating if the end report is active.
 * @param {boolean} options.parameters.canRecord - Flag indicating if recording is allowed.
 * @param {function} options.parameters.updateClearedToRecord - Function to update the cleared to record status.
 * @param {function} options.parameters.updateRecordStarted - Function to update the record started status.
 * @param {function} options.parameters.updateRecordPaused - Function to update the record paused status.
 * @param {function} options.parameters.updateRecordResumed - Function to update the record resumed status.
 * @param {function} options.parameters.updateStartReport - Function to update the start report status.
 * @param {function} options.parameters.updateEndReport - Function to update the end report status.
 * @param {function} options.parameters.updateCanRecord - Function to update the can record status.
 * @param {boolean} options.parameters.whiteboardStarted - Flag indicating if the whiteboard has started.
 * @param {boolean} options.parameters.whiteboardEnded - Flag indicating if the whiteboard has ended.
 * @param {function} options.parameters.rePort - Function to report the recording status.
 * @param {function} options.parameters.captureCanvasStream - Function to capture the canvas stream.
 *
 * @returns {Promise<boolean | undefined>} - A promise that resolves to a boolean indicating if the recording attempt was successful, or undefined if not applicable.
 *
 * @example
 * ```typescript
 * startRecording({
 *   parameters: {
 *     roomName: "Room101",
 *     userRecordingParams: myUserRecordingParams,
 *     socket: mySocket,
 *     localSocket: myLocalSocket,
 *     updateIsRecordingModalVisible: setIsRecordingModalVisible,
 *     confirmedToRecord: true,
 *     showAlert: myShowAlert,
 *     recordingMediaOptions: "video",
 *     videoAlreadyOn: true,
 *     audioAlreadyOn: true,
 *     recordStarted: false,
 *     recordPaused: false,
 *     recordResumed: false,
 *     recordStopped: false,
 *     startReport: false,
 *     endReport: false,
 *     canRecord: true,
 *     updateClearedToRecord: setClearedToRecord,
 *     updateRecordStarted: setRecordStarted,
 *     updateRecordPaused: setRecordPaused,
 *     updateRecordResumed: setRecordResumed,
 *     updateStartReport: setStartReport,
 *     updateEndReport: setEndReport,
 *     updateCanRecord: setCanRecord,
 *     whiteboardStarted: true,
 *     whiteboardEnded: false,
 *     rePort: myRePort,
 *     captureCanvasStream: myCaptureCanvasStream,
 *   },
 * })
 * ```
 */
export const startRecording: StartRecordingType = async ({
  parameters,
}) => {
  parameters = parameters.getUpdatedAllParams()

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
    startReport,
    endReport,
    canRecord,
    updateClearedToRecord,
    updateRecordStarted,
    updateRecordPaused,
    updateRecordResumed,
    updateStartReport,
    updateEndReport,
    updateCanRecord,
    whiteboardStarted,
    whiteboardEnded,
    rePort,
    captureCanvasStream,
  } = parameters

  if (!confirmedToRecord) {
    showAlert?.({
      message: 'You must click confirm before you can start recording',
      type: 'danger',
    })
    return false
  }

  if (recordingMediaOptions === 'video' && !videoAlreadyOn) {
    showAlert?.({
      message: 'You must turn on your video before you can start recording',
      type: 'danger',
    })
    return false
  }

  if (recordingMediaOptions === 'audio' && !audioAlreadyOn) {
    showAlert?.({
      message: 'You must turn on your audio before you can start recording',
      type: 'danger',
    })
    return false
  }

  updateClearedToRecord(true)

  let action = 'startRecord'
  if (recordStarted && recordPaused && !recordResumed && !recordStopped) {
    action = 'resumeRecord'
  }

  let recAttempt = false
  const socketRef = localSocket && localSocket.connected ? localSocket : socket

  await new Promise<void>((resolve) => {
    socketRef.emit(
      action,
      { roomName, userRecordingParams },
      async ({ success, reason }: { success: boolean; reason: string }) => {
        if (success) {
          recordStarted = true
          startReport = true
          endReport = false
          recordPaused = false
          recAttempt = true

          updateRecordStarted(recordStarted)
          updateStartReport(startReport)
          updateEndReport(endReport)
          updateRecordPaused(recordPaused)

          if (action === 'startRecord') {
            await rePort({ parameters: parameters.getUpdatedAllParams() })
            await recordStartTimer({ parameters })
          } else {
            updateRecordResumed(true)
            await rePort({ restart: true, parameters: parameters.getUpdatedAllParams() })
            await recordResumeTimer({ parameters })
          }
        } else {
          showAlert?.({
            message: `Recording could not start - ${reason}`,
            type: 'danger',
          })
          canRecord = true
          startReport = false
          endReport = true
          recAttempt = false

          updateCanRecord(canRecord)
          updateStartReport(startReport)
          updateEndReport(endReport)
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
      await captureCanvasStream({ parameters: parameters.getUpdatedAllParams() })
    }
  } catch (error) {
    console.error('Error capturing canvas stream:', error)
  }

  updateIsRecordingModalVisible(false)

  return recAttempt
}
