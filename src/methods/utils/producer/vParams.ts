import type { VParamsType } from '../../../types/types';

export const vParams: VParamsType = {
  encodings: [
    {
      rid: 'r3',
      maxBitrate: 200000,
      scalabilityMode: 'L1T3',
      scaleResolutionDownBy: 4.0,
    },
    {
      rid: 'r4',
      maxBitrate: 400000,
      scalabilityMode: 'L1T3',
      scaleResolutionDownBy: 2.0,
    },
    {
      rid: 'r5',
      maxBitrate: 800000,
      scalabilityMode: 'L1T3',
    },
  ],
  codecOptions: {
    videoGoogleStartBitrate: 320,
  },
};