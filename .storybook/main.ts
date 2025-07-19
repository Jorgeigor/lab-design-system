import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite'; 

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "@storybook/addon-themes",
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },

  async viteFinal(config, { configType }) { 
    return mergeConfig(config, {
      base: '/lab-design-system/storybook/', 
    });
  },
};
export default config;