const path = require('path');

module.exports = {
  stories: ['../stories/*.stories.[tj]s'],
  addons: [
    'storybook-dark-mode',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      vue: 'vue/dist/vue.esm-bundler.js',
      '@': path.resolve(__dirname, '../src'),
    };
    return config;
  },
};
