import type { Socket } from 'socket.io-client';
import type { ShowAlert } from '../../types/types';

export interface HandleStopWhiteboardOptions {
  socket: Socket;
  roomName: string;
  showAlert?: ShowAlert;
  updateWhiteboardStarted: (started: boolean) => void;
  updateWhiteboardEnded: (ended: boolean) => void;
  updateIsConfigureWhiteboardModalVisible: (isVisible: boolean) => void;
}

export type HandleStopWhiteboardType = (options: HandleStopWhiteboardOptions) => Promise<boolean>;

/**
 * Handles stopping a whiteboard session.
 * @function
 * @param {HandleStopWhiteboardOptions} options - The options for stopping the whiteboard.
 * @param {Socket} options.socket - The socket instance for communication.
 * @param {string} options.roomName - The name of the room.
 * @param {ShowAlert} [options.showAlert] - Function to show alerts.
 * @param {Function} options.updateWhiteboardStarted - Function to update whiteboard started state.
 * @param {Function} options.updateWhiteboardEnded - Function to update whiteboard ended state.
 * @param {Function} options.updateIsConfigureWhiteboardModalVisible - Function to close the configure modal.
 * @returns {Promise<boolean>}
 */
export const handleStopWhiteboard = async ({
  socket,
  roomName,
  showAlert,
  updateWhiteboardStarted,
  updateWhiteboardEnded,
  updateIsConfigureWhiteboardModalVisible,
}: HandleStopWhiteboardOptions): Promise<boolean> => {
  return new Promise((resolve) => {
    socket.emit('stopWhiteboard', { roomName }, (response: { success: boolean; reason?: string }) => {
      if (response.success) {
        showAlert?.({ message: 'Whiteboard stopped', type: 'success' });
        updateWhiteboardStarted(false);
        updateWhiteboardEnded(true);
        updateIsConfigureWhiteboardModalVisible(false);
      } else {
        showAlert?.({ message: response.reason || 'Failed to stop whiteboard', type: 'danger' });
      }
      resolve(response.success);
    });
  });
};
