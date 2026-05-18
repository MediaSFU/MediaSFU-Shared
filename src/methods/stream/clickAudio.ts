import { Socket } from 'socket.io-client';
import {
  CheckPermissionType,
  DisconnectSendTransportAudioParameters,
  DisconnectSendTransportAudioType,
  Participant,
  RequestPermissionAudioType,
  ResumeSendTransportAudioParameters,
  ResumeSendTransportAudioType,
  ShowAlert,
  StreamSuccessAudioParameters,
  StreamSuccessAudioType,
} from '../../types/types';
import type { PermissionConfig } from '../permissions/updatePermissionConfig';

export interface ClickAudioParameters
  extends DisconnectSendTransportAudioParameters,
    ResumeSendTransportAudioParameters,
    StreamSuccessAudioParameters {
  checkMediaPermission: boolean;
  hasAudioPermission: boolean;
  audioPaused: boolean;
  audioAlreadyOn: boolean;
  audioOnlyRoom: boolean;
  recordStarted: boolean;
  recordResumed: boolean;
  recordPaused: boolean;
  recordStopped: boolean;
  recordingMediaOptions: string;
  islevel: string;
  youAreCoHost: boolean;
  adminRestrictSetting: boolean;
  audioRequestState: string | null;
  audioRequestTime: number;
  member: string;
  socket: Socket;
  localSocket?: Socket;
  roomName: string;
  userDefaultAudioInputDevice: string;
  micAction: boolean;
  localStream: MediaStream | null;
  audioSetting: string;
  videoSetting: string;
  screenshareSetting: string;
  chatSetting: string;
  permissionConfig?: PermissionConfig | null;
  updateRequestIntervalSeconds: number;
  participants: Participant[];
  mediaDevices: MediaDevices;
  transportCreated: boolean;
  transportCreatedAudio: boolean;
  supportFlexRoom?: boolean;
  supportMaxRoom?: boolean;

  updateAudioAlreadyOn: (status: boolean) => void;
  updateAudioRequestState: (state: string | null) => void;
  updateAudioPaused: (status: boolean) => void;
  updateLocalStream: (stream: MediaStream | null) => void;
  updateParticipants: (participants: Participant[]) => void;
  updateTransportCreated: (status: boolean) => void;
  updateTransportCreatedAudio: (status: boolean) => void;
  updateMicAction: (action: boolean) => void;
  showAlert?: ShowAlert;

  checkPermission: CheckPermissionType;
  streamSuccessAudio: StreamSuccessAudioType;
  disconnectSendTransportAudio: DisconnectSendTransportAudioType;
  requestPermissionAudio: RequestPermissionAudioType;
  resumeSendTransportAudio: ResumeSendTransportAudioType;

  getUpdatedAllParams: () => ClickAudioParameters;
  [key: string]: any;
}

export interface ClickAudioOptions {
  parameters: ClickAudioParameters;
}

export type ClickAudioType = (options: ClickAudioOptions) => Promise<void>;

/**
 * Handles microphone toggle flow for a participant.
 *
 * This helper enforces host permission rules, request cooldowns, recording
 * constraints, and transport resume/disconnect behavior before updating the
 * caller's local media state.
 *
 * @param options Function options containing the full runtime parameter bag.
 * @returns A promise that resolves after the microphone action has been processed.
 */
