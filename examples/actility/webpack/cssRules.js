const cssRule = require('./cssRule');

module.exports = (
	{
		isEnvProduction,
		publicPath,
	},
) => ([
	cssRule({
		test: /\.module\.s[ac]ss$/i,
		isModule: true,
		isEnvProduction,
		publicPath,
	}),
	cssRule({
		test: /\.s[ac]ss$/i,
		exclude: /\.module\.s[ac]ss$/i,
		isEnvProduction,
		publicPath,
	}),
]);