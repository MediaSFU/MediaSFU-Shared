import { Socket } from 'socket.io-client';
import type { ShowAlert } from '../../types/types';



export interface HandleStartBreakoutOptions {
  socket: Socket;
  localSocket?: Socket;
  breakoutRooms: Array<Array<{ name: string; breakRoom?: number | null }>>;
  newParticipantAction: string;
  roomName: string;
  breakOutRoomStarted: boolean;
  breakOutRoomEnded: boolean;
  showAlert?: ShowAlert;
  updateBreakOutRoomStarted: (started: boolean) => void;
  updateBreakOutRoomEnded: (ended: boolean) => void;
  onBreakoutRoomsClose: () => void;
  meetingDisplayType: string;
  updateMeetingDisplayType: (displayType: string) => void;
}

export type HandleStartBreakoutType = (options: HandleStartBreakoutOptions) => void;

/**
 * Handles the start of breakout rooms.
 * @function
 * @param {HandleStartBreakoutOptions} options - The options for starting breakout rooms.
 * @param {Socket} options.socket - The main socket instance.
 * @param {Socket} [options.localSocket] - The local socket instance (optional).
 * @param {Array<Array<{name: string, breakRoom: number | null}>>} options.breakoutRooms - The array of breakout rooms with participant data.
 * @param {string} options.newParticipantAction - The action to take for new participants.
 * @param {string} options.roomName - The name of the main room.
 * @param {boolean} options.breakOutRoomStarted - Whether breakout rooms have already started.
 * @param {boolean} options.breakOutRoomEnded - Whether breakout rooms have ended.
 * @param {ShowAlert} [options.showAlert] - Function to show alerts.
 * @param {Function} options.updateBreakOutRoomStarted - Function to update breakout room started state.
 * @param {Function} options.updateBreakOutRoomEnded - Function to update breakout room ended state.
 * @param {Function} options.onBreakoutRoomsClose - Function to close breakout rooms modal.
 * @param {string} options.meetingDisplayType - Current meeting display type.
 * @param {Function} options.updateMeetingDisplayType - Function to update meeting display type.
 * @returns {void}
 */
export const handleStartBreakout = ({
  socket,
  localSocket,
  breakoutRooms,
  newParticipantAction,
  roomName,
  breakOutRoomStarted,
  breakOutRoomEnded,
  showAlert,
  updateBreakOutRoomStarted,
  updateBreakOutRoomEnded,
  onBreakoutRoomsClose,
  meetingDisplayType,
  updateMeetingDisplayType,
}: HandleStartBreakoutOptions): void => {
  const emitName = breakOutRoomStarted && !breakOutRoomEnded ? 'updateBreakout' : 'startBreakout';
  const filteredBreakoutRooms = breakoutRooms.map((room) =>
    room.map(({ name, breakRoom }) => ({ name, breakRoom }))
  );

  socket.emit(
    emitName,
    { breakoutRooms: filteredBreakoutRooms, newParticipantAction, roomName },
    (response: { success: boolean; reason: string }) => {
      if (response.success) {
        showAlert?.({ message: 'Breakout rooms active', type: 'success' });
        updateBreakOutRoomStarted(true);
        updateBreakOutRoomEnded(false);
        onBreakoutRoomsClose();
        if (meetingDisplayType !== 'all') {
          updateMeetingDisplayType('all');
        }
      } else {
        showAlert?.({ message: response.reason, type: 'danger' });
      }
    }
  );

  if (localSocket && localSocket.id) {
    try {
      localSocket.emit(
        emitName,
        { breakoutRooms: filteredBreakoutRooms, newParticipantAction, roomName },
        (response: { success: boolean; reason: string }) => {
          if (response.success) {
            // do nothing
          }
        }
      );
    } catch {
      console.log('Error starting local breakout rooms:');
    }
  }
};
