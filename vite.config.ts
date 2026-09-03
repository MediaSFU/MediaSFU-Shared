import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

/**
 * Two entries, not one.
 *
 * `src/index.native.ts` existed for a long time but was never built, so React
 * Native and Expo — which import bare 'mediasfu-shared' — silently received the
 * web build. It is now a real entry, routed to by the "react-native" field and
 * export condition in package.json.
 *
 * The difference that matters today: the web entry exports `virtualBackground`,
 * whose pipeline needs an offscreen canvas and `captureStream()`. The native
 * entry omits it.
 */
export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      // rollupTypes bundles every declaration into one file, which cannot
      // represent two entries with different surfaces.
      rollupTypes: false,
    }),
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        'index.native': resolve(__dirname, 'src/index.native.ts'),
        'consumers/index': resolve(__dirname, 'src/consumers/index.ts'),
        'methods/index': resolve(__dirname, 'src/methods/index.ts'),
        'types/index': resolve(__dirname, 'src/types/index.ts'),
        'consumers/index': resolve(__dirname, 'src/consumers/index.ts'),
        'methods/index': resolve(__dirname, 'src/methods/index.ts'),
        'types/index': resolve(__dirname, 'src/types/index.ts'),
      },
      name: 'MediaSFUShared',
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        const ext = format === 'es' ? 'js' : 'cjs';
        return `${entryName}.${ext}`;
      },
    },
    rollupOptions: {
      external: ['socket.io-client', 'mediasoup-client'],
      output: {
        globals: {
          'socket.io-client': 'io',
          'mediasoup-client': 'mediasoupClient',
        },
      },
    },
    sourcemap: true,
    minify: false,
  },
});
