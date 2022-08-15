const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.@(mdx|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config, { configType }) {
    return {
      ...config,
    };
  },
};
