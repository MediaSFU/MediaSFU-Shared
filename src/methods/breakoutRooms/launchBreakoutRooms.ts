export interface LaunchBreakoutRoomsOptions {
  updateIsBreakoutRoomsModalVisible: (isVisible: boolean) => void
  isBreakoutRoomsModalVisible: boolean
}

export type LaunchBreakoutRoomsType = (options: LaunchBreakoutRoomsOptions) => void

/**
 * Launches the breakout rooms by toggling the visibility of the breakout rooms modal.
 *
 * @param {LaunchBreakoutRoomsOptions} options - The options object.
 * @param {Function} options.updateIsBreakoutRoomsModalVisible - Function to update the visibility state of the breakout rooms modal.
 * @param {boolean} options.isBreakoutRoomsModalVisible - Current visibility state of the breakout rooms modal.
 *
 * @example
 * ```typescript
 * const options: LaunchBreakoutRoomsOptions = {
 *   updateIsBreakoutRoomsModalVisible: setModalVisible,
 *   isBreakoutRoomsModalVisible: false,
 * }
 *
 * launchBreakoutRooms(options)
 * // Toggles the breakout rooms modal to visible.
 * ```
 */
export const launchBreakoutRooms: LaunchBreakoutRoomsType = ({
  updateIsBreakoutRoomsModalVisible,
  isBreakoutRoomsModalVisible,
}) => {
  updateIsBreakoutRoomsModalVisible(!isBreakoutRoomsModalVisible)
}
