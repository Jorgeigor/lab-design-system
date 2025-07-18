import type { Preview } from '@storybook/react';
import '../src/styles/global.css';
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
        themes: {
          default: 'light',
          list: [
            { name: 'light', class: 'light', color: '#ffffff' },
            { name: 'dark', class: 'dark', color: '#000000' },
          ],
        },
      },
    },
  },
};

export default preview;
