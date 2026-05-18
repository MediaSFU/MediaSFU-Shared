export interface SoundPlayerOptions {
  soundUrl: string;
}

export type SoundPlayerType = (options: SoundPlayerOptions) => void | Promise<void>;

/**
 * Attempts to play a remote sound asset when the runtime supports browser audio playback.
 *
 * @param {SoundPlayerOptions} options - The sound asset URL to play.
 * @returns {void | Promise<void>} Completes after playback attempt starts/completes or is skipped.
 *
 * @example
 * ```typescript
 * await SoundPlayer({
 *   soundUrl: 'https://www.mediasfu.com/sounds/record-progress.mp3',
 * });
 * ```
 */
export const SoundPlayer = async ({ soundUrl }: SoundPlayerOptions): Promise<void> => {
  if (!soundUrl || typeof Audio === 'undefined') {
    return;
  }

  try {
    const audio = new Audio(soundUrl);
    await audio.play();
  } catch (error) {
    console.error('Error playing sound:', error);
  }
};