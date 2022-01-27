const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const dotenv = require('dotenv');
const { join } = require('path');
const { existsSync, readFileSync } = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = ({ root, isDevelopment, isAnalyze, isProduction }) => {
	const publicPath = join(root, 'public');
	const htmlPath = join(root, 'src', 'index.html');
	const envPath = join(root, '.env');
	const envConfig = existsSync(envPath) ? dotenv.config({ path: envPath }).parsed : null;
	// PWA_STORE_NAME
	return [
		new webpack.ProgressPlugin({
			activeModules: true,
		}),
		envConfig && new webpack.DefinePlugin({
			'process.env': JSON.stringify(envConfig),
			PWA_STORE_NAME: envConfig.PWA_STORE_NAME,
		}),
		('PWA_STORE_NAME' in envConfig) && new webpack.NormalModuleReplacementPlugin(
			/(\[]\.tsx?$)/,
			(resource) => {
				resource.request = resource.request.replace(
					/\[]/,
					`[${envConfig.PWA_STORE_NAME}]`,
				);
			},
		),
		isDevelopment && new WebpackNotifierPlugin({ title: 'PWA Build', emoji: true, alwaysNotify: true }),
		existsSync(htmlPath) && new HtmlWebpackPlugin({
			templateContent: (
				readFileSync(htmlPath, { encoding: 'utf8' }).replace(/<script(.*)type="module"(.*)><\/script>/gim, '')
			),
		}),
		new MiniCssExtractPlugin({
			filename: isDevelopment ? 'static/css/[name].css' : 'static/css/[name].[contenthash:8].css',
			chunkFilename: isDevelopment ? 'static/css/[id].css' : 'static/css/[id].[contenthash:8].css',
		}),

		isProduction && existsSync(publicPath) && new CopyPlugin({
			patterns: [
				publicPath,
			],
		}),

		isDevelopment && new webpack.HotModuleReplacementPlugin(),
		isDevelopment && new ReactRefreshWebpackPlugin(),

		isAnalyze && new BundleAnalyzerPlugin(),
	];
};