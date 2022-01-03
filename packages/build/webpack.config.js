const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const dotenv = require('dotenv');
const TerserPlugin = require('terser-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

const {
	cssRules,
	jsxRule,
	fontsRule,
	imagesRule,
	graphqlRule,
	resolveAlias,
	svgRule,
} = require('./lib');

module.exports = ({ WEBPACK_BUNDLE, WEBPACK_SERVE }) => {
	const cwd = process.cwd();
	const isEnvDevelopment = !!WEBPACK_SERVE;
	const isEnvProduction = !!WEBPACK_BUNDLE;
	const isEnvAnalyze = !!process.env.ANALYZE;
	const isEnvAutoHmr = !!process.env.AUTO_HMR;

	return {
		bail: isEnvProduction,
		output: {
			path: path.join(cwd, '/dist'),
			publicPath: '/',
			filename: isEnvProduction ? 'static/js/[name].[contenthash:8].js' : 'static/js/[name].js',
			chunkFilename: isEnvProduction ? 'static/js/[name].[contenthash:8].chunk.js' : 'static/js/[name].chunk.js',
		},
		entry: {
			index: path.join(cwd, 'src', 'index.js'),
		},
		optimization: {
			...(isEnvProduction ? ({
				minimize: true,
				minimizer: [new TerserPlugin({
					parallel: true,
					extractComments: false,
					terserOptions: {
						ecma: 10,
						compress: true,
						output: {
							comments: false,
							beautify: false,
						},
					},
				})],
			}) : {}),
			moduleIds: 'deterministic',
			runtimeChunk: 'single',
			splitChunks: {
				chunks: 'all',
				// maxInitialRequests: Infinity,
				// minSize: 0,
				// cacheGroups: {
				// 	default: false,
				// 	vendor: {
				// 		test: /node_modules/,
				// 		name: 'vendors',
				// 		chunks: 'all',
				// 	},
				// 	styles: {
				// 		name: 'styles',
				// 		test: /\.(less|css)$/,
				// 		minChunks: 1,
				// 		reuseExistingChunk: true,
				// 		enforce: true,
				// 	},
				// },
			},
		},
		devServer: {
			port: 3000,
			historyApiFallback: {
				disableDotRule: true,
			},
			open: true,
		},
		watchOptions: {
			aggregateTimeout: 1000,
			poll: 1000,
		},
		devtool: isEnvDevelopment ? 'inline-source-map' : false,
		resolve: {
			alias: resolveAlias(),
		},
		module: {
			rules: [
				jsxRule({ isEnvAutoHmr, cwd }),
				...svgRule({ cwd }),
				imagesRule({ cwd }),
				fontsRule({ cwd }),
				graphqlRule({ cwd }),
				...cssRules({
					isEnvProduction,
					publicPath: '/',
					cwd,
				}),
			],
		},
		plugins: [
			isEnvDevelopment && new WebpackNotifierPlugin({ title: 'Actility Webpack', emoji: true, alwaysNotify: true }),
			new webpack.ProgressPlugin({
				activeModules: true,
			}),
			new webpack.DefinePlugin({
				'process.env': JSON.stringify(dotenv.config({ path: path.join(cwd, '.env') }).parsed),
			}),
			new HtmlWebpackPlugin({ template: path.join(cwd, 'src', 'index.html') }),
			new MiniCssExtractPlugin({
				filename: isEnvDevelopment ? 'static/css/[name].css' : 'static/css/[name].[contenthash:8].css',
				chunkFilename: isEnvDevelopment ? 'static/css/[id].css' : 'static/css/[id].[contenthash:8].css',
			}),

			isEnvProduction && new CopyPlugin({
				patterns: [
					path.resolve(cwd, 'public'),
				],
			}),

			isEnvDevelopment && new webpack.HotModuleReplacementPlugin(),
			isEnvAutoHmr && new ReactRefreshWebpackPlugin(),

			isEnvAnalyze && new BundleAnalyzerPlugin(),
		].filter(Boolean),
		performance: {
			hints: false,
			maxEntrypointSize: 512000,
			maxAssetSize: 512000,
		},
	};
};
