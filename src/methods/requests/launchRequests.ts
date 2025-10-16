export interface LaunchRequestsOptions {
  updateIsRequestsModalVisible: (isVisible: boolean) => void
  isRequestsModalVisible: boolean
}

export type LaunchRequestsType = (options: LaunchRequestsOptions) => void

/**
 * Toggles the visibility state of the requests modal.
 *
 * @param {LaunchRequestsOptions} options - The options for launching requests.
 * @param {Function} options.updateIsRequestsModalVisible - Function to update the visibility state of the requests modal.
 * @param {boolean} options.isRequestsModalVisible - Current visibility state of the requests modal.
 *
 * @example
 * ```typescript
 * launchRequests({
 *   updateIsRequestsModalVisible: setRequestsModalVisible,
 *   isRequestsModalVisible: true,
 * })
 * ```
 */
export const launchRequests: LaunchRequestsType = ({ updateIsRequestsModalVisible, isRequestsModalVisible }) => {
  updateIsRequestsModalVisible(!isRequestsModalVisible)
}
