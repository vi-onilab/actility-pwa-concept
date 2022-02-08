const Builder = require('@pwa-concept/build')

exports.command = 'analyze'
exports.desc = 'Analyze application bundle'
exports.builder = {}
exports.handler = async (args) => {
    const builder = await Builder()

    await builder.analyze(args)
}