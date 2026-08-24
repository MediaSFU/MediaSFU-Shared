import assert from 'node:assert/strict';
import test from 'node:test';

import { selectVideoProducerCodec } from '../dist/index.js';

const capabilities = {
  codecs: [
    { kind: 'audio', mimeType: 'audio/opus', clockRate: 48000 },
    { kind: 'video', mimeType: 'video/VP9', clockRate: 90000 },
    { kind: 'video', mimeType: 'video/rtx', clockRate: 90000 },
    { kind: 'video', mimeType: 'video/VP8', clockRate: 90000 },
  ],
};

test('native camera production leaves codec choice to the mediasoup handler', () => {
  assert.equal(
    selectVideoProducerCodec({
      device: { rtpCapabilities: capabilities },
      useNativeCodecSelection: true,
    }),
    undefined,
  );
});

test('web codec preference skips VP9 and auxiliary codecs', () => {
  assert.equal(
    selectVideoProducerCodec({
      device: { rtpCapabilities: capabilities },
    })?.mimeType,
    'video/VP8',
  );
});
