module.exports = ({ isDevelopment }) => ({
	test: /\.[tj]sx?$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader',
		options: {
			...require('../../package.json').babel,
			cacheDirectory: true,
			plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
		},
	},
});
