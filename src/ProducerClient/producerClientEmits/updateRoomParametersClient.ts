/* eslint-disable eqeqeq */
import { RtpCapabilities } from 'mediasoup-client/lib/types';
import {
  QnHDCons,
  sdCons,
  hdCons,
  fhdCons,
  qhdCons,
  QnHDConsPort,
  sdConsPort,
  hdConsPort,
  fhdConsPort,
  qhdConsPort,
  QnHDConsNeu,
  sdConsNeu,
  hdConsNeu,
  fhdConsNeu,
  qhdConsNeu,
  QnHDFrameRate,
  hdFrameRate,
  fhdFrameRate,
  qhdFrameRate,
} from '../../methods/utils/producer/videoCaptureConstraints';
import { hParams as host_Params } from '../../methods/utils/producer/hParams';
import { vParams as video_Params } from '../../methods/utils/producer/vParams';
import { screenParams as screen_Params } from '../../methods/utils/producer/screenParams';
import { aParams as audio_Params } from '../../methods/utils/producer/aParams';
import {
  HParamsType,
  VParamsType,
  ScreenParamsType,
  AParamsType,
  MeetingRoomParams,
  VidCons,
  ShowAlert,
  ResponseJoinRoom,
  EventType,
} from '../../types/shared-base-types';

export interface UpdateRoomParametersClientParameters {
  rtpCapabilities: RtpCapabilities | null;
  roomRecvIPs: string[];
  meetingRoomParams: MeetingRoomParams | null;
  itemPageLimit: number;
  audioOnlyRoom: boolean;
  addForBasic: boolean;
  screenPageLimit: number;
  shareScreenStarted: boolean;
  shared: boolean;
  targetOrientation: string;
  vidCons: VidCons;
  recordingVideoSupport: boolean;
  frameRate: number;
  adminPasscode: string;
  eventType: EventType;
  youAreCoHost: boolean;
  autoWave: boolean;
  forceFullDisplay: boolean;
  chatSetting: string;
  meetingDisplayType: string;
  audioSetting: string;
  videoSetting: string;
  screenshareSetting: string;
  hParams: HParamsType;
  vParams: VParamsType;
  screenParams: ScreenParamsType;
  aParams: AParamsType;
  islevel: string;
  showAlert?: ShowAlert;
  data: ResponseJoinRoom;
  updateRtpCapabilities: (rtpCapabilities: RtpCapabilities | null) => void;
  updateRoomRecvIPs: (roomRecvIPs: string[]) => void;
  updateMeetingRoomParams: (meetingRoomParams: MeetingRoomParams | null) => void;
  updateItemPageLimit: (limit: number) => void;
  updateAudioOnlyRoom: (isAudioOnly: boolean) => void;
  updateAddForBasic: (addForBasic: boolean) => void;
  updateScreenPageLimit: (limit: number) => void;
  updateVidCons: (cons: VidCons) => void;
  updateFrameRate: (frameRate: number) => void;
  updateAdminPasscode: (passcode: string) => void;
  updateEventType: (eventType: EventType) => void;
  updateYouAreCoHost: (coHost: boolean) => void;
  updateAutoWave: (autoWave: boolean) => void;
  updateForceFullDisplay: (forceFull: boolean) => void;
  updateChatSetting: (setting: string) => void;
  updateMeetingDisplayType: (type: string) => void;
  updateAudioSetting: (setting: string) => void;
  updateVideoSetting: (setting: string) => void;
  updateScreenshareSetting: (setting: string) => void;
  updateHParams: (params: HParamsType) => void;
  updateVParams: (params: VParamsType) => void;
  updateScreenParams: (params: ScreenParamsType) => void;
  updateAParams: (params: AParamsType) => void;
  updateMainHeightWidth: (heightWidth: number) => void;
  updateTargetResolution: (resolution: string) => void;
  updateTargetResolutionHost: (resolution: string) => void;
  updateRecordingAudioPausesLimit: (limit: number) => void;
  updateRecordingAudioPausesCount: (count: number) => void;
  updateRecordingAudioSupport: (support: boolean) => void;
  updateRecordingAudioPeopleLimit: (limit: number) => void;
  updateRecordingAudioParticipantsTimeLimit: (limit: number) => void;
  updateRecordingVideoPausesCount: (count: number) => void;
  updateRecordingVideoPausesLimit: (limit: number) => void;
  updateRecordingVideoSupport: (support: boolean) => void;
  updateRecordingVideoPeopleLimit: (limit: number) => void;
  updateRecordingVideoParticipantsTimeLimit: (limit: number) => void;
  updateRecordingAllParticipantsSupport: (support: boolean) => void;
  updateRecordingVideoParticipantsSupport: (support: boolean) => void;
  updateRecordingAllParticipantsFullRoomSupport: (support: boolean) => void;
  updateRecordingVideoParticipantsFullRoomSupport: (support: boolean) => void;
  updateRecordingPreferredOrientation: (orientation: string) => void;
  updateRecordingSupportForOtherOrientation: (support: boolean) => void;
  updateRecordingMultiFormatsSupport: (support: boolean) => void;
  updateRecordingVideoOptions: (options: string) => void;
  updateRecordingAudioOptions: (options: string) => void;
}

