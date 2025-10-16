import { Socket } from 'socket.io-client';
import type { ShowAlert } from '../../types/types';

export interface ModifySettingsOptions {
  showAlert?: ShowAlert;
  roomName: string;
  audioSet: string;
  videoSet: string;
  screenshareSet: string;
  chatSet: string;
  socket: Socket;
  updateAudioSetting: (audioSet: string) => void;
  updateVideoSetting: (videoSet: string) => void;
  updateScreenshareSetting: (screenshareSet: string) => void;
  updateChatSetting: (chatSet: string) => void;
  updateIsSettingsModalVisible: (isVisible: boolean) => void;
}

// Export the type definition for the function
export type ModifySettingsType = (options: ModifySettingsOptions) => Promise<void>;

/**
 * Modifies the settings for a given room and updates the state accordingly.
 *
 * @param {ModifySettingsOptions} options - The options for modifying settings.
 * @returns {Promise<void>} A promise that resolves when the settings have been modified.
 *
 * @throws Will show an alert if any setting is set to "approval" in demo mode (room name starts with "d").
 *
 * @example
 * ```typescript
 * modifySettings({
 *   roomName: "d123",
 *   audioSet: "allow",
 *   videoSet: "allow",
 *   screenshareSet: "deny",
 *   chatSet: "allow",
 *   socket: mySocketInstance,
 *   updateAudioSetting: setAudioSetting,
 *   updateVideoSetting: setVideoSetting,
 *   updateScreenshareSetting: setScreenshareSetting,
 *   updateChatSetting: setChatSetting,
 *   updateIsSettingsModalVisible: setIsSettingsModalVisible,
 *   showAlert: (options) => alertUser(options),
 * });
 * ```
 */
export async function modifySettings({
  showAlert,
  roomName,
  audioSet,
  videoSet,
  screenshareSet,
  chatSet,
  socket,
  updateAudioSetting,
  updateVideoSetting,
  updateScreenshareSetting,
  updateChatSetting,
  updateIsSettingsModalVisible,
}: ModifySettingsOptions): Promise<void> {
  if (roomName.toLowerCase().startsWith('d')) {
    // none should be approval
    if (
      audioSet === 'approval' ||
      videoSet === 'approval' ||
      screenshareSet === 'approval' ||
      chatSet === 'approval'
    ) {
      showAlert?.({
        message: 'You cannot set approval for demo mode.',
        type: 'danger',
        duration: 3000,
      });

      return;
    }
  }

  // Check and update state variables based on the provided logic
  if (audioSet) {
    updateAudioSetting(audioSet);
  }
  if (videoSet) {
    updateVideoSetting(videoSet);
  }
  if (screenshareSet) {
    updateScreenshareSetting(screenshareSet);
  }
  if (chatSet) {
    updateChatSetting(chatSet);
  }

  const settings = [audioSet, videoSet, screenshareSet, chatSet];
  socket.emit('updateSettingsForRequests', { settings, roomName });

  // Close modal
  updateIsSettingsModalVisible(false);
}
