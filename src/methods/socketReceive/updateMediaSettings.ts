import type { Settings } from '../../types/types';

export interface UpdateMediaSettingsOptions {
  settings: Settings;
  updateAudioSetting: (value: string) => void;
  updateVideoSetting: (value: string) => void;
  updateScreenshareSetting: (value: string) => void;
  updateChatSetting: (value: string) => void;
}

export type UpdateMediaSettingsType = (
  options: UpdateMediaSettingsOptions,
) => void;

/**
 * Expands the shared `Settings` tuple into individual media setting updaters.
 *
 * @param {UpdateMediaSettingsOptions} options - Settings tuple and update callbacks.
 * @returns {void} Updates state synchronously.
 *
 * @example
 * ```typescript
 * updateMediaSettings({
 *   settings: ['allow', 'allow', 'deny', 'allow'],
 *   updateAudioSetting: setAudioSetting,
 *   updateVideoSetting: setVideoSetting,
 *   updateScreenshareSetting: setScreenshareSetting,
 *   updateChatSetting: setChatSetting,
 * });
 * ```
 */
export const updateMediaSettings = ({
  settings,
  updateAudioSetting,
  updateVideoSetting,
  updateScreenshareSetting,
  updateChatSetting,
}: UpdateMediaSettingsOptions): void => {
  const [audioSetting, videoSetting, screenshareSetting, chatSetting] = settings;

  updateAudioSetting(audioSetting);
  updateVideoSetting(videoSetting);
  updateScreenshareSetting(screenshareSetting);
  updateChatSetting(chatSetting);
};
