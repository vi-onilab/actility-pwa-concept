const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const rule = (
	{
		test,
		exclude = [],
		isModule = false,
		isProduction,
	},
) => ({
	test,
	exclude,
	use: [
		isProduction ? (
			{
				loader: MiniCssExtractPlugin.loader,
				options: {
					esModule: false,
					publicPath: '/',
				},
			}
		) : (
			'style-loader'
		),
		{
			loader: 'css-loader',
			options: {
				esModule: true,
				modules: {
					localIdentName: (
						isProduction ? (
							isModule ? '[sha1:hash:hex:8]' : '[local]'
						) : (
							isModule ? '[name]_[hash:base64:6]____[local]' : '[local]'
						)
					),
				},
			},
		},
		{
			loader: 'sass-loader',
			options: {
				sourceMap: !isProduction,
			},
		},
	],
});


module.exports = (
	{
		isProduction,
	},
) => ([
	rule({
		test: /\.module\.s[ac]ss$/i,
		isModule: true,
		isProduction,
	}),
	rule({
		test: /\.s[ac]ss$/i,
		exclude: /\.module\.s[ac]ss$/i,
		isProduction,
	}),
]);