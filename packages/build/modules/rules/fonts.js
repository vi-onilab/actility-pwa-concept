module.exports = () => ({
	test: /\.(eot|woff|woff2|ttf)$/,
	type: 'asset/resource',
	generator: {
		filename: 'assets/fonts/[hash][ext][query]',
	},
});