const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const dotenv = require('dotenv');
const { join } = require('path');
const { existsSync } = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = ({ root, isDevelopment, isAnalyze, isProduction }) => {
	const publicPath = join(root, 'public')
	const htmlPath = join(root, 'src', 'index.html')
	const envPath = join(root, '.env')

	return [
		new webpack.ProgressPlugin({
			activeModules: true,
		}),
		isDevelopment && new WebpackNotifierPlugin({ title: 'PWA Build', emoji: true, alwaysNotify: true }),
		existsSync(envPath) && new webpack.DefinePlugin({
			'process.env': JSON.stringify(dotenv.config({ path: envPath }).parsed),
		}),
		existsSync(htmlPath) && new HtmlWebpackPlugin({ template: htmlPath }),
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
	]
}