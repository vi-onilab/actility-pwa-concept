module.exports = ({ WEBPACK_BUNDLE, WEBPACK_SERVE, ANALYZE, PORT }) => {
    const root = process.cwd()
    const isProduction = !!WEBPACK_BUNDLE
    const isDevelopment = !!WEBPACK_SERVE
    const isAnalyze = ANALYZE || !!process.env.ANALYZE
    const port = PORT || !!process.env.PORT || 3000

    const args = {
        port,
        root,
        isProduction,
        isDevelopment,
        isAnalyze,
    }

    return {
        experiments: {
            lazyCompilation: {
                imports: true,
                entries: false,
            },
        },
        mode: isDevelopment ? 'development' : 'production',
        bail: isProduction,
        devtool: isDevelopment ? 'eval-source-map' : false,
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
