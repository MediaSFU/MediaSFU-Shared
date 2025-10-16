export interface LaunchMessagesOptions {
  updateIsMessagesModalVisible: (visible: boolean) => void
  isMessagesModalVisible: boolean
}

export type LaunchMessagesType = (options: LaunchMessagesOptions) => void

/**
 * Toggles the visibility state of the messages modal.
 *
 * @param {LaunchMessagesOptions} options - The options object.
 * @param {Function} options.updateIsMessagesModalVisible - Function to update the visibility state of the messages modal.
 * @param {boolean} options.isMessagesModalVisible - Current visibility state of the messages modal.
 *
 * @example
 * ```typescript
 * const options: LaunchMessagesOptions = {
 *   updateIsMessagesModalVisible: setModalVisibilityFunction,
 *   isMessagesModalVisible: false,
 * }
 *
 * launchMessages(options)
 * ```
 */
export const launchMessages: LaunchMessagesType = ({ updateIsMessagesModalVisible, isMessagesModalVisible }) => {
  updateIsMessagesModalVisible(!isMessagesModalVisible)
}
