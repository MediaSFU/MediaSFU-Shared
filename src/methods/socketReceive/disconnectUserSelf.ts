export interface DisconnectUserSelfSocketLike {
  id?: string;
  emit: (event: string, ...args: any[]) => void;
}

export interface DisconnectUserSelfOptions {
  member: string;
  roomName: string;
  socket: DisconnectUserSelfSocketLike;
  localSocket?: DisconnectUserSelfSocketLike;
}

export type DisconnectUserSelfType = (
  options: DisconnectUserSelfOptions,
) => Promise<void>;

/**
 * Emits a self-disconnect request, including the optional mirrored local socket.
 *
 * @param {DisconnectUserSelfOptions} options - Socket targets and participant identity.
 * @returns {Promise<void>} Resolves after the disconnect events are emitted.
 *
 * @example
 * ```typescript
 * await disconnectUserSelf({
 *   member: 'user123',
 *   roomName: 'main-room',
 *   socket,
 *   localSocket,
 * });
 * ```
 */
export async function disconnectUserSelf({
  member,
  roomName,
  socket,
  localSocket,
}: DisconnectUserSelfOptions): Promise<void> {
  socket.emit('disconnectUser', {
    member,
    roomName,
    ban: true,
  });

  try {
    if (localSocket?.id) {
      localSocket.emit('disconnectUser', {
        member,
        roomName,
        ban: true,
      });
    }
  } catch {
    // no-op
  }
}
