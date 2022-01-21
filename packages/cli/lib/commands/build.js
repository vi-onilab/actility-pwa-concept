const Builder = require('@pwa-concept/build')
exports.command = 'build'
exports.desc = 'Build application'
exports.builder = {}
exports.handler = async (args) => {
	const builder = await Builder()

	await builder.build(args)
}