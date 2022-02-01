const { join } = require('path')
const { existsSync } = require('fs')
const aliasPipe = require('./utils/aliasPipe')

module.exports = ({ root }) => {
	const result = {
		alias: {
			react: join(root, 'node_modules', 'react'),
			'react-dom': join(root, 'node_modules', 'react-dom'),
			'react-router': join(root, 'node_modules', 'react-router'),
			'react-router-dom': join(root, 'node_modules', 'react-router-dom'),
		},
		extensions: ['.tsx', '.ts', '.js', '.jsx'],
	}

	const configs = [
		[root, 'tsconfig.json'],
		[root, 'jsconfig.json'],
		[__dirname.split('packages')[0], 'tsconfig.json'],
	]


	configs.forEach(([rootPath, name]) => {
		const configPath = join(rootPath, name)

		if (existsSync(configPath)) {
			const config = require(configPath)

			result.alias = {
				...result.alias,
				...aliasPipe(config, { root: rootPath, name }),
			}
		}
	})

	return result
}