import { Socket } from 'socket.io-client';
import type { Participant, ShowAlert } from '../../types/types';

export interface UpdatePanelistsOptions {
  socket: Socket;
  panelists: Participant[];
  roomName: string;
  member: string;
  islevel: string;
  showAlert?: ShowAlert;
}

export interface AddPanelistOptions {
  socket: Socket;
  participant: Participant;
  currentPanelists: Participant[];
  maxPanelists: number;
  roomName: string;
  member: string;
  islevel: string;
  showAlert?: ShowAlert;
}

export interface RemovePanelistOptions {
  socket: Socket;
  participant: Participant;
  roomName: string;
  member: string;
  islevel: string;
  showAlert?: ShowAlert;
}

export type UpdatePanelistsType = (options: UpdatePanelistsOptions) => Promise<void>;
export type AddPanelistType = (options: AddPanelistOptions) => Promise<boolean>;
export type RemovePanelistType = (options: RemovePanelistOptions) => Promise<void>;

export const updatePanelists = async ({
  socket,
  panelists,
  roomName,
  member: _member,
  islevel,
  showAlert,
}: UpdatePanelistsOptions): Promise<void> => {
  if (islevel !== '2') {
    showAlert?.({ message: 'Only the host can update panelists', type: 'danger', duration: 3000 });
    return;
  }

  socket.emit(
    'updatePanelists',
    {
      panelists: panelists.map((p) => ({ id: p.id, name: p.name })),
      roomName,
    },
    (response: { success: boolean; reason?: string }) => {
      if (!response?.success) {
        showAlert?.({ message: response?.reason || 'Failed to update panelists', type: 'danger', duration: 3000 });
      }
    }
  );
};

export const addPanelist = async ({
  socket,
  participant,
  currentPanelists,
  maxPanelists,
  roomName,
  member: _member,
  islevel,
  showAlert,
}: AddPanelistOptions): Promise<boolean> => {
  if (islevel !== '2') {
    showAlert?.({ message: 'Only the host can add panelists', type: 'danger', duration: 3000 });
    return false;
  }

  if (currentPanelists.some((p) => p.id === participant.id)) {
    showAlert?.({ message: `${participant.name} is already a panelist`, type: 'success', duration: 3000 });
    return false;
  }

  if (currentPanelists.length >= maxPanelists) {
    showAlert?.({ message: `Maximum panelist limit (${maxPanelists}) reached`, type: 'danger', duration: 3000 });
    return false;
  }

  return new Promise((resolve) => {
    socket.emit(
      'addPanelist',
      {
        participantId: participant.id,
        participantName: participant.name,
        roomName,
      },
      (response: { success: boolean; reason?: string }) => {
        if (!response?.success) {
          showAlert?.({ message: response?.reason || 'Failed to add panelist', type: 'danger', duration: 3000 });
          resolve(false);
        } else {
          resolve(true);
        }
      }
    );
  });
};

export const removePanelist = async ({
  socket,
  participant,
  roomName,
  member: _member,
  islevel,
  showAlert,
}: RemovePanelistOptions): Promise<void> => {
  if (islevel !== '2') {
    showAlert?.({ message: 'Only the host can remove panelists', type: 'danger', duration: 3000 });
    return;
  }

  socket.emit(
    'removePanelist',
    {
      participantId: participant.id,
      participantName: participant.name,
      roomName,
    },
    (response: { success: boolean; reason?: string }) => {
      if (!response?.success) {
        showAlert?.({ message: response?.reason || 'Failed to remove panelist', type: 'danger', duration: 3000 });
      }
    }
  );
};