export type UpdateRoomParametersClientOptions = {
  parameters: UpdateRoomParametersClientParameters;
};

export type UpdateRoomParametersClientType = (options: UpdateRoomParametersClientOptions) => void;

export const updateRoomParametersClient = ({ parameters }: UpdateRoomParametersClientOptions): void => {
  try {
    const {
      screenPageLimit,
      shareScreenStarted,
      shared,
      hParams = host_Params,
      vParams = video_Params,
      frameRate,
      islevel,
      showAlert,
      data,
      updateRtpCapabilities,
      updateRoomRecvIPs,
      updateMeetingRoomParams,
      updateItemPageLimit,
      updateAudioOnlyRoom,
      updateScreenPageLimit,
      updateVidCons,
      updateFrameRate,
      updateAdminPasscode,
      updateEventType,
      updateYouAreCoHost,
      updateAutoWave,
      updateForceFullDisplay,
      updateChatSetting,
      updateMeetingDisplayType,
      updateAudioSetting,
      updateVideoSetting,
      updateScreenshareSetting,
      updateHParams,
      updateVParams,
      updateScreenParams,
      updateAParams,
      updateTargetResolution,
      updateTargetResolutionHost,
      updateRecordingAudioPausesLimit,
      updateRecordingAudioPausesCount,
      updateRecordingAudioSupport,
      updateRecordingAudioPeopleLimit,
      updateRecordingAudioParticipantsTimeLimit,
      updateRecordingVideoPausesCount,
      updateRecordingVideoPausesLimit,
      updateRecordingVideoSupport,
      updateRecordingVideoPeopleLimit,
      updateRecordingVideoParticipantsTimeLimit,
      updateRecordingAllParticipantsSupport,
      updateRecordingVideoParticipantsSupport,
      updateRecordingAllParticipantsFullRoomSupport,
      updateRecordingVideoParticipantsFullRoomSupport,
      updateRecordingPreferredOrientation,
      updateRecordingSupportForOtherOrientation,
      updateRecordingMultiFormatsSupport,
      updateRecordingVideoOptions,
      updateRecordingAudioOptions,
      updateMainHeightWidth,
    } = parameters;

    if (data.rtpCapabilities == null) {
      const reason = data.reason || '';
      showAlert?.({
        message: `Sorry, you are not allowed to join this room. ${reason}`,
        type: 'danger',
        duration: 3000,
      });
      return;
    }

    updateRtpCapabilities(data.rtpCapabilities);
    updateAdminPasscode(data.secureCode);
    updateRoomRecvIPs(data.roomRecvIPs);
    updateMeetingRoomParams(data.meetingRoomParams);

    updateRecordingAudioPausesLimit(data.recordingParams.recordingAudioPausesLimit);
    updateRecordingAudioPausesCount(data.recordingParams.recordingAudioPausesCount!);
    updateRecordingAudioSupport(data.recordingParams.recordingAudioSupport);
    updateRecordingAudioPeopleLimit(data.recordingParams.recordingAudioPeopleLimit);
    updateRecordingAudioParticipantsTimeLimit(data.recordingParams.recordingAudioParticipantsTimeLimit);
    updateRecordingVideoPausesCount(data.recordingParams.recordingVideoPausesCount!);
    updateRecordingVideoPausesLimit(data.recordingParams.recordingVideoPausesLimit);
    updateRecordingVideoSupport(data.recordingParams.recordingVideoSupport);
    updateRecordingVideoPeopleLimit(data.recordingParams.recordingVideoPeopleLimit);
    updateRecordingVideoParticipantsTimeLimit(data.recordingParams.recordingVideoParticipantsTimeLimit);
    updateRecordingAllParticipantsSupport(data.recordingParams.recordingAllParticipantsSupport);
    updateRecordingVideoParticipantsSupport(data.recordingParams.recordingVideoParticipantsSupport);
    updateRecordingAllParticipantsFullRoomSupport(data.recordingParams.recordingAllParticipantsFullRoomSupport);
    updateRecordingVideoParticipantsFullRoomSupport(data.recordingParams.recordingVideoParticipantsFullRoomSupport);
    updateRecordingPreferredOrientation(data.recordingParams.recordingPreferredOrientation);
    updateRecordingSupportForOtherOrientation(data.recordingParams.recordingSupportForOtherOrientation);
    updateRecordingMultiFormatsSupport(data.recordingParams.recordingMultiFormatsSupport);

    updateItemPageLimit(data.meetingRoomParams.itemPageLimit);
    updateEventType(data.meetingRoomParams.type);

    if (data.meetingRoomParams.type == 'chat' && islevel != '2') {
      updateYouAreCoHost(true);
    }

    if (['chat', 'broadcast'].includes(data.meetingRoomParams.type)) {
      updateAutoWave(false);
      updateMeetingDisplayType('all');
      updateForceFullDisplay(true);
      updateChatSetting('allow');
      updateItemPageLimit(2);

      if (['broadcast'].includes(data.meetingRoomParams.type)) {
        updateRecordingVideoOptions('mainScreen');
        updateRecordingAudioOptions('host');
        updateItemPageLimit(1);
      }
    }

    updateAudioSetting(data.meetingRoomParams.audioSetting);
    updateVideoSetting(data.meetingRoomParams.videoSetting);
    updateScreenshareSetting(data.meetingRoomParams.screenshareSetting);
    updateChatSetting(data.meetingRoomParams.chatSetting);

    updateAudioOnlyRoom(data.meetingRoomParams.mediaType != 'video');

    if (data.meetingRoomParams.type == 'conference' && (shared || shareScreenStarted)) {
      updateMainHeightWidth(100);
    } else {
      updateMainHeightWidth(0);
    }

    updateScreenPageLimit(Math.min(data.meetingRoomParams.itemPageLimit, screenPageLimit));

    const targetOrientation = islevel == '2'
      ? data.meetingRoomParams.targetOrientationHost
      : data.meetingRoomParams.targetOrientation;
    const targetResolution = islevel == '2'
      ? data.meetingRoomParams.targetResolutionHost
      : data.meetingRoomParams.targetResolution;

    let vidCons: VidCons;
    if (targetOrientation == 'landscape') {
      vidCons = targetResolution == 'hd'
        ? hdCons
        : targetResolution == 'fhd'
          ? fhdCons
          : targetResolution == 'qhd'
            ? qhdCons
            : targetResolution == 'sd'
              ? sdCons
              : QnHDCons;
    } else if (targetOrientation == 'neutral') {
      vidCons = targetResolution == 'hd'
        ? hdConsNeu
        : targetResolution == 'fhd'
          ? fhdConsNeu
          : targetResolution == 'qhd'
            ? qhdConsNeu
            : targetResolution == 'sd'
              ? sdConsNeu
              : QnHDConsNeu;
    } else {
      vidCons = targetResolution == 'hd'
        ? hdConsPort
        : targetResolution == 'fhd'
          ? fhdConsPort
          : targetResolution == 'qhd'
            ? qhdConsPort
            : targetResolution == 'sd'
              ? sdConsPort
              : QnHDConsPort;
    }

    let frameRateValue = frameRate || 10;
    let vParamsValue = { ...vParams };
    let hParamsValue = { ...hParams };

    if (Object.keys(vParamsValue).length == 0) {
      vParamsValue = { ...video_Params };
    }

    if (Object.keys(hParamsValue).length == 0) {
      hParamsValue = { ...host_Params };
    }

    if (targetResolution == 'hd') {
      frameRateValue = hdFrameRate;
      vParamsValue.encodings.forEach((encoding: Partial<VParamsType['encodings'][0]>) => {
        if (encoding.maxBitrate) {
          encoding.maxBitrate = Math.floor(encoding.maxBitrate * 4);
        }
      });

      hParamsValue.encodings.forEach((encoding: Partial<HParamsType['encodings'][0]>) => {
        if (encoding.maxBitrate) {
          encoding.maxBitrate = Math.floor(encoding.maxBitrate * 4);
        }
      });
    } else if (targetResolution == 'QnHD') {
      frameRateValue = QnHDFrameRate;
      vParamsValue.encodings.forEach((encoding: Partial<VParamsType['encodings'][0]>) => {
        if (encoding.maxBitrate) {
          encoding.maxBitrate = Math.floor(encoding.maxBitrate * 0.25);
        }
      });

      hParamsValue.encodings.forEach((encoding: Partial<HParamsType['encodings'][0]>) => {
        if (encoding.maxBitrate) {
          encoding.maxBitrate = Math.floor(encoding.maxBitrate * 0.25);
        }
      });

      if (hParamsValue.codecOptions && hParamsValue.codecOptions.videoGoogleStartBitrate) {
        hParamsValue.codecOptions.videoGoogleStartBitrate = Math.floor(hParamsValue.codecOptions.videoGoogleStartBitrate * 0.25);
      }
      if (vParamsValue.codecOptions && vParamsValue.codecOptions.videoGoogleStartBitrate) {
        vParamsValue.codecOptions.videoGoogleStartBitrate = Math.floor(vParamsValue.codecOptions.videoGoogleStartBitrate * 0.25);
      }
    } else if (targetResolution == 'fhd') {
      frameRateValue = fhdFrameRate;
      vParamsValue.encodings.forEach((encoding: Partial<VParamsType['encodings'][0]>) => {
        if (encoding.maxBitrate) {
          encoding.maxBitrate = Math.floor(encoding.maxBitrate * 8);
        }
      });

      hParamsValue.encodings.forEach((encoding: Partial<HParamsType['encodings'][0]>) => {
        if (encoding.maxBitrate) {
          encoding.maxBitrate = Math.floor(encoding.maxBitrate * 8);
        }
      });
    } else if (targetResolution == 'qhd') {
      frameRateValue = qhdFrameRate;
      vParamsValue.encodings.forEach((encoding: Partial<VParamsType['encodings'][0]>) => {
        if (encoding.maxBitrate) {
          encoding.maxBitrate = Math.floor(encoding.maxBitrate * 16);
        }
      });

      hParamsValue.encodings.forEach((encoding: Partial<HParamsType['encodings'][0]>) => {
        if (encoding.maxBitrate) {
          encoding.maxBitrate = Math.floor(encoding.maxBitrate * 16);
        }
      });
    }

    if (data.recordingParams.recordingVideoSupport) {
      vParamsValue.encodings.forEach((encoding: Partial<VParamsType['encodings'][0]>) => {
        if (encoding.maxBitrate) {
          encoding.maxBitrate = Math.floor(encoding.maxBitrate * 1.2);
        }
      });

      hParamsValue.encodings.forEach((encoding: Partial<HParamsType['encodings'][0]>) => {
        if (encoding.maxBitrate) {
          encoding.maxBitrate = Math.floor(encoding.maxBitrate * 1.2);
        }
      });

      if (hParamsValue.codecOptions && hParamsValue.codecOptions.videoGoogleStartBitrate) {
        hParamsValue.codecOptions.videoGoogleStartBitrate = Math.floor(hParamsValue.codecOptions.videoGoogleStartBitrate * 1.2);
      }
      if (vParamsValue.codecOptions && vParamsValue.codecOptions.videoGoogleStartBitrate) {
        vParamsValue.codecOptions.videoGoogleStartBitrate = Math.floor(vParamsValue.codecOptions.videoGoogleStartBitrate * 1.2);
      }
    }

    updateVidCons(vidCons);
    updateFrameRate(frameRateValue);
    updateHParams(hParamsValue);
    updateVParams(vParamsValue);
    updateScreenParams(screen_Params);
    updateAParams(audio_Params);
    updateTargetResolution(data.meetingRoomParams.targetResolution);
    updateTargetResolutionHost(data.meetingRoomParams.targetResolutionHost);
  } catch (error) {
    console.log('updateRoomParametersClient error', error);
    parameters.showAlert?.({
      message: (error as Error).message,
      type: 'danger',
      duration: 3000,
    });
  }
};
