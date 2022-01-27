const path = require('path');
module.exports = ({ root, isProduction }) => ({
	path: path.join(root, '/dist'),
	publicPath: '/',
	filename: isProduction ? 'static/js/[name].[contenthash:8].js' : 'static/js/[name].js',
	chunkFilename: isProduction ? 'static/js/[name].[contenthash:8].chunk.js' : 'static/js/[name].chunk.js',
})