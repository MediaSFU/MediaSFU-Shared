export interface LaunchDisplaySettingsOptions {
  updateIsDisplaySettingsModalVisible: (isVisible: boolean) => void
  isDisplaySettingsModalVisible: boolean
}

export type LaunchDisplaySettingsType = (options: LaunchDisplaySettingsOptions) => void

/**
 * Toggles the visibility of the display settings modal.
 *
 * @param {LaunchDisplaySettingsOptions} options - The options object.
 * @param {Function} options.updateIsDisplaySettingsModalVisible - Function to update the visibility state of the display settings modal.
 * @param {boolean} options.isDisplaySettingsModalVisible - Current visibility state of the display settings modal.
 *
 * @example
 * ```typescript
 * const options: LaunchDisplaySettingsOptions = {
 *   updateIsDisplaySettingsModalVisible: setModalVisibilityFunction,
 *   isDisplaySettingsModalVisible: false,
 * }
 *
 * launchDisplaySettings(options)
 * // This will open the display settings modal if it's currently closed, or close it if it's open.
 * ```
 */
export const launchDisplaySettings: LaunchDisplaySettingsType = ({
  updateIsDisplaySettingsModalVisible,
  isDisplaySettingsModalVisible,
}) => {
  updateIsDisplaySettingsModalVisible(!isDisplaySettingsModalVisible)
}
