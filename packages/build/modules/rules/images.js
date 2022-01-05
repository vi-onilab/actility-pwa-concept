module.exports = () => ({
	test: /\.(png|jpg|gif)$/,
	type: 'asset/resource',
	generator: {
		filename: 'assets/images/[hash][ext][query]',
	},
});