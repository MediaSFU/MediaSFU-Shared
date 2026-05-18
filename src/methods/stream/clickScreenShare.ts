import { Socket } from 'socket.io-client';
import type {
  CheckPermissionType,
  CheckScreenShareParameters,
  CheckScreenShareType,
  ShowAlert,
  StopShareScreenParameters,
  StopShareScreenType,
} from '../../types/types';
import type { PermissionConfig } from '../permissions/updatePermissionConfig';

export interface ClickScreenShareParameters
  extends CheckScreenShareParameters,
    StopShareScreenParameters {
  showAlert?: ShowAlert;
  roomName: string;
  member: string;
  socket: Socket;
  islevel: string;
  youAreCoHost: boolean;
  adminRestrictSetting: boolean;
  audioSetting: string;
  videoSetting: string;
  screenshareSetting: string;
  chatSetting: string;
  permissionConfig?: PermissionConfig | null;
  screenAction: boolean;
  screenAlreadyOn: boolean;
  screenRequestState: string | null;
  screenRequestTime: number;
  audioOnlyRoom: boolean;
  updateRequestIntervalSeconds: number;
  updateScreenRequestState: (state: string | null) => void;
  updateScreenAlreadyOn: (status: boolean) => void;

  checkPermission: CheckPermissionType;
  checkScreenShare: CheckScreenShareType;
  stopShareScreen: StopShareScreenType;

  getUpdatedAllParams: () => ClickScreenShareParameters;
  [key: string]: any;
}

export interface ClickScreenShareOptions {
  parameters: ClickScreenShareParameters;
}

export type ClickScreenShareType = (options: ClickScreenShareOptions) => Promise<void>;

/**
 * Handles screen-share toggle flow for a participant.
 *
 * This helper checks room restrictions, host permission policies, request
 * cooldowns, and then delegates to the supplied start/stop share helpers.
 *
 * @param options Function options containing the full runtime parameter bag.
 * @returns A promise that resolves after the screen-share action has been processed.
 */
export const clickScreenShare = async ({ parameters }: ClickScreenShareOptions): Promise<void> => {
  let {
    showAlert,
    roomName,
    member,
    socket,
    islevel,
    youAreCoHost,
    adminRestrictSetting,
    audioSetting,
    videoSetting,
    screenshareSetting,
    chatSetting,
    screenAction,
    screenAlreadyOn,
    screenRequestState,
    screenRequestTime,
    audioOnlyRoom,
    updateRequestIntervalSeconds,
    updateScreenRequestState,
    updateScreenAlreadyOn,
    checkPermission,
    checkScreenShare,
    stopShareScreen,
  } = parameters;

  if (audioOnlyRoom) {
    showAlert?.({
      message: 'You cannot turn on your camera in an audio-only event.',
      type: 'danger',
      duration: 3000,
    });
    return;
  }

  if (screenAlreadyOn) {
    screenAlreadyOn = false;
    updateScreenAlreadyOn(screenAlreadyOn);
    await stopShareScreen({ parameters });
  } else {
    if (adminRestrictSetting) {
      showAlert?.({
        message: 'You cannot start screen share. Access denied by host.',
        type: 'danger',
        duration: 3000,
      });
      return;
    }

    let response = 2;
    if (!screenAction && islevel !== '2' && !youAreCoHost) {
      response = await checkPermission({
        permissionType: 'screenshareSetting',
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
      case 0:
        checkScreenShare({ parameters });
        break;
      case 1: {
        if (screenRequestState === 'pending') {
          showAlert?.({
            message: 'A request is already pending. Please wait for the host to respond.',
            type: 'danger',
            duration: 3000,
          });
          return;
        }

        if (
          screenRequestState === 'rejected' &&
          Date.now() - screenRequestTime < updateRequestIntervalSeconds
        ) {
          showAlert?.({
            message: 'You cannot send another request at this time.',
            type: 'danger',
            duration: 3000,
          });
          return;
        }

        showAlert?.({
          message: 'Your request has been sent to the host.',
          type: 'success',
          duration: 3000,
        });

        screenRequestState = 'pending';
        updateScreenRequestState(screenRequestState);

        const userRequest = { id: socket.id, name: member, icon: 'fa-desktop' };
        socket.emit('participantRequest', { userRequest, roomName });
        break;
      }
      case 2:
        showAlert?.({
          message: 'You are not allowed to start screen share.',
          type: 'danger',
          duration: 3000,
        });
        break;
      default:
        break;
    }
  }
};