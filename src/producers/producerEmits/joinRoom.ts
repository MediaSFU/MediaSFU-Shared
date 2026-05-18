import { Socket } from 'socket.io-client';
import type { RtpCapabilities } from 'mediasoup-client/lib/types';
import { validateAlphanumeric } from '../../methods/utils/validateAlphanumeric';

export interface JoinRoomOptions {
  socket: Socket;
  roomName: string;
  islevel: string;
  member: string;
  sec: string;
  apiUserName: string;
}

export interface JoinRoomResponse {
  success: boolean;
  rtpCapabilities: RtpCapabilities | null;
  reason?: string;
  banned?: boolean;
  suspended?: boolean;
  noAdmin?: boolean;
  [key: string]: any;
}

export type JoinRoomType = (options: JoinRoomOptions) => Promise<JoinRoomResponse>;

/**
 * Joins a user to a specified room via a socket connection.
 *
 * @param {JoinRoomOptions} options - The options for joining the room.
 * @param {Socket} options.socket - The socket instance to use for communication.
 * @param {string} options.roomName - The name of the room to join.
 * @param {string} options.islevel - The level of the user.
 * @param {string} options.member - The member identifier.
 * @param {string} options.sec - The security token.
 * @param {string} options.apiUserName - The API username of the user.
 *
 * @returns {Promise<JoinRoomResponse>} A promise that resolves with the data received from the 'joinRoom' event or rejects with a validation error.
 */
export async function joinRoom({
  socket,
  roomName,
  islevel,
  member,
  sec,
  apiUserName,
}: JoinRoomOptions): Promise<JoinRoomResponse> {
  return new Promise((resolve, reject) => {
    if (!(sec && roomName && islevel && apiUserName && member)) {
      const validationError: JoinRoomResponse = {
        success: false,
        rtpCapabilities: null,
        reason: 'Missing required parameters',
      };
      reject(validationError);
      return;
    }

    try {
      validateAlphanumeric({ str: roomName });
      validateAlphanumeric({ str: apiUserName });
      validateAlphanumeric({ str: member });
    } catch {
      const validationError: JoinRoomResponse = {
        success: false,
        rtpCapabilities: null,
        reason: 'Invalid roomName or apiUserName or member',
      };
      reject(validationError);
      return;
    }

    if (!(roomName.startsWith('s') || roomName.startsWith('p') || roomName.startsWith('d'))) {
      const validationError: JoinRoomResponse = {
        success: false,
        rtpCapabilities: null,
        reason: 'Invalid roomName, must start with s or p or d',
      };
      reject(validationError);
      return;
    }

    if (
      !(
        sec.length === 64
        && roomName.length >= 8
        && islevel.length === 1
        && apiUserName.length >= 6
        && (islevel === '0' || islevel === '1' || islevel === '2')
      )
    ) {
      const validationError: JoinRoomResponse = {
        success: false,
        rtpCapabilities: null,
        reason: 'Invalid roomName or islevel or apiUserName or secret',
      };
      reject(validationError);
      return;
    }

    socket.emit(
      'joinRoom',
      {
        roomName, islevel, member, sec, apiUserName,
      },
      async (data: JoinRoomResponse) => {
        try {
          if (data.rtpCapabilities == null) {
            if (data.banned) {
              throw new Error('User is banned.');
            }
            if (data.suspended) {
              throw new Error('User is suspended.');
            }
            if (data.noAdmin) {
              throw new Error('Host has not joined the room yet.');
            }

            resolve(data);
          } else {
            resolve(data);
          }
        } catch (error) {
          console.log('Error joining room:', error);
          reject(error);
        }
      },
    );
  });
}
