const path = require('path');
const jsconfig = require('../jsconfig.json');

module.exports = ({ cwd }) => {
	const paths = jsconfig.compilerOptions.paths || [];
	const baseUrlParts = jsconfig.compilerOptions.baseUrl.split('/');

	return Object.keys(paths).reduce((acc, currentKey) => {
		const value = paths[currentKey][0].replace('/*', '').split('/');

		acc[currentKey] = path.join(cwd, ...baseUrlParts, ...value);

		return acc;
	}, {});
};
