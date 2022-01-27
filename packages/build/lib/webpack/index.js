const webpack = require('webpack')
const configure = require('./webpack.config.js')
const webpackDevServer = require('webpack-dev-server')

module.exports = {
	start: async ({ port }) => {
		const config = configure({
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
	},
	build: async () => {
		const config = configure({
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
	},
	analyze: async () => {
		const config = configure({
			WEBPACK_BUNDLE: true,
			ANALYZE: true,
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
	},
}