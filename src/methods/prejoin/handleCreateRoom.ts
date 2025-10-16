import { Socket } from 'socket.io-client';
import type {
  CreateMediaSFURoomOptions,
  CreateRoomOnMediaSFUType,
  RecordingParams,
  MeetingRoomParams,
  ResponseLocalConnectionData,
  PreJoinPageParameters,
} from '../../types/types';
import { checkLimitsAndMakeRequest } from '../utils/checkLimitsAndMakeRequest';

/**
 * Parameters for creating a local room
 */
export interface CreateLocalRoomParameters {
  eventID: string;
  duration: number;
  capacity: number;
  userName: string;
  scheduledDate: Date;
  secureCode: string;
  waitRoom?: boolean;
  recordingParams?: RecordingParams;
  eventRoomParams?: MeetingRoomParams;
  videoPreference?: string | null;
  audioPreference?: string | null;
  audioOutputPreference?: string | null;
  mediasfuURL?: string;
}

/**
 * Options for creating a local room
 */
export interface CreateLocalRoomOptions {
  createData: CreateLocalRoomParameters;
  link?: string;
}

/**
 * Response from creating/joining a local room
 */
export interface CreateJoinLocalRoomResponse {
  success: boolean;
  secret: string;
  reason?: string;
  url?: string;
}

/**
 * Options for handleCreateRoom function
 */
export interface HandleCreateRoomOptions {
  payload: CreateMediaSFURoomOptions;
  localLink?: string;
  connectMediaSFU?: boolean;
  apiUserName: string;
  apiKey: string;
  validate?: boolean;
  parameters: PreJoinPageParameters;
  initSocket?: Socket;
  localData?: ResponseLocalConnectionData;
  createMediaSFURoom: CreateRoomOnMediaSFUType;
}

/**
 * Handles room creation with MediaSFU and/or local server
 * 
 * @param {HandleCreateRoomOptions} options - Configuration for creating a room
 * @returns {Promise<void>}
 * 
 * @example
 * ```typescript
 * await handleCreateRoom({
 *   payload: {
 *     action: 'create',
 *     duration: 30,
 *     capacity: 10,
 *     eventType: 'conference',
 *     userName: 'John Doe',
 *     recordOnly: false,
 *   },
 *   apiUserName: 'user123',
 *   apiKey: 'key123',
 *   parameters,
 *   createMediaSFURoom,
 * });
 * ```
 */
