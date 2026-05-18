import type { OverlayPositionStyle } from '../../types/types';

export interface GetOverlayPositionOptions {
  position: string;
}

export type GetOverlayPositionType = (options: GetOverlayPositionOptions) => OverlayPositionStyle;

/**
 * Maps a symbolic overlay position to CSS-style edge coordinates.
 *
 * This is used by display card components to anchor badges, audio indicators,
 * or auxiliary overlays to a participant tile corner.
 *
 * @param options Overlay position options.
 * @returns A partial coordinate object suitable for inline style application.
 *
 * @example
 * ```typescript
 * const style = getOverlayPosition({ position: 'bottomRight' });
 * // style === { bottom: 0, right: 0 }
 * ```
 */
export const getOverlayPosition = ({ position }: GetOverlayPositionOptions): OverlayPositionStyle => {
  switch (position) {
    case 'topLeft':
      return { top: 0, left: 0 };
    case 'topRight':
      return { top: 0, right: 0 };
    case 'bottomLeft':
      return { bottom: 0, left: 0 };
    case 'bottomRight':
      return { bottom: 0, right: 0 };
    default:
      return {};
  }
};