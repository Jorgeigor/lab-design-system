// .storybook/main.ts
import type { StorybookConfig } from '@storybook/react-vite';

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

 
  managerHead: (head) => `
    ${head}
    <base href="/lab-design-system/storybook/">
  `,
};

export default config;