import { Socket } from 'socket.io-client';
import type { ShowAlert } from '../../types/types';

export interface HandleStopBreakoutOptions {
  socket: Socket;
  localSocket?: Socket;
  roomName: string;
  showAlert?: ShowAlert;
  updateBreakOutRoomStarted: (started: boolean) => void;
  updateBreakOutRoomEnded: (ended: boolean) => void;
  onBreakoutRoomsClose: () => void;
  meetingDisplayType: string;
  prevMeetingDisplayType: string;
  updateMeetingDisplayType: (displayType: string) => void;
}

export type HandleStopBreakoutType = (options: HandleStopBreakoutOptions) => void;

/**
 * Handles stopping breakout rooms.
 * @function
 * @param {HandleStopBreakoutOptions} options - The options for stopping breakout rooms.
 * @param {Socket} options.socket - The main socket instance.
 * @param {Socket} [options.localSocket] - The local socket instance (optional).
 * @param {string} options.roomName - The name of the main room.
 * @param {ShowAlert} [options.showAlert] - Function to show alerts.
 * @param {Function} options.updateBreakOutRoomStarted - Function to update breakout room started state.
 * @param {Function} options.updateBreakOutRoomEnded - Function to update breakout room ended state.
 * @param {Function} options.onBreakoutRoomsClose - Function to close breakout rooms modal.
 * @param {string} options.meetingDisplayType - Current meeting display type.
 * @param {string} options.prevMeetingDisplayType - Previous meeting display type.
 * @param {Function} options.updateMeetingDisplayType - Function to update meeting display type.
 * @returns {void}
 */
export const handleStopBreakout = ({
  socket,
  localSocket,
  roomName,
  showAlert,
  updateBreakOutRoomStarted,
  updateBreakOutRoomEnded,
  onBreakoutRoomsClose,
  meetingDisplayType,
  prevMeetingDisplayType,
  updateMeetingDisplayType,
}: HandleStopBreakoutOptions): void => {
  socket.emit('stopBreakout', { roomName }, (response: { success: boolean; reason: string }) => {
    if (response.success) {
      showAlert?.({ message: 'Breakout rooms stopped', type: 'success' });
      updateBreakOutRoomStarted(false);
      updateBreakOutRoomEnded(true);
      onBreakoutRoomsClose();
      if (meetingDisplayType !== prevMeetingDisplayType) {
        updateMeetingDisplayType(prevMeetingDisplayType);
      }
    } else {
      showAlert?.({ message: response.reason, type: 'danger' });
    }
  });

  if (localSocket && localSocket.id) {
    try {
      localSocket.emit('stopBreakout', { roomName }, (response: { success: boolean; reason: string }) => {
        if (response.success) {
          // do nothing
        }
      });
    } catch {
      console.log('Error stopping local breakout rooms:');
    }
  }
};
