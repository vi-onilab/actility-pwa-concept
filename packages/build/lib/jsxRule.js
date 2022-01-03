module.exports = ({ isEnvAutoHmr } = {}) => ({
	test: /\.(js|jsx)$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader',
		options: {
			...require('../package.json').babel,
			cacheDirectory: true,
			plugins: [isEnvAutoHmr && require.resolve('react-refresh/babel')].filter(Boolean),
		},
	},
});
