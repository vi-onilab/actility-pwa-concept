const Builder = require('@pwa-concept/build')
const codegen = require('./codegen')

exports.command = 'start [port]'
exports.desc = 'Start the local server'
exports.builder = {
    port: {
        alias: 'p',
        describe: 'Pass the server port',
        demand: false,
    },
}
exports.handler = async (args) => {
    const builder = await Builder()

    await Promise.allSettled([
        codegen.handler({ watch: true }),
        builder.start(args),
    ])
}
