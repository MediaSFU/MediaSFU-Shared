import type {
  CreateRoomOnMediaSFUOptions,
  CreateRoomOnMediaSFUType,
  PendingRequestStorage,
} from '../../types/types';
import type { CreateJoinRoomError, CreateJoinRoomResponse } from './joinRoomOnMediaSFU';
import { resolveMediaSFURoomApi } from './resolveMediaSFURoomApi';

const readResponseError = async (response: Response): Promise<string> => {
  const fallbackMessage = `HTTP error! Status: ${response.status}`;

  try {
    const responseText = await response.text();

    if (!responseText) {
      return fallbackMessage;
    }

    const parsedResponse = JSON.parse(responseText) as { error?: string; message?: string };
    return parsedResponse.error || parsedResponse.message || responseText;
  } catch {
    return fallbackMessage;
  }
};

const createBrowserPendingRequestStorage = (): PendingRequestStorage | undefined => {
  if (typeof localStorage === 'undefined') {
    return undefined;
  }

  return {
    getItem: async (key: string) => localStorage.getItem(key),
    setItem: async (key: string, value: string) => {
      localStorage.setItem(key, value);
    },
    removeItem: async (key: string) => {
      localStorage.removeItem(key);
    },
  };
};

/**
 * Calls the MediaSFU create-room API and guards against duplicate in-flight room requests.
 *
 * A short-lived `localStorage` marker is used to prevent accidental duplicate
 * submissions while a room create request is still pending.
 *
 * @param options API request options including credentials and create payload.
 * @returns A result object containing either parsed response data or an error payload.
 *
 * @example
 * ```typescript
 * const created = await createRoomOnMediaSFU({
 *   payload: {
 *     action: 'create',
 *     userName: 'Ada',
 *     duration: 60,
 *     capacity: 10,
 *   } as CreateMediaSFURoomOptions,
 *   apiUserName: 'sampleuser',
 *   apiKey: '0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef',
 * });
 *
 * console.log(created.success);
 * ```
 */
export const createRoomOnMediaSFU: CreateRoomOnMediaSFUType = async ({
  payload,
  apiUserName,
  apiKey,
  localLink = '',
  pendingRequestStorage,
}: CreateRoomOnMediaSFUOptions): Promise<{
  data: CreateJoinRoomResponse | CreateJoinRoomError | null;
  success: boolean;
}> => {
  const storage = pendingRequestStorage ?? createBrowserPendingRequestStorage();
  const roomIdentifier = `create_${payload.userName}_${payload.duration}_${payload.capacity}`;

  const pendingKey = `mediasfu_pending_${roomIdentifier}`;
  const pendingTimeout = 30 * 1000;

  try {
    const pendingRequest = storage ? await storage.getItem(pendingKey) : null;
    if (storage && pendingRequest) {
      const pendingData = JSON.parse(pendingRequest) as { timestamp: number };
      const timeSincePending = Date.now() - pendingData.timestamp;

      if (timeSincePending < pendingTimeout) {
        return {
          data: { error: 'Room creation already in progress' },
          success: false,
        };
      }

      await storage.removeItem(pendingKey);
    }

    if (
      !apiUserName ||
      !apiKey ||
      apiUserName === 'yourAPIUSERNAME' ||
      apiKey === 'yourAPIKEY' ||
      apiKey.length !== 64 ||
      apiUserName.length < 6
    ) {
      return { data: { error: 'Invalid credentials' }, success: false };
    }

    const finalLink = resolveMediaSFURoomApi(localLink, 'createRoom');

    if (storage) {
      await storage.setItem(pendingKey, JSON.stringify({
        timestamp: Date.now(),
        payload: {
          action: payload.action,
          userName: payload.userName,
          meetingID: 'create',
        },
      }));

      setTimeout(() => {
        storage.removeItem(pendingKey).catch(() => {
        });
      }, pendingTimeout);
    }

    const response = await fetch(finalLink, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiUserName}:${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(await readResponseError(response));
    }

    const data: CreateJoinRoomResponse = await response.json();
    if (storage) {
      await storage.removeItem(pendingKey);
    }
    return { data, success: true };
  } catch (error) {
    if (storage) {
      try {
        await storage.removeItem(pendingKey);
      } catch {
      }
    }

    const errorMessage = (error as Error).message || 'unknown error';
    return {
      data: { error: `Unable to create room, ${errorMessage}` },
      success: false,
    };
  }
};