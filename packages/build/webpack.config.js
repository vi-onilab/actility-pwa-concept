module.exports = ({ WEBPACK_BUNDLE, WEBPACK_SERVE, ANALYZE }) => {
	const root = process.cwd()
	const isProduction = !!WEBPACK_BUNDLE
	const isDevelopment = !!WEBPACK_SERVE
	const isAnalyze = ANALYZE || !!process.env.ANALYZE

	const args = {
		root,
		isProduction,
		isDevelopment,
		isAnalyze,
	}

	return {
		mode: isDevelopment ? 'development' : 'production',
		bail: isProduction,
		devtool: isDevelopment ? 'inline-source-map' : false,

		output: require('./modules/output')(args),
		entry: require('./modules/entry')(args),
		optimization: require('./modules/optimization')(args),
		devServer: require('./modules/devServer')(args),
		watchOptions: require('./modules/watchOptions')(args),
		resolve: require('./modules/resolve')(args),
		module: require('./modules/module')(args),
		plugins: require('./modules/plugins')(args).filter(Boolean),
		performance: require('./modules/performance')(args),
	}
}
