import type { ShowAlert } from '../../types/types';

export interface ClickChatOptions {
  isMessagesModalVisible: boolean;
  updateIsMessagesModalVisible: (isVisible: boolean) => void;
  chatSetting: string;
  islevel: string;
  showAlert?: ShowAlert;
}

export type ClickChatType = (options: ClickChatOptions) => Promise<void>;

export const clickChat = async ({
  isMessagesModalVisible,
  updateIsMessagesModalVisible,
  chatSetting,
  islevel,
  showAlert,
}: ClickChatOptions): Promise<void> => {
  if (isMessagesModalVisible) {
    updateIsMessagesModalVisible(false);
    return;
  }

  if (chatSetting !== 'allow' && islevel !== '2') {
    updateIsMessagesModalVisible(false);
    showAlert?.({
      message: 'Chat is disabled for this event.',
      type: 'danger',
      duration: 3000,
    });
    return;
  }

  updateIsMessagesModalVisible(true);
};
