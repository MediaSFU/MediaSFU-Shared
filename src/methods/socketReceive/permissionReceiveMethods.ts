import type { ShowAlert } from '../../types/types';
import type {
  PermissionConfig,
} from '../permissions/updatePermissionConfig';

export interface PermissionUpdatedData {
  newLevel: string;
  message?: string;
}

export interface PermissionConfigUpdatedData {
  config: PermissionConfig;
}

export interface PermissionUpdatedOptions {
  data: PermissionUpdatedData;
  showAlert?: ShowAlert;
  updateIslevel?: (level: string) => void;
}

export interface PermissionConfigUpdatedOptions {
  data: PermissionConfigUpdatedData;
  updatePermissionConfig?: (config: PermissionConfig) => void;
}

export type PermissionUpdatedType = (options: PermissionUpdatedOptions) => Promise<void>;
export type PermissionConfigUpdatedType = (options: PermissionConfigUpdatedOptions) => Promise<void>;

export const permissionUpdated: PermissionUpdatedType = async ({
  data,
  showAlert,
  updateIslevel,
}: PermissionUpdatedOptions): Promise<void> => {
  try {
    const { newLevel, message } = data;
    updateIslevel?.(newLevel);

    if (showAlert && message) {
      showAlert({
        message,
        type: newLevel === '1' ? 'success' : 'info',
        duration: 3000,
      });
    }
  } catch (error) {
    console.error('Error handling permissionUpdated:', error);
  }
};

export const permissionConfigUpdated: PermissionConfigUpdatedType = async ({
  data,
  updatePermissionConfig,
}: PermissionConfigUpdatedOptions): Promise<void> => {
  try {
    updatePermissionConfig?.(data.config);
  } catch (error) {
    console.error('Error handling permissionConfigUpdated:', error);
  }
};