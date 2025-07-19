/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  base: '/lab-design-system/',

  test: {
    name: 'unit-tests',
    browser: {
      enabled: true,
      headless: true,
      provider: 'playwright',
      name: 'chromium',
      
    },
    setupFiles: ['.storybook/vitest.setup.ts'],
  },
});