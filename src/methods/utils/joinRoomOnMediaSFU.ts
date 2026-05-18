import type { CreateMediaSFURoomOptions, JoinMediaSFURoomOptions } from '../../types/types';
import { resolveMediaSFURoomApi } from './resolveMediaSFURoomApi';

export type CreateJoinRoomType = (options: {
  payload: CreateMediaSFURoomOptions | JoinMediaSFURoomOptions;
  apiUserName: string;
  apiKey: string;
  localLink?: string;
}) => Promise<{
  data: CreateJoinRoomResponse | CreateJoinRoomError | null;
  success: boolean;
}>;

export interface CreateJoinRoomResponse {
  message: string;
  roomName: string;
  secureCode?: string;
  publicURL: string;
  link: string;
  secret: string;
  success: boolean;
}

export interface CreateJoinRoomError {
  error: string;
  success?: boolean;
}

export type JoinRoomOnMediaSFUType = (options: {
  payload: JoinMediaSFURoomOptions;
  apiUserName: string;
  apiKey: string;
  localLink?: string;
}) => Promise<{
  data: CreateJoinRoomResponse | CreateJoinRoomError | null;
  success: boolean;
}>;

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

/**
 * Calls the MediaSFU join-room API and returns a normalized success/error result.
 *
 * This helper supports both cloud and self-hosted deployments through the
 * optional `localLink` override.
 *
 * @param options API request options including credentials and join payload.
 * @returns A result object containing either parsed response data or an error payload.
 *
 * @example
 * ```typescript
 * const result = await joinRoomOnMediaSFU({
 *   payload: { action: 'join', meetingID: 'room123', userName: 'Ada' },
 *   apiUserName: 'sampleuser',
 *   apiKey: '0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef',
 * });
 *
 * if (result.success) {
 *   console.log(result.data?.roomName);
 * }
 * ```
 */
export const joinRoomOnMediaSFU: CreateJoinRoomType = async ({
  payload,
  apiUserName,
  apiKey,
  localLink = '',
}) => {
  try {
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

    const finalLink = resolveMediaSFURoomApi(localLink, 'joinRoom');

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

    const data = await response.json();
    return { data, success: true };
  } catch (error) {
    const errorMessage = (
      error as { reason?: string; message?: string }
    ).reason || (
      error as { reason?: string; message?: string }
    ).message || 'unknown error';
    return {
      data: { error: `Unable to join room, ${errorMessage}` },
      success: false,
    };
  }
};