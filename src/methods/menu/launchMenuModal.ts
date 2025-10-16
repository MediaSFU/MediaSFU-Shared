export interface LaunchMenuModalOptions {
  updateIsMenuModalVisible: (isVisible: boolean) => void
  isMenuModalVisible: boolean
}

export type LaunchMenuModalType = (options: LaunchMenuModalOptions) => void

/**
 * Toggles the visibility of the menu modal.
 *
 * @param {LaunchMenuModalOptions} options - The options for launching the menu modal.
 * @param {Function} options.updateIsMenuModalVisible - Function to update the visibility state of the menu modal.
 * @param {boolean} options.isMenuModalVisible - Current visibility state of the menu modal.
 *
 * @example
 * ```typescript
 * launchMenuModal({
 *   updateIsMenuModalVisible: (isVisible) => console.log("Menu modal visibility:", isVisible),
 *   isMenuModalVisible: false,
 * });
 * ```
 */
export const launchMenuModal: LaunchMenuModalType = ({
  updateIsMenuModalVisible,
  isMenuModalVisible,
}) => {
  updateIsMenuModalVisible(!isMenuModalVisible)
}
