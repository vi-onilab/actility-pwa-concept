const { join } = require('path')
const { existsSync } = require('fs')
const aliasPipe = require('./utils/aliasPipe')

const CONFIGS = [
	'tsconfig.json',
	'jsconfig.json',
]

module.exports = ({ root }) => {
	const result = {
		alias: {},
		extensions: ['.tsx', '.ts', '.js', '.jsx'],
	}

	CONFIGS.forEach((name) => {
		const configPath = join(root, name)

		if (existsSync(configPath)) {
			const config = require(configPath)

			result.alias = {
				...result.alias,
				...aliasPipe(config, { root, name }),
			}
		}
	})

	return result
}