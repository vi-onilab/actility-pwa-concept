const { resolve } = require('path');

const isEndByMultiple = (value) =>  /\/\*$/gim.test(value)
const substringAlias = (alias) => alias.substring(0, alias.length - 2)

module.exports = (config, { root = __dirname }) => {
	if (!('compilerOptions' in config) || !('paths' in config.compilerOptions)) {
		return {}
	}

	const { baseUrl = './src', paths } = config.compilerOptions;

	const fromPath = (path) => resolve(root, baseUrl, isEndByMultiple(path) ? substringAlias(path) : path)

	return Object.entries(paths).reduce((result, [name, value]) => {
		const key = isEndByMultiple(name) ? substringAlias(name) : `${name}$`

		result[key] = Array.isArray(value) ? value.map(fromPath) : fromPath(value);

		return result
	}, {})
}