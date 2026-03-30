import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vite-plus';

export default defineConfig({
  plugins: [vue()],
  build: {
    target: 'esnext',
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['vue', 'tweakpane', '@tweakpane/plugin-essentials'],
      output: {
        exports: 'named',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'index.css';
          return assetInfo.name || 'index.css';
        },
      },
    },
  },
  fmt: {
    printWidth: 80,
    semi: true,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'all',
    bracketSpacing: true,
    arrowParens: 'always',
    endOfLine: 'lf',
    vueIndentScriptAndStyle: true,
    ignorePatterns: [
      '.nuxt',
      '.output',
      'dist',
      'node_modules',
      '.wrangler',
      'coverage',
      '*.min.js',
      '*.min.css',
      'bun.lock',
      '**/CHANGELOG.md',
      '**/jsr.json',
    ],
  },
});
