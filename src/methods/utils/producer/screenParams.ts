import type { ScreenParamsType } from '../../../types/types';

export const screenParams: ScreenParamsType = {
  encodings: [
    {
      rid: 'r7',
      maxBitrate: 3000000,
    },
  ],
  codecOptions: {
    videoGoogleStartBitrate: 1000,
  },
};