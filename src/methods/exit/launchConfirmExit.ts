export interface LaunchConfirmExitOptions {
  updateIsConfirmExitModalVisible: (isVisible: boolean) => void
  isConfirmExitModalVisible: boolean
}

export type LaunchConfirmExitType = (options: LaunchConfirmExitOptions) => void

/**
 * Toggles the visibility of the confirmation exit modal.
 *
 * @param {LaunchConfirmExitOptions} options - The options for launching the confirmation exit modal.
 * @param {Function} options.updateIsConfirmExitModalVisible - Function to update the visibility state of the confirmation exit modal.
 * @param {boolean} options.isConfirmExitModalVisible - Current visibility state of the confirmation exit modal.
 *
 * @example
 * ```typescript
 * const options = {
 *   updateIsConfirmExitModalVisible: setIsConfirmExitModalVisible,
 *   isConfirmExitModalVisible: false,
 * }
 * launchConfirmExit(options)
 * ```
 */
export const launchConfirmExit: LaunchConfirmExitType = ({
  updateIsConfirmExitModalVisible,
  isConfirmExitModalVisible,
}) => {
  updateIsConfirmExitModalVisible(!isConfirmExitModalVisible)
}
