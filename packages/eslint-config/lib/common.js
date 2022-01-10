module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:react-hooks/recommended',
		'airbnb',
	],
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
	},
	parser: '@typescript-eslint/parser',
	ignorePatterns: [
		'webpack/*',
		'*.stories.js',
	],
	rules: {
		'linebreak-style': 0,
		'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.tsx'] }],
		'indent': [2, 'tab'],
		'no-tabs': 0,
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-props-no-spreading': 'off',
		'react/jsx-indent-props': [2, 'tab'],
		'camelcase': 'off',
		'import/prefer-default-export': 'off',
		'max-len': 'off',
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'import/no-unresolved': 'off',
		'react/no-array-index-key': 'off',
		'no-underscore-dangle': 'off',
		'no-param-reassign': 'off',
		'react/function-component-definition': 'off',
		'no-restricted-exports': 'off',
		'semi': ['error', 'never'],
		'import/extensions': ['error', 'never'],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['warn']
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	plugins: [
		'@typescript-eslint',
	],
}