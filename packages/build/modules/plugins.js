const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const dotenv = require('dotenv');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = ({ root, isDevelopment, isAnalyze, isProduction }) => ([
	isDevelopment && new WebpackNotifierPlugin({ title: 'PWA Build', emoji: true, alwaysNotify: true }),
	new webpack.DefinePlugin({
		'process.env': JSON.stringify(dotenv.config({ path: path.join(root, '.env') }).parsed),
	}),
	new HtmlWebpackPlugin({ template: path.join(root, 'src', 'index.html') }),
	new MiniCssExtractPlugin({
		filename: isDevelopment ? 'static/css/[name].css' : 'static/css/[name].[contenthash:8].css',
		chunkFilename: isDevelopment ? 'static/css/[id].css' : 'static/css/[id].[contenthash:8].css',
	}),

	isProduction && new CopyPlugin({
		patterns: [
			path.resolve(root, 'public'),
		],
	}),

	isDevelopment && new webpack.HotModuleReplacementPlugin(),
	isDevelopment && new ReactRefreshWebpackPlugin(),

	isAnalyze && new BundleAnalyzerPlugin(),
])