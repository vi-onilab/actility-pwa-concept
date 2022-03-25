const Builder = require('@pwa-concept/build')
const codegen = require('./codegen')

exports.command = 'build'
exports.desc = 'Build application'
exports.builder = {}
exports.handler = async (args) => {
    const builder = await Builder()

    await codegen.handler({})
    await builder.build(args)
}
