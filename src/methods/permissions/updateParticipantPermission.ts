import { Socket } from 'socket.io-client';
import type { Participant, ShowAlert } from '../../types/types';

export type PermissionLevel = '0' | '1' | '2';

export interface UpdateParticipantPermissionOptions {
  socket: Socket;
  participant: Participant;
  newLevel: PermissionLevel;
  member: string;
  islevel: string;
  roomName: string;
  showAlert?: ShowAlert;
}

export interface BulkUpdateParticipantPermissionsOptions {
  socket: Socket;
  participants: Participant[];
  newLevel: PermissionLevel;
  member: string;
  islevel: string;
  roomName: string;
  showAlert?: ShowAlert;
  maxBatchSize?: number;
}

export const updateParticipantPermission = async ({
  socket,
  participant,
  newLevel,
  member: _member,
  islevel,
  roomName,
  showAlert,
}: UpdateParticipantPermissionOptions): Promise<void> => {
  if (islevel !== '2') {
    showAlert?.({ message: 'Only the host can update participant permissions', type: 'danger', duration: 3000 });
    return;
  }

  if (participant.islevel === '2') {
    showAlert?.({ message: "Cannot change the host's permission level", type: 'danger', duration: 3000 });
    return;
  }

  if (participant.islevel === newLevel) return;

  return new Promise<void>((resolve) => {
    socket.emit(
      'updateParticipantPermission',
      {
        participantId: participant.id,
        participantName: participant.name,
        newLevel,
        roomName,
      },
      (response: { success: boolean; reason?: string }) => {
        if (!response?.success) {
          showAlert?.({ message: response?.reason || 'Failed to update permission', type: 'danger', duration: 3000 });
        }
        resolve();
      }
    );
  });
};

export const bulkUpdateParticipantPermissions = async ({
  socket,
  participants,
  newLevel,
  member: _member,
  islevel,
  roomName,
  showAlert,
  maxBatchSize = 50,
}: BulkUpdateParticipantPermissionsOptions): Promise<void> => {
  if (islevel !== '2') {
    showAlert?.({ message: 'Only the host can update participant permissions', type: 'danger', duration: 3000 });
    return;
  }

  const eligibleParticipants = participants.filter(
    (p) => p.islevel !== '2' && p.islevel !== newLevel
  );

  if (eligibleParticipants.length === 0) {
    showAlert?.({
      message: 'No participants to update',
      type: 'info',
      duration: 3000,
    });
    return;
  }

  const batch = eligibleParticipants.slice(0, maxBatchSize);

  return new Promise<void>((resolve) => {
    socket.emit(
      'bulkUpdateParticipantPermissions',
      {
        updates: batch.map((p) => ({
          participantId: p.id,
          participantName: p.name,
          newLevel,
        })),
        roomName,
      },
      (response: { success: boolean; reason?: string }) => {
        if (!response?.success) {
          showAlert?.({
            message: response?.reason || 'Failed to update permissions',
            type: 'danger',
            duration: 3000,
          });
        } else if (eligibleParticipants.length > maxBatchSize) {
          showAlert?.({
            message: `Updated ${batch.length} participants. ${eligibleParticipants.length - maxBatchSize} remaining.`,
            type: 'info',
            duration: 3000,
          });
        }

        resolve();
      }
    );
  });
};
