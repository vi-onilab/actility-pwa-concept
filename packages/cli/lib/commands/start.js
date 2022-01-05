const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')

const configPath = require.resolve('@pwa-concept/build/webpack.config.js')

exports.command = 'start'
exports.desc = 'Start the local server'
exports.builder = {}
exports.handler = async () => {
	const config = require(configPath)({
		WEBPACK_BUNDLE: false,
		WEBPACK_SERVE: true,
	})

	const compiler = webpack(config)

	const devServerOptions = { ...config.devServer, open: true }
	const server = new webpackDevServer(devServerOptions, compiler)

	const runServer = async () => {
		await server.start()
	};

	runServer()
}