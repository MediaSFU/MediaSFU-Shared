import type { Socket } from 'socket.io-client';
import type { ShowAlert, WhiteboardUser } from '../../types/types';


export interface HandleStartWhiteboardOptions {
  socket: Socket;
  whiteboardUsers: WhiteboardUser[];
  roomName: string;
  whiteboardStarted: boolean;
  whiteboardEnded: boolean;
  showAlert?: ShowAlert;
  updateWhiteboardStarted: (started: boolean) => void;
  updateWhiteboardEnded: (ended: boolean) => void;
  updateIsConfigureWhiteboardModalVisible: (isVisible: boolean) => void;
}

export type HandleStartWhiteboardType = (options: HandleStartWhiteboardOptions) => Promise<boolean>;

/**
 * Handles the start of a whiteboard session.
 * @function
 * @param {HandleStartWhiteboardOptions} options - The options for starting the whiteboard.
 * @param {Socket} options.socket - The socket instance for communication.
 * @param {WhiteboardUser[]} options.whiteboardUsers - Array of users assigned to the whiteboard.
 * @param {string} options.roomName - The name of the room.
 * @param {boolean} options.whiteboardStarted - Whether the whiteboard has already started.
 * @param {boolean} options.whiteboardEnded - Whether the whiteboard has ended.
 * @param {ShowAlert} [options.showAlert] - Function to show alerts.
 * @param {Function} options.updateWhiteboardStarted - Function to update whiteboard started state.
 * @param {Function} options.updateWhiteboardEnded - Function to update whiteboard ended state.
 * @param {Function} options.updateIsConfigureWhiteboardModalVisible - Function to close the configure modal.
 * @returns {Promise<boolean>}
 */
export const handleStartWhiteboard = async ({
  socket,
  whiteboardUsers,
  roomName,
  whiteboardStarted,
  whiteboardEnded,
  showAlert,
  updateWhiteboardStarted,
  updateWhiteboardEnded,
  updateIsConfigureWhiteboardModalVisible,
}: HandleStartWhiteboardOptions): Promise<boolean> => {
  const emitName = whiteboardStarted && !whiteboardEnded ? 'updateWhiteboard' : 'startWhiteboard';
  const filteredWhiteboardUsers = whiteboardUsers.map(({ name, useBoard }) => ({ name, useBoard }));

  return new Promise((resolve) => {
    socket.emit(
      emitName,
      { whiteboardUsers: filteredWhiteboardUsers, roomName },
      (response: { success: boolean; reason?: string }) => {
        if (response.success) {
          showAlert?.({ message: 'Whiteboard active', type: 'success' });
          updateWhiteboardStarted(true);
          updateWhiteboardEnded(false);
          updateIsConfigureWhiteboardModalVisible(false);
        } else {
          showAlert?.({ message: response.reason || 'Failed to start whiteboard', type: 'danger' });
        }
        resolve(response.success);
      }
    );
  });
};
