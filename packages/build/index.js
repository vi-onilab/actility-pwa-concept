const { readdirSync } = require('fs')
const { join } = require('path')

module.exports = async function(type = 'webpack') {
	const entries = readdirSync(join(__dirname, 'lib'))

	if (entries.includes(type)) {
		const entry = require(join(__dirname, 'lib', type, 'index.ts'))

		return {
			start: entry.start,
			build: entry.build,
			analyze: entry.analyze,
		}
	}


	throw new Error('Build adapter not found.')
}
