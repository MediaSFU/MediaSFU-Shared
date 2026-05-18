export interface FormatNumberOptions {
  number: number;
}

export type FormatNumberType = (options: FormatNumberOptions) => Promise<string | undefined>;

/**
 * Formats large numbers into compact display strings.
 *
 * Values are converted to `K`, `M`, or `B` suffixes for UI-friendly display.
 * Falsy values return `undefined` to match existing MediaSFU display behavior.
 *
 * @param options Number formatting options.
 * @returns A compact string such as `1.2K` or `3.4M`, or `undefined` for empty input.
 *
 * @example
 * ```typescript
 * const viewers = await formatNumber({ number: 1530 });
 * // viewers === '1.5K'
 * ```
 */
export const formatNumber = async ({ number }: FormatNumberOptions): Promise<string | undefined> => {
  if (number) {
    if (number < 1e3) {
      return number.toString();
    }

    if (number < 1e6) {
      return `${(number / 1e3).toFixed(1)}K`;
    }

    if (number < 1e9) {
      return `${(number / 1e6).toFixed(1)}M`;
    }

    if (number < 1e12) {
      return `${(number / 1e9).toFixed(1)}B`;
    }
  }

  return undefined;
};