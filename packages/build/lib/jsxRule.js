module.exports = ({ isEnvAutoHmr } = {}) => ({
	test: /\.(js|jsx)$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader',
		options: {
			cacheDirectory: true,
			plugins: [isEnvAutoHmr && require.resolve('react-refresh/babel')].filter(Boolean),
		},
	},
});