export const clickAudio = async ({ parameters }: ClickAudioOptions): Promise<void> => {
  let {
    checkMediaPermission,
    hasAudioPermission,
    audioPaused,
    audioAlreadyOn,
    audioOnlyRoom,
    recordStarted,
    recordResumed,
    recordPaused,
    recordStopped,
    recordingMediaOptions,
    islevel,
    youAreCoHost,
    adminRestrictSetting,
    audioRequestState,
    audioRequestTime,
    member,
    socket,
    localSocket,
    roomName,
    userDefaultAudioInputDevice,
    micAction,
    localStream,
    audioSetting,
    videoSetting,
    screenshareSetting,
    chatSetting,
    updateRequestIntervalSeconds,
    participants,
    mediaDevices,
    showAlert,
    transportCreated,
    transportCreatedAudio,

    updateAudioAlreadyOn,
    updateAudioRequestState,
    updateAudioPaused,
    updateLocalStream,
    updateParticipants,
    updateTransportCreated,
    updateTransportCreatedAudio,
    updateMicAction,

    checkPermission,
    streamSuccessAudio,
    requestPermissionAudio,
    resumeSendTransportAudio,
    disconnectSendTransportAudio,
  } = parameters;

  if (audioOnlyRoom) {
    showAlert?.({
      message: 'You cannot turn on your camera in an audio-only event.',
      type: 'danger',
      duration: 3000,
    });
    return;
  }

  if (audioAlreadyOn) {
    if (islevel === '2' && (recordStarted || recordResumed)) {
      if (!(recordPaused || recordStopped)) {
        if (recordingMediaOptions === 'audio') {
          showAlert?.({
            message: 'You cannot turn off your audio while recording, please pause or stop recording first.',
            type: 'danger',
            duration: 3000,
          });
          return;
        }
      }
    }

    audioAlreadyOn = false;
    updateAudioAlreadyOn(audioAlreadyOn);
    if (localStream && localStream.getAudioTracks().length > 0) {
      localStream.getAudioTracks()[0].enabled = false;
      updateLocalStream(localStream);
    }
    await disconnectSendTransportAudio({ parameters });
    audioPaused = true;
    updateAudioPaused(audioPaused);
  } else {
    if (adminRestrictSetting) {
      showAlert?.({
        message: 'You cannot turn on your microphone. Access denied by host.',
        type: 'danger',
        duration: 3000,
      });
      return;
    }

    const supportMaxRoom = parameters.supportMaxRoom;
    const supportFlexRoom = parameters.supportFlexRoom;
    if ((supportMaxRoom || supportFlexRoom) && islevel !== '2') {
      try {
        const checkResult = await new Promise<{
          allowed: boolean;
          reason?: string;
          producingCount?: number;
          producerLimit?: number;
        }>((resolve) => {
          socket.emit(
            'checkProduce',
            { kind: 'audio' },
            (response: {
              allowed: boolean;
              reason?: string;
              producingCount?: number;
              producerLimit?: number;
            }) => {
              resolve(response || { allowed: false, reason: 'No response from server' });
            },
          );

          setTimeout(() => resolve({ allowed: true }), 5000);
        });

        if (!checkResult.allowed) {
          showAlert?.({
            message:
              checkResult.reason ||
              `Audio producer limit reached (${checkResult.producingCount}/${checkResult.producerLimit}).`,
            type: 'danger',
            duration: 3000,
          });
          return;
        }
      } catch (error) {
        console.warn('Failed to check producer limit:', error);
      }
    }

    const panelistsFocused = parameters.panelistsFocused;
    const muteOthersMic = parameters.muteOthersMic;
    const panelists = parameters.panelists;

    if (panelistsFocused && muteOthersMic && islevel !== '2') {
      const isPanelist =
        panelists?.some((panelist: { name: string }) => panelist.name === member) || false;

      if (!isPanelist) {
        showAlert?.({
          message:
            'You cannot turn on your microphone. Only panelists can unmute while focus mode is active.',
          type: 'danger',
          duration: 3000,
        });
        return;
      }
    }

    let response = 2;
    if (!micAction && islevel !== '2' && !youAreCoHost) {
      response = await checkPermission({
        permissionType: 'audioSetting',
        audioSetting,
        videoSetting,
        screenshareSetting,
        chatSetting,
        permissionConfig: parameters.permissionConfig,
        participantLevel: islevel,
      });
    } else {
      response = 0;
    }

    switch (response) {
      case 1: {
        if (audioRequestState === 'pending') {
          showAlert?.({
            message: 'A request is pending. Please wait for the host to respond.',
            type: 'danger',
            duration: 3000,
          });
          return;
        }

        if (
          audioRequestState === 'rejected' &&
          Date.now() - audioRequestTime < updateRequestIntervalSeconds * 1000
        ) {
          showAlert?.({
            message: `A request was rejected. Please wait for ${updateRequestIntervalSeconds} seconds before sending another request.`,
            type: 'danger',
            duration: 3000,
          });
          return;
        }

        showAlert?.({
          message: 'Request sent to host.',
          type: 'success',
          duration: 3000,
        });

        audioRequestState = 'pending';
        updateAudioRequestState(audioRequestState);

        const userRequest = {
          id: socket.id,
          name: member,
          icon: 'fa-microphone',
        };
        socket.emit('participantRequest', { userRequest, roomName });
        break;
      }

      case 2:
        showAlert?.({
          message: 'You cannot turn on your microphone. Access denied by host.',
          type: 'danger',
          duration: 3000,
        });
        break;

      case 0:
        if (audioPaused) {
          if (localStream && localStream.getAudioTracks().length > 0) {
            localStream.getAudioTracks()[0].enabled = true;
          }
          updateAudioAlreadyOn(true);
          await resumeSendTransportAudio({ parameters });
          socket.emit('resumeProducerAudio', { mediaTag: 'audio', roomName });

          try {
            if (localSocket && localSocket.id) {
              localSocket.emit('resumeProducerAudio', { mediaTag: 'audio', roomName });
            }
          } catch (error) {
            console.log('Error in resumeProducerAudio', error);
          }

          updateLocalStream(localStream);

          if (micAction === true) {
            micAction = false;
            updateMicAction(micAction);
          }

          participants.forEach((participant) => {
            if (participant.socketId === socket.id && participant.name === member) {
              participant.muted = false;
            }
          });
          updateParticipants(participants);

          transportCreated = true;
          updateTransportCreated(transportCreated);

          transportCreatedAudio = true;
          updateTransportCreatedAudio(transportCreatedAudio);
        } else {
          if (!hasAudioPermission && checkMediaPermission) {
            const statusMic = await requestPermissionAudio();
            if (statusMic !== 'granted') {
              showAlert?.({
                message:
                  'Allow access to your microphone or check if your microphone is not being used by another application.',
                type: 'danger',
                duration: 3000,
              });
              return;
            }
          }

          const mediaConstraints = userDefaultAudioInputDevice
            ? { audio: { deviceId: userDefaultAudioInputDevice }, video: false }
            : { audio: true, video: false };

          try {
            const stream = await mediaDevices.getUserMedia(mediaConstraints);
            await streamSuccessAudio({ stream, parameters });
          } catch (error) {
            console.error(error);
            showAlert?.({
              message:
                'Allow access to your microphone or check if your microphone is not being used by another application.',
              type: 'danger',
              duration: 3000,
            });
          }
        }
        break;

      default:
    }
  }
};