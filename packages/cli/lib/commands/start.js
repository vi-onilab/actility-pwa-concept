const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')

const configPath = require.resolve('@pwa-concept/build/webpack.config.js')

exports.command = 'start [port]'
exports.desc = 'Start the local server'
exports.builder = {
	port: {
		alias: 'p',
		describe: 'Pass the server port',
		demand: false,
	},
}
exports.handler = async ({ port }) => {
	const config = require(configPath)({
		WEBPACK_BUNDLE: false,
		WEBPACK_SERVE: true,
		PORT: port,
	})

	const compiler = webpack(config)

	const devServerOptions = { ...config.devServer, open: true }
	const server = new webpackDevServer(devServerOptions, compiler)

	const runServer = async () => {
		await server.start()
	};

	runServer()
}