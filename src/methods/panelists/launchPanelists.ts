export interface LaunchPanelistsOptions {
  updateIsPanelistsModalVisible: (visible: boolean) => void;
  isPanelistsModalVisible: boolean;
}

export type LaunchPanelistsType = (options: LaunchPanelistsOptions) => void;

export const launchPanelists = ({
  updateIsPanelistsModalVisible,
  isPanelistsModalVisible,
}: LaunchPanelistsOptions): void => {
  updateIsPanelistsModalVisible(!isPanelistsModalVisible);
};
