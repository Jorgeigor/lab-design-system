/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
var dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));
export default defineConfig({
    plugins: [react()],
    test: {
        name: 'unit-tests',
        browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [
                {
                    browser: 'chromium',
                },
            ],
        },
        setupFiles: ['.storybook/vitest.setup.ts'],
    },
});
