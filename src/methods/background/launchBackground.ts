export interface LaunchBackgroundOptions {
  updateIsBackgroundModalVisible: (isVisible: boolean) => void
  isBackgroundModalVisible: boolean
}

export type LaunchBackgroundType = (options: LaunchBackgroundOptions) => void

/**
 * Toggles the visibility of the background modal.
 */
export const launchBackground: LaunchBackgroundType = ({
  updateIsBackgroundModalVisible,
  isBackgroundModalVisible,
}: LaunchBackgroundOptions): void => {
  updateIsBackgroundModalVisible(!isBackgroundModalVisible)
}
