import type { EventType, Message, Participant } from '../../types/types';

export interface ReceiveMessageOptions {
  message: Message;
  messages: Message[];
  participantsAll: Participant[];
  member: string;
  eventType: EventType;
  islevel: string;
  coHost: string;
  updateMessages: (messages: Message[]) => void;
  updateShowMessagesBadge: (showBadge: boolean) => void;
}

export type ReceiveMessageType = (options: ReceiveMessageOptions) => Promise<void>;

/**
 * Appends an inbound chat message, filters banned senders, and updates unread badge state.
 *
 * @param {ReceiveMessageOptions} options - Message payload, participant state, and update callbacks.
 * @returns {Promise<void>} Resolves after message state is reconciled.
 *
 * @example
 * ```typescript
 * await receiveMessage({
 *   message,
 *   messages,
 *   participantsAll,
 *   member: 'Ada',
 *   eventType: 'conference',
 *   islevel: '1',
 *   coHost: '',
 *   updateMessages: setMessages,
 *   updateShowMessagesBadge: setShowMessagesBadge,
 * });
 * ```
 */
export const receiveMessage = async ({
  message,
  messages,
  participantsAll,
  member,
  eventType,
  islevel,
  coHost,
  updateMessages,
  updateShowMessagesBadge,
}: ReceiveMessageOptions): Promise<void> => {
  const { sender, receivers, message: content, timestamp, group } = message;
  const oldMessages = messages;
  messages = [...messages, { sender, receivers, message: content, timestamp, group }];

  if (eventType !== 'broadcast' && eventType !== 'chat') {
    messages = messages.filter((msg) =>
      participantsAll.some(
        (participant) => participant.name === msg.sender && !participant.isBanned,
      ),
    );
  } else {
    messages = messages.filter((msg) => {
      const participant = participantsAll.find((p) => p.name === msg.sender);
      return !participant || !participant.isBanned;
    });
  }

  updateMessages(messages);

  const oldGroupMessages = oldMessages.filter((msg) => msg.group);
  const oldDirectMessages = oldMessages.filter((msg) => !msg.group);
  const groupMessages = messages.filter((msg) => msg.group);
  const directMessages = messages.filter((msg) => !msg.group);

  if (eventType !== 'broadcast' && eventType !== 'chat') {
    if (oldGroupMessages.length !== groupMessages.length) {
      const newGroupMessages = groupMessages.filter(
        (msg) => !oldGroupMessages.some((oldMsg) => oldMsg.timestamp === msg.timestamp),
      );
      const relevantGroupMessages = newGroupMessages.filter(
        (msg) => msg.sender === member || msg.receivers.includes(member),
      );
      const selfSentGroupMessages = relevantGroupMessages.filter(
        (msg) => msg.sender === member,
      );

      if (
        newGroupMessages.length > 0 &&
        relevantGroupMessages.length > selfSentGroupMessages.length
      ) {
        updateShowMessagesBadge(true);
      }
    }

    if (oldDirectMessages.length !== directMessages.length) {
      const newDirectMessages = directMessages.filter(
        (msg) => !oldDirectMessages.some((oldMsg) => oldMsg.timestamp === msg.timestamp),
      );
      const relevantDirectMessages = newDirectMessages.filter(
        (msg) => msg.sender === member || msg.receivers.includes(member),
      );
      const selfSentDirectMessages = relevantDirectMessages.filter(
        (msg) => msg.sender === member,
      );

      const isPrivileged = islevel === '2' || coHost === member;
      const hasRelevantDirectMessages = isPrivileged
        ? newDirectMessages.length > 0
        : relevantDirectMessages.length > 0;

      if (
        hasRelevantDirectMessages &&
        newDirectMessages.length > selfSentDirectMessages.length
      ) {
        updateShowMessagesBadge(true);
      }
    }
  }
};
