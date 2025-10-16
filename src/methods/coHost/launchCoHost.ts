export interface LaunchCoHostOptions {
  updateIsCoHostModalVisible: (isVisible: boolean) => void
  isCoHostModalVisible: boolean
}

export type LaunchCoHostType = (options: LaunchCoHostOptions) => void

/**
 * Toggles the visibility of the co-host modal.
 *
 * @param {LaunchCoHostOptions} options - The options object.
 * @param {Function} options.updateIsCoHostModalVisible - Function to update the visibility state of the co-host modal.
 * @param {boolean} options.isCoHostModalVisible - Current visibility state of the co-host modal.
 *
 * @example
 * ```typescript
 * const options: LaunchCoHostOptions = {
 *   updateIsCoHostModalVisible: setModalVisible,
 *   isCoHostModalVisible: false,
 * }
 *
 * launchCoHost(options)
 * // Toggles the co-host modal to visible.
 * ```
 */
export const launchCoHost: LaunchCoHostType = ({ updateIsCoHostModalVisible, isCoHostModalVisible }) => {
  updateIsCoHostModalVisible(!isCoHostModalVisible)
}
