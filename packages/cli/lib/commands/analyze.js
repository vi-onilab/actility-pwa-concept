const Builder = require('@pwa-concept/build')
const codegen = require('./codegen')

exports.command = 'analyze'
exports.desc = 'Analyze application bundle'
exports.builder = {}
exports.handler = async (args) => {
    const builder = await Builder()

    await codegen.handler({})
    await builder.analyze(args)
}
