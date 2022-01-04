const {
	cssRules,
	resolveAlias,
} = require('../webpack');

module.exports = {
	'stories': [
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx)',
	],
	'addons': [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
	],
	'core': {
		'builder': 'webpack5',
	},
	webpackFinal(config, { configType }) {
		const isEnvProduction = (configType === 'PRODUCTION');

		config.resolve = {
			...(config.resolve || {}),
			alias: {
				...((config.resolve || {}).alias || {}),
				...resolveAlias(),
			},
		};

		config.module.rules = [
			...config.module.rules,
			...cssRules({
				isEnvProduction,
			}),

		];

		return config;
	},
}