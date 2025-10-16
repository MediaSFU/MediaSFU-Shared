import type {
  ShowAlert,
  MainSpecs,
  DispSpecs,
  TextSpecs,
  EventType,
  UserRecordingParams,
} from '../../types/types'

export interface ConfirmRecordingParameters {
  showAlert?: ShowAlert
  recordingMediaOptions: string
  recordingAudioOptions: string
  recordingVideoOptions: string
  recordingVideoType: string
  recordingDisplayType: 'video' | 'media' | 'all'
  recordingNameTags: boolean
  recordingBackgroundColor: string
  recordingNameTagsColor: string
  recordingOrientationVideo: string
  recordingAddHLS: boolean
  recordingAddText: boolean
  recordingCustomText: string
  recordingCustomTextPosition: string
  recordingCustomTextColor: string
  meetingDisplayType: string
  recordingVideoParticipantsFullRoomSupport: boolean
  recordingAllParticipantsSupport: boolean
  recordingVideoParticipantsSupport: boolean
  recordingSupportForOtherOrientation: boolean
  recordingPreferredOrientation: string
  recordingMultiFormatsSupport: boolean
  recordingVideoOptimized: boolean
  recordingAllParticipantsFullRoomSupport: boolean
  meetingVideoOptimized: boolean
  eventType: EventType
  breakOutRoomStarted: boolean
  breakOutRoomEnded: boolean
  updateRecordingDisplayType: (value: 'video' | 'media' | 'all') => void
  updateRecordingVideoOptimized: (value: boolean) => void
  updateUserRecordingParams: (params: UserRecordingParams) => void
  updateConfirmedToRecord: (value: boolean) => void
  getUpdatedAllParams: () => ConfirmRecordingParameters
  [key: string]: any
}

export interface ConfirmRecordingOptions {
  parameters: ConfirmRecordingParameters
}

export type ConfirmRecordingType = (options: ConfirmRecordingOptions) => Promise<void>

/**
 * Confirms the recording settings based on the provided parameters and updates the recording state.
 */
export const confirmRecording: ConfirmRecordingType = async ({
  parameters,
}) => {
  parameters = parameters.getUpdatedAllParams()

  let {
    showAlert,
    recordingMediaOptions,
    recordingAudioOptions,
    recordingVideoOptions,
    recordingVideoType,
    recordingDisplayType,
    recordingNameTags,
    recordingBackgroundColor,
    recordingNameTagsColor,
    recordingOrientationVideo,
    recordingAddHLS,
    recordingAddText,
    recordingCustomText,
    recordingCustomTextPosition,
    recordingCustomTextColor,
    meetingDisplayType,
    recordingVideoParticipantsFullRoomSupport,
    recordingAllParticipantsSupport,
    recordingVideoParticipantsSupport,
    recordingSupportForOtherOrientation,
    recordingPreferredOrientation,
    recordingMultiFormatsSupport,
    recordingVideoOptimized,
    recordingAllParticipantsFullRoomSupport,
    meetingVideoOptimized,
    eventType,
    breakOutRoomStarted,
    breakOutRoomEnded,
    updateRecordingDisplayType,
    updateRecordingVideoOptimized,
    updateUserRecordingParams,
    updateConfirmedToRecord,
  } = parameters

  if (
    !recordingVideoParticipantsFullRoomSupport &&
    recordingVideoOptions === 'all' &&
    recordingMediaOptions === 'video'
  ) {
    if (meetingDisplayType === 'all' && !(breakOutRoomStarted && !breakOutRoomEnded)) {
      showAlert?.({
        message:
          'You are not allowed to record videos of all participants; change the meeting display type to video or video optimized.',
        type: 'danger',
        duration: 3000,
      })
      return
    }
  }

  if (!recordingAllParticipantsSupport && recordingVideoOptions === 'all') {
    showAlert?.({
      message: 'You are only allowed to record yourself.',
      type: 'danger',
      duration: 3000,
    })
    return
  }

  if (!recordingVideoParticipantsSupport && recordingDisplayType === 'video') {
    showAlert?.({
      message: 'You are not allowed to record other video participants.',
      type: 'danger',
      duration: 3000,
    })
    return
  }

  if (!recordingSupportForOtherOrientation && recordingOrientationVideo === 'all') {
    showAlert?.({
      message: 'You are not allowed to record all orientations.',
      type: 'danger',
      duration: 3000,
    })
    return
  }

  if (
    (recordingPreferredOrientation === 'landscape' && recordingOrientationVideo === 'portrait') ||
    (recordingPreferredOrientation === 'portrait' && recordingOrientationVideo === 'landscape')
  ) {
    if (!recordingSupportForOtherOrientation) {
      showAlert?.({
        message: 'You are not allowed to record this orientation.',
        type: 'danger',
        duration: 3000,
      })
      return
    }
  }

  if (!recordingMultiFormatsSupport && recordingVideoType === 'all') {
    showAlert?.({
      message: 'You are not allowed to record all formats.',
      type: 'danger',
      duration: 3000,
    })
    return
  }

  if (eventType !== 'broadcast') {
    if (recordingMediaOptions === 'video') {
      if (meetingDisplayType === 'media' && recordingDisplayType === 'all') {
        showAlert?.({
          message:
            'Recording display type can be either video, video optimized, or media when meeting display type is media.',
          type: 'danger',
          duration: 3000,
        })
        updateRecordingDisplayType(meetingDisplayType as 'video' | 'media' | 'all')
        return
      }

      if (meetingDisplayType === 'video') {
        if (recordingDisplayType === 'all' || recordingDisplayType === 'media') {
          showAlert?.({
            message:
              'Recording display type can be either video or video optimized when meeting display type is video.',
            type: 'danger',
            duration: 3000,
          })
          updateRecordingDisplayType(meetingDisplayType as 'video' | 'media' | 'all')
          return
        }

        if (meetingVideoOptimized && !recordingVideoOptimized) {
          showAlert?.({
            message:
              'Recording display type can only be video optimized when meeting display type is video optimized.',
            type: 'danger',
            duration: 3000,
          })
          updateRecordingVideoOptimized(meetingVideoOptimized)
          return
        }
      }
    } else {
      updateRecordingDisplayType('media')
      updateRecordingVideoOptimized(false)
    }
  }

  if (recordingDisplayType === 'all' && !recordingAllParticipantsFullRoomSupport) {
    showAlert?.({
      message: 'You can only record all participants with media.',
      type: 'danger',
      duration: 3000,
    })
    return
  }

  const mainSpecs: MainSpecs = {
    mediaOptions: recordingMediaOptions,
    audioOptions: recordingAudioOptions,
    videoOptions: recordingVideoOptions,
    videoType: recordingVideoType,
    videoOptimized: recordingVideoOptimized,
    recordingDisplayType,
    addHLS: recordingAddHLS,
  }

  const dispSpecs: DispSpecs = {
    nameTags: recordingNameTags,
    backgroundColor: recordingBackgroundColor,
    nameTagsColor: recordingNameTagsColor,
    orientationVideo: recordingOrientationVideo,
  }

  const textSpecs: TextSpecs = {
    addText: recordingAddText,
    customText: recordingCustomText,
    customTextPosition: recordingCustomTextPosition,
    customTextColor: recordingCustomTextColor,
  }

  const userRecordingParams = { mainSpecs, dispSpecs, textSpecs }

  updateUserRecordingParams(userRecordingParams)
  updateConfirmedToRecord(true)
}
