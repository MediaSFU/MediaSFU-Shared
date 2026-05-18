import { Socket } from 'socket.io-client';
import type { ShowAlert } from '../../types/types';

export interface PermissionCapabilities {
  useMic: 'allow' | 'approval' | 'disallow';
  useCamera: 'allow' | 'approval' | 'disallow';
  useScreen: 'allow' | 'approval' | 'disallow';
  useChat: 'allow' | 'disallow';
}

export interface PermissionConfig {
  level0: PermissionCapabilities;
  level1: PermissionCapabilities;
}

export interface UpdatePermissionConfigOptions {
  socket: Socket;
  config: PermissionConfig;
  member: string;
  islevel: string;
  roomName: string;
  showAlert?: ShowAlert;
}

export const updatePermissionConfig = async ({
  socket,
  config,
  islevel,
  roomName,
  showAlert,
}: UpdatePermissionConfigOptions): Promise<void> => {
  if (islevel !== '2') {
    showAlert?.({ message: 'Only the host can update permission configuration', type: 'danger', duration: 3000 });
    return;
  }

  return new Promise<void>((resolve) => {
    socket.emit(
      'updatePermissionConfig',
      {
        config,
        roomName,
      },
      (response: { success: boolean; reason?: string }) => {
        if (!response?.success) {
          showAlert?.({ message: response?.reason || 'Failed to update permission config', type: 'danger', duration: 3000 });
        }
        resolve();
      }
    );
  });
};
