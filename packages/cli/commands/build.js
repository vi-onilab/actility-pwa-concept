const webpack = require('webpack')
const configPath = require.resolve('@pwa-concept/build/webpack.config.js')

exports.command = 'build'
exports.desc = 'Build application'
exports.builder = {}
exports.handler = async () => {
	const config = require(configPath)({
		WEBPACK_BUNDLE: true,
		WEBPACK_SERVE: false,
	})

	const compiler = webpack(config)

	compiler.run((err, stats) => {
		if (err) throw err;
		process.stdout.write(stats.toString({
			colors: true,
			modules: false,
			children: false,
			chunks: false,
			chunkModules: false,
		}) + '\n\n');
	})
}