import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vue()],
  build: {
    target: 'esnext',
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'v-tweakpane',
    },
    rollupOptions: {
      external: ['vue', 'tweakpane', '@tweakpane/plugin-essentials'],
      output: {
        exports: 'named',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'v-tweakpane.css';
          return assetInfo.name;
        },
      },
    },
  },
});
