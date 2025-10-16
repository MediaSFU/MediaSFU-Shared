import { Socket } from 'socket.io-client';
import type {
  JoinMediaSFURoomOptions,
  JoinRoomOnMediaSFUType,
  PreJoinPageParameters,
} from '../../types/types';
import { checkLimitsAndMakeRequest } from '../utils/checkLimitsAndMakeRequest';
import type { CreateJoinLocalRoomResponse } from './handleCreateRoom';

/**
 * Parameters for joining a local event room
 */
export interface JoinLocalEventRoomParameters {
  eventID: string;
  userName: string;
  secureCode?: string;
  videoPreference?: string | null;
  audioPreference?: string | null;
  audioOutputPreference?: string | null;
}

/**
 * Options for joining a local event room
 */
export interface JoinLocalEventRoomOptions {
  joinData: JoinLocalEventRoomParameters;
  link?: string;
}

/**
 * Options for handleJoinRoom function
 */
export interface HandleJoinRoomOptions {
  payload: JoinMediaSFURoomOptions;
  localLink?: string;
  apiUserName: string;
  apiKey: string;
  parameters: PreJoinPageParameters;
  initSocket?: Socket;
  localData?: any;
  joinMediaSFURoom: JoinRoomOnMediaSFUType;
}

/**
 * Handles joining an existing room on MediaSFU or local server
 * 
 * @param {HandleJoinRoomOptions} options - Configuration for joining a room
 * @returns {Promise<void>}
 * 
 * @example
 * ```typescript
 * await handleJoinRoom({
 *   payload: {
 *     action: 'join',
 *     meetingID: 'room123',
 *     userName: 'John Doe',
 *   },
 *   apiUserName: 'user123',
 *   apiKey: 'key123',
 *   parameters,
 *   joinMediaSFURoom,
 * });
 * ```
 */
export async function handleJoinRoom({
  payload,
  localLink = '',
  apiUserName,
  apiKey,
  parameters,
  initSocket,
  localData,
  joinMediaSFURoom,
}: HandleJoinRoomOptions): Promise<void> {
  const {
    updateIsLoadingModalVisible,
    updateSocket,
    updateApiUserName,
    updateApiToken,
    updateLink,
    updateRoomName,
    updateMember,
    updateValidated,
    showAlert,
  } = parameters;

  /**
   * Joins a local room by emitting to the socket
   */
  const joinLocalRoom = async ({ joinData, link = localLink }: JoinLocalEventRoomOptions) => {
    initSocket?.emit('joinEventRoom', joinData, (response: CreateJoinLocalRoomResponse) => {
      if (response.success) {
        updateSocket(initSocket!);
        updateApiUserName(localData?.apiUserName || '');
        updateApiToken(response.secret);
        updateLink(link);
        updateRoomName(joinData.eventID);
        updateMember(joinData.userName);
        updateIsLoadingModalVisible(false);
        updateValidated(true);
      } else {
        updateIsLoadingModalVisible(false);
        showAlert?.({
          message: `Unable to join room. ${response.reason}`,
          type: 'danger',
          duration: 3000,
        });
      }
    });
  };

  if (localLink.length > 0 && !localLink.includes('mediasfu.com')) {
    const joinData: JoinLocalEventRoomParameters = {
      eventID: payload.meetingID,
      userName: payload.userName,
      secureCode: '',
      videoPreference: null,
      audioPreference: null,
      audioOutputPreference: null,
    };

    await joinLocalRoom({ joinData: joinData });
    return;
  }

  updateIsLoadingModalVisible(true);

  const response = await joinMediaSFURoom({
    payload,
    apiUserName: apiUserName,
    apiKey: apiKey,
    localLink: localLink,
  });

  if (response.success && response.data && 'roomName' in response.data) {
    await checkLimitsAndMakeRequest({
      apiUserName: response.data.roomName,
      apiToken: response.data.secret,
      link: response.data.link,
      userName: payload.userName,
      parameters: parameters,
    });
  } else {
    updateIsLoadingModalVisible(false);
    showAlert?.({
      message: `Unable to join room. ${
        response.data ? ('error' in response.data ? response.data.error : '') : ''
      }`,
      type: 'danger',
      duration: 3000,
    });
  }
}
