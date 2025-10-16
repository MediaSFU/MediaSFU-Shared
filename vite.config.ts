import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MediaSFUShared',
      formats: ['es', 'cjs'],
      fileName: (format) => {
        const ext = format === 'es' ? 'js' : 'cjs';
        return `index.${ext}`;
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
