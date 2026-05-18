export interface LaunchPermissionsOptions {
  updateIsPermissionsModalVisible: (visible: boolean) => void;
  isPermissionsModalVisible: boolean;
}

export type LaunchPermissionsType = (options: LaunchPermissionsOptions) => void;

export const launchPermissions = ({
  updateIsPermissionsModalVisible,
  isPermissionsModalVisible,
}: LaunchPermissionsOptions): void => {
  updateIsPermissionsModalVisible(!isPermissionsModalVisible);
};
