const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = (
	{
		test,
		exclude = [],
		isModule = false,
		isEnvProduction,
		publicPath,
		cwd,
	},
) => ({
	test,
	exclude,
	use: [
		isEnvProduction ? (
			{
				loader: MiniCssExtractPlugin.loader,
				options: {
					esModule: false,
					publicPath,
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
						isEnvProduction ? (
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
				sourceMap: !isEnvProduction,
			},
		},
	],
});