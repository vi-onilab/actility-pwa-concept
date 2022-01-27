import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { join } from 'path'
import graphql from '@rollup/plugin-graphql'
import svgr from 'vite-plugin-svgr'
import { visualizer } from 'rollup-plugin-visualizer';

module.exports = defineConfig({
	envDir: process.cwd(),
	envPrefix: undefined,
	root: join(process.cwd(), 'src'),
	define: {
		'process.env': null
	},
	plugins: [
		svgr({
			svgrOptions: {
				icon: true,
			},
		}),
		visualizer(),
		react(),
		graphql(),
		tsconfigPaths({
			projects: [
				join(process.cwd(), 'tsconfig.json'),
			],
		}),
	],
	optimizeDeps: {
		esbuildOptions: {
			loader: {
				'.js': 'jsx',
			},
		},
	},
	resolve: {
		alias: [
			{
				find: /^~/,
				replacement: 'node_modules/',
			},
		],
	},
	esbuild: {
		jsxFactory: 'h',
		jsxFragment: 'Fragment',
	},
	build: {
		sourcemap: true,
		outDir: join(process.cwd(), 'dist'),
	},
})
