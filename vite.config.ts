import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import { configDefaults } from 'vitest/config';

const configuration = defineConfig(({ mode }) => {
	// load env file based on `mode` in the current working directory.
	// set the third parameter to '' to load all env regardless of the `VITE_` prefix.
	const env = loadEnv(mode, process.cwd());

	return {
		plugins: [react()],
		server: { port: +env.VITE_PORT, open: false },
		preview: { port: +env.VITE_PORT_PREVIEW, open: false },
		build: { sourcemap: false },
		clearScreen: true,
		test: {
			globals: true,
			environment: 'jsdom',
			setupFiles: './tests/setup',
			exclude: [...configDefaults.exclude]
		},
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src/app'),
				'@assets': path.resolve(__dirname, './src/assets')
			}
		}
	};
});
export default configuration;
