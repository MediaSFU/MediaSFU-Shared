import { Socket } from "socket.io-client";
import type {
  CoHostResponsibility,
  EventType,
  Message,
  ShowAlert,
} from "../../types/types";

export interface SendMessageOptions {
  message: string;
  receivers: string[];
  group: boolean;
  messagesLength: number;
  member: string;
  sender: string;
  islevel: string;
  eventType?: EventType;
  showAlert?: ShowAlert;
  coHostResponsibility: CoHostResponsibility[];
  coHost: string;
  roomName: string;
  socket: Socket;
  chatSetting: string;
}

// Export the type
export type SendMessageType = (options: SendMessageOptions) => Promise<void>;

/**
 * Sends a message to the server.
 *
 * @param {SendMessageOptions} options - The options for sending a message.
 * @param {string} options.message - The message content to be sent.
 * @param {string[]} options.receivers - The list of receivers for the message.
 * @param {boolean} options.group - Indicates if the message is for a group.
 * @param {number} options.messagesLength - The current number of messages.
 * @param {string} options.member - The member sending the message.
 * @param {string} options.sender - The sender of the message.
 * @param {string} options.islevel - The level of the sender (e.g., "2" for admin).
 * @param {EventType} [options.eventType] - The type of event (e.g., "broadcast", "chat", "conference").
 * @param {ShowAlert} [options.showAlert] - Function to show alerts to the user.
 * @param {CoHostResponsibility[]} options.coHostResponsibility - Array of co-host responsibilities.
 * @param {string} options.coHost - The co-host member name.
 * @param {string} options.roomName - The name of the room.
 * @param {Socket} options.socket - The socket instance for communication.
 * @param {string} options.chatSetting - The chat setting for the event room.
 * @returns {Promise<void>} A promise that resolves when the message is sent.
 *
 * @throws Will show an alert if the message count exceeds the limit, if the message is invalid, or if the user is not allowed to send a message.
 *
 * @example
 * ```typescript
 * await sendMessage({
 *   message: "Hello, World!",
 *   receivers: ["user1", "user2"],
 *   group: true,
 *   messagesLength: 50,
 *   member: "user3",
 *   sender: "user3",
 *   islevel: "2",
 *   eventType: "chat",
 *   showAlert: ({ message, type }) => console.log(message, type),
 *   coHostResponsibility: [{ name: "chat", value: true }],
 *   coHost: "coHostUser",
 *   roomName: "mainRoom",
 *   socket: socketInstance,
 *   chatSetting: "allow",
 * });
 * ```
 */

export const sendMessage = async ({
  message,
  receivers,
  group,
  messagesLength,
  member,
  sender,
  islevel,
  eventType,
  showAlert,
  coHostResponsibility,
  coHost,
  roomName,
  socket,
  chatSetting,
}: SendMessageOptions): Promise<void> => {
  let chatValue = false;

  // Check if messages count exceeds the limit
  if (eventType === "broadcast") {
    if (messagesLength >= 100) {
      showAlert?.({
        message: "You have reached the maximum number of messages",
        type: "danger",
        duration: 3000,
      });
      return;
    }
  } else if (eventType === "chat") {
    if (messagesLength >= 500) {
      showAlert?.({
        message: "You have reached the maximum number of messages",
        type: "danger",
        duration: 3000,
      });
      return;
    }
  } else {
    if (messagesLength >= 100000) {
      showAlert?.({
        message: "You have reached the maximum number of messages",
        type: "danger",
        duration: 3000,
      });
      return;
    }
  }

  // Check if message is valid
  if (!message || message === "") {
    showAlert?.({
      message: "Message is not valid.",
      type: "danger",
      duration: 3000,
    });
    return;
  }

  // Check if receivers is valid
  if (receivers.length < 1 && group === false) {
    showAlert?.({
      message: "Please select a message to reply to",
      type: "danger",
      duration: 3000,
    });
    return;
  }

  // Create message object
  const messageObject: Message = {
    sender: sender ? sender : member,
    receivers: receivers,
    message: message,
    timestamp: new Date().toLocaleTimeString(),
    group: group !== undefined && group !== null ? group : false,
  };

  try {
    // Check co-host responsibility for chat
    chatValue = coHostResponsibility.find((item) => item.name === "chat")?.value ?? false;
  } catch (error) {
    console.error(error);
  }

  if (islevel === "2" || (coHost === member && chatValue === true)) {
    // Allow sending message
  } else {
    // Check if user is allowed to send a message in the event room
    if (!chatSetting) {
      showAlert?.({
        message: "You are not allowed to send a message in this event room",
        type: "danger",
        duration: 3000,
      });
      return;
    }
  }

  // Send the message to the server
  socket.emit("sendMessage", {
    messageObject: messageObject,
    roomName: roomName,
  });
};
