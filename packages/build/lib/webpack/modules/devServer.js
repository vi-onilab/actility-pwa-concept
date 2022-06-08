const { join } = require('path')

module.exports = ({ root, port }) => {
    const packageJson = require(join(root, 'package.json'))

    return {
        port,
        historyApiFallback: {
            disableDotRule: true,
        },
        open: true,
        proxy: (
            'proxy' in packageJson ? (
                Object.entries(packageJson.proxy || {}).reduce((result, [key, target]) => {
                    result[key] = {
                        target,
                        secure: false,
                    }

                    return result
                }, {})
            ) : {}
        ),
    }
}
