import { Socket } from 'socket.io-client';
import { joinRoom, JoinRoomResponse } from '../../producers/producerEmits/joinRoom';
import { joinConRoom, JoinConRoomResponse } from '../../producers/producerEmits/joinConRoom';

export interface JoinRoomClientOptions {
  socket: Socket;
  roomName: string;
  islevel: string;
  member: string;
  sec: string;
  apiUserName: string;
  consume?: boolean;
}

export type JoinRoomClientResponse = JoinRoomResponse | JoinConRoomResponse;
export type JoinRoomClientType = (options: JoinRoomClientOptions) => Promise<JoinRoomClientResponse>;

/**
 * Joins a room by delegating to the producer or consumer join emit based on the consume flag.
 *
 * @param {JoinRoomClientOptions} options - The options for joining the room.
 * @returns {Promise<JoinRoomClientResponse>} The response returned from the server.
 */
export const joinRoomClient = async ({
  socket,
  roomName,
  islevel,
  member,
  sec,
  apiUserName,
  consume = false,
}: JoinRoomClientOptions): Promise<JoinRoomClientResponse> => {
  try {
    if (consume) {
      return await joinConRoom({
        socket,
        roomName,
        islevel,
        member,
        sec,
        apiUserName,
      });
    }

    return await joinRoom({
      socket,
      roomName,
      islevel,
      member,
      sec,
      apiUserName,
    });
  } catch (error) {
    console.log(error);
    throw new Error('Failed to join the room. Please check your connection and try again.');
  }
};
