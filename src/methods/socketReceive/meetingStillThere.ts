export interface MeetingStillThereOptions {
  updateIsConfirmHereModalVisible: (isVisible: boolean) => void;
}

export type MeetingStillThereType = (
  options: MeetingStillThereOptions,
) => Promise<void>;

/**
 * Shows the "still there" confirmation modal.
 *
 * @param {MeetingStillThereOptions} options - Visibility setter for the confirmation modal.
 * @returns {Promise<void>} Resolves after the modal is shown.
 *
 * @example
 * ```typescript
 * await meetingStillThere({
 *   updateIsConfirmHereModalVisible: setIsConfirmHereModalVisible,
 * });
 * ```
 */
export const meetingStillThere = async ({
  updateIsConfirmHereModalVisible,
}: MeetingStillThereOptions): Promise<void> => {
  updateIsConfirmHereModalVisible(true);
};
