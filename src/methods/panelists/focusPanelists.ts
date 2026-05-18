import { Socket } from 'socket.io-client';
import type { ShowAlert } from '../../types/types';

export interface FocusPanelistsOptions {
  socket: Socket;
  roomName: string;
  member: string;
  islevel: string;
  focusEnabled: boolean;
  muteOthersMic?: boolean;
  muteOthersCamera?: boolean;
  showAlert?: ShowAlert;
}

export interface UnfocusPanelistsOptions {
  socket: Socket;
  roomName: string;
  member: string;
  islevel: string;
  showAlert?: ShowAlert;
}

export type FocusPanelistsType = (options: FocusPanelistsOptions) => Promise<void>;
export type UnfocusPanelistsType = (options: UnfocusPanelistsOptions) => Promise<void>;

export const focusPanelists = async ({
  socket,
  roomName,
  member: _member,
  islevel,
  focusEnabled,
  muteOthersMic = false,
  muteOthersCamera = false,
  showAlert,
}: FocusPanelistsOptions): Promise<void> => {
  if (islevel !== '2') {
    showAlert?.({ message: 'Only the host can focus panelists', type: 'danger', duration: 3000 });
    return;
  }

  socket.emit(
    'focusPanelists',
    {
      roomName,
      focusEnabled,
      muteOthersMic,
      muteOthersCamera,
    },
    (response: { success: boolean; reason?: string }) => {
      if (!response?.success) {
        showAlert?.({ message: response?.reason || 'Failed to focus panelists', type: 'danger', duration: 3000 });
      }
    }
  );
};

export const unfocusPanelists = async ({
  socket,
  roomName,
  member: _member,
  islevel,
  showAlert,
}: UnfocusPanelistsOptions): Promise<void> => {
  if (islevel !== '2') {
    showAlert?.({ message: 'Only the host can unfocus panelists', type: 'danger', duration: 3000 });
    return;
  }

  socket.emit(
    'focusPanelists',
    {
      roomName,
      focusEnabled: false,
      muteOthersMic: false,
      muteOthersCamera: false,
    },
    (response: { success: boolean; reason?: string }) => {
      if (!response?.success) {
        showAlert?.({ message: response?.reason || 'Failed to unfocus panelists', type: 'danger', duration: 3000 });
      }
    }
  );
};