export async function handleCreateRoom({
  payload,
  localLink = '',
  connectMediaSFU = true,
  apiUserName,
  apiKey,
  validate = true,
  parameters,
  initSocket,
  localData,
  createMediaSFURoom,
}: HandleCreateRoomOptions): Promise<void> {
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
   * Creates a local room by emitting to the socket
   */
  const createLocalRoom = async ({
    createData,
    link = localLink,
  }: CreateLocalRoomOptions) => {
    initSocket?.emit('createRoom', createData, (response: CreateJoinLocalRoomResponse) => {
      if (response.success) {
        updateSocket(initSocket!);
        updateApiUserName(localData?.apiUserName || '');
        updateApiToken(response.secret);
        updateLink(link);
        updateRoomName(createData.eventID);
        // local needs islevel updated from here
        // we update member as `userName` + "_2" and split it in the room
        updateMember(createData.userName + '_2');
        updateIsLoadingModalVisible(false);
        updateValidated(true);
      } else {
        updateIsLoadingModalVisible(false);
        showAlert?.({
          message: `Unable to create room. ${response.reason}`,
          type: 'danger',
          duration: 3000,
        });
      }
    });
  };

  /**
   * Creates a room on MediaSFU
   */
  const roomCreator = async ({
    payload: createPayload,
    apiUserName: userName,
    apiKey: key,
    validate: shouldValidate = true,
  }: {
    payload: CreateMediaSFURoomOptions;
    apiUserName: string;
    apiKey: string;
    validate?: boolean;
  }) => {
    const response = await createMediaSFURoom({
      payload: createPayload,
      apiUserName: userName,
      apiKey: key,
      localLink: localLink,
    });
    if (response.success && response.data && 'roomName' in response.data) {
      await checkLimitsAndMakeRequest({
        apiUserName: response.data.roomName,
        apiToken: response.data.secret,
        link: response!.data.link,
        userName: createPayload.userName,
        parameters: parameters,
        validate: shouldValidate,
      });
      return response;
    } else {
      updateIsLoadingModalVisible(false);
      showAlert?.({
        message: `Unable to create room. ${
          response.data ? ('error' in response.data ? response.data.error : '') : ''
        }`,
        type: 'danger',
        duration: 3000,
      });
    }
  };

  updateIsLoadingModalVisible(true);

  if (localLink.length > 0) {
    const secureCode =
      Math.random().toString(30).substring(2, 14) +
      Math.random().toString(30).substring(2, 14);
    let eventID =
      new Date().getTime().toString(30) +
      new Date().getUTCMilliseconds() +
      Math.floor(10 + Math.random() * 99).toString();
    eventID = 'm' + eventID;
    const eventRoomParams = localData?.meetingRoomParams_;
    if (eventRoomParams && payload.eventType) {
      eventRoomParams.type = payload.eventType;
    }

    const createData: CreateLocalRoomParameters = {
      eventID: eventID,
      duration: payload.duration,
      capacity: payload.capacity,
      userName: payload.userName,
      scheduledDate: new Date(),
      secureCode: secureCode,
      waitRoom: false,
      recordingParams: localData?.recordingParams_,
      eventRoomParams: eventRoomParams,
      videoPreference: null,
      audioPreference: null,
      audioOutputPreference: null,
      mediasfuURL: '',
    };

    if (connectMediaSFU && initSocket && localData && localData.apiUserName && localData.apiKey) {
      // Store references to prevent race conditions
      const localApiUserName = localData.apiUserName;
      const localApiKey = localData.apiKey;

      // Build a unique identifier for this create request
      const roomIdentifier = `local_create_${payload.userName}_${payload.duration}_${payload.capacity}`;
      const pendingKey = `prejoin_pending_${roomIdentifier}`;
      const PENDING_TIMEOUT = 30 * 1000; // 30 seconds

      // Check pending status to prevent duplicate requests
      try {
        const pendingRequest = localStorage.getItem(pendingKey);
        if (pendingRequest) {
          const pendingData = JSON.parse(pendingRequest);
          const timeSincePending = Date.now() - (pendingData?.timestamp ?? 0);
          if (timeSincePending < PENDING_TIMEOUT) {
            updateIsLoadingModalVisible(false);
            showAlert?.({
              message: 'Room creation already in progress',
              type: 'danger',
              duration: 3000,
            });
            return;
          } else {
            // Stale lock, clear it
            try {
              localStorage.removeItem(pendingKey);
            } catch {
              // Ignore localStorage errors
            }
          }
        }
      } catch {
        // Ignore localStorage read/JSON errors
      }

      // Mark request as pending
      try {
        localStorage.setItem(
          pendingKey,
          JSON.stringify({
            timestamp: Date.now(),
            payload: {
              action: 'create',
              userName: payload.userName,
              duration: payload.duration,
              capacity: payload.capacity,
            },
          })
        );

        // Auto-clear the pending flag after timeout to avoid stale locks
        setTimeout(() => {
          try {
            localStorage.removeItem(pendingKey);
          } catch {
            // Ignore localStorage errors
          }
        }, PENDING_TIMEOUT);
      } catch {
        // Ignore localStorage write errors
      }

      payload.recordOnly = true; // allow production to mediasfu only; no consumption

      try {
        const response = await roomCreator({
          payload,
          apiUserName: localApiUserName,
          apiKey: localApiKey,
          validate: false,
        });

        // Clear pending status on completion
        try {
          localStorage.removeItem(pendingKey);
        } catch {
          /* ignore */
        }

        if (response && response.success && response.data && 'roomName' in response.data) {
          createData.eventID = response.data.roomName;
          createData.secureCode = response.data.secureCode || '';
          createData.mediasfuURL = response.data.publicURL;
          await createLocalRoom({
            createData: createData,
            link: response.data.link,
          });
        } else {
          updateIsLoadingModalVisible(false);
          showAlert?.({
            message: `Unable to create room on MediaSFU.`,
            type: 'danger',
            duration: 3000,
          });
          try {
            updateSocket(initSocket);
            await createLocalRoom({ createData: createData });
          } catch (error) {
            updateIsLoadingModalVisible(false);
            showAlert?.({
              message: `Unable to create room. ${error}`,
              type: 'danger',
              duration: 3000,
            });
          }
        }
      } catch (error) {
        // Clear pending status on error
        try {
          localStorage.removeItem(pendingKey);
        } catch {
          /* ignore */
        }
        updateIsLoadingModalVisible(false);
        showAlert?.({
          message: `Unable to create room on MediaSFU. ${error}`,
          type: 'danger',
          duration: 3000,
        });
      }
    } else {
      try {
        updateSocket(initSocket!);
        await createLocalRoom({ createData: createData });
      } catch (error) {
        updateIsLoadingModalVisible(false);
        showAlert?.({
          message: `Unable to create room. ${error}`,
          type: 'danger',
          duration: 3000,
        });
      }
    }
  } else {
    // Build a unique identifier for this create request (non-local)
    const roomIdentifier = `mediasfu_create_${payload.userName}_${payload.duration}_${payload.capacity}`;
    const pendingKey = `prejoin_pending_${roomIdentifier}`;
    const PENDING_TIMEOUT = 30 * 1000; // 30 seconds

    // Check pending status to prevent duplicate requests
    try {
      const pendingRequest = localStorage.getItem(pendingKey);
      if (pendingRequest) {
        const pendingData = JSON.parse(pendingRequest);
        const timeSincePending = Date.now() - (pendingData?.timestamp ?? 0);
        if (timeSincePending < PENDING_TIMEOUT) {
          updateIsLoadingModalVisible(false);
          showAlert?.({
            message: 'Room creation already in progress',
            type: 'danger',
            duration: 3000,
          });
          return;
        } else {
          // Stale lock, clear it
          try {
            localStorage.removeItem(pendingKey);
          } catch {
            // Ignore localStorage errors
          }
        }
      }
    } catch {
      // Ignore localStorage read/JSON errors
    }

    // Mark request as pending
    try {
      localStorage.setItem(
        pendingKey,
        JSON.stringify({
          timestamp: Date.now(),
          payload: {
            action: 'create',
            userName: payload.userName,
            duration: payload.duration,
            capacity: payload.capacity,
          },
        })
      );

      // Auto-clear the pending flag after timeout to avoid stale locks
      setTimeout(() => {
        try {
          localStorage.removeItem(pendingKey);
        } catch {
          // Ignore localStorage errors
        }
      }, PENDING_TIMEOUT);
    } catch {
      // Ignore localStorage write errors
    }

    try {
      await roomCreator({
        payload,
        apiUserName: apiUserName,
        apiKey: apiKey,
        validate: validate,
      });

      // Clear pending status on completion
      try {
        localStorage.removeItem(pendingKey);
      } catch {
        /* ignore */
      }
    } catch (error) {
      // Clear pending status on error
      try {
        localStorage.removeItem(pendingKey);
      } catch {
        /* ignore */
      }
      updateIsLoadingModalVisible(false);
      showAlert?.({
        message: `Unable to create room. ${error}`,
        type: 'danger',
        duration: 3000,
      });
    }
  }
}
