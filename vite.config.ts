/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from "vite-plugin-svgr";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
        svgr(),
        visualizer() as PluginOption
    ],
    test: {
        globals: true,
        css: true,
        environment: 'jsdom',
        setupFiles: './config/test/setupTest.ts',
    }
})
