const Builder = require('@pwa-concept/build')

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

    await builder.start(args)
}