import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  server: {
		port: 4000,
	},
	output: {
		distPath: {
			root: 'build',
		},
	},
	html: {
		title: 'Sirius Future',
		// 	template: './static/index.html',
		favicon: './static/favicon.ico',
		// appIcon: './src/assets/icon.png',
		meta: {
			description: 'Личный кабинет Sirius Future',
		},
	}
});
