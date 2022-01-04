const TerserPlugin = require('terser-webpack-plugin');

module.exports = ({ isProduction }) => ({
	...(isProduction ? ({
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
})