import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';
import babel from 'rollup-plugin-babel';
import { join } from 'path';

const packageJson = require(require.resolve(join(process.cwd(), './package.json')));
const config = require('./package.json');

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: packageJson.main,
				format: 'cjs',
				sourcemap: true,
			},
			{
				file: packageJson.module,
				format: 'esm',
				sourcemap: true,
			},
		],
		external: Object.keys(config.devDependencies),
		plugins: [
			peerDepsExternal(),
			resolve({ extensions: ['.jsx', '.js', '.ts', '.tsx'] }),
			commonjs(),
			typescript({ tsconfig: join(process.cwd(), './package.json') }),
			babel({
				extensions: ['.jsx', '.js', '.ts', '.tsx'],
				exclude: /node_modules/,
				presets: [
					['@babel/preset-env', { loose: true }],
					['@babel/preset-react', {'runtime': 'automatic'} ],
					['@babel/preset-typescript'],
				],
			})
		],
	},
	{
		input: 'dist/esm/types/index.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		plugins: [dts()],
	},
];