export interface SleepOptions {
  ms: number;
}

export type SleepType = (options: SleepOptions) => Promise<void>;

/**
 * Delays execution for a specified number of milliseconds.
 *
 * This helper is used throughout MediaSFU to wait for short transport or media
 * lifecycle transitions before continuing work.
 *
 * @param options Delay configuration.
 * @returns A promise that resolves after the requested delay.
 *
 * @example
 * ```typescript
 * await sleep({ ms: 500 });
 * // Continue after a half-second pause.
 * ```
 */
export function sleep({ ms }: SleepOptions): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}