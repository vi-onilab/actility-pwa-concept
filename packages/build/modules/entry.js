const { join } = require('path')
const { existsSync } = require('fs')

const ENTRIES = [
	'index.ts',
	'index.js',
]

module.exports = ({ root }) => {
	const index = (
		ENTRIES
			.map((name) => join(root, 'src', name))
			.find((path) => existsSync(path))
	)

	return {
		index,
	}
}