module.exports = () => ({
	description: 'Creating a new component',
	prompts: [
		{
			name: 'name',
			type: 'input',
			message: 'Enter the name of the component',
		},
		{
			name: 'path',
			type: 'directory',
			basePath: './src/components/',
			message: 'Select the location of the component',
		},
		{
			name: 'withCss',
			type: 'list',
			message: 'With CSS?',
			choices: ['Yes', 'No'],
			default: 'Yes',
		},
	],
	actions: (data) => {
		const rootPath = `${__dirname.split('.cli')[0]}src/components/`;
		const actions = [];

		actions.push({
			type: 'add',
			path: `${rootPath}{{path}}/{{pascalCase name}}/{{pascalCase name}}.js`,
			templateFile: 'templates/component/Component.js.hbs',
			data: {
				isAddCss: data.withCss !== 'No',
			},
		});

		actions.push({
			type: 'add',
			path: `${rootPath}{{path}}/{{pascalCase name}}/index.js`,
			templateFile: 'templates/component/index.js.hbs',
		});

		if (data.withCss !== 'No') {
			actions.push({
				type: 'add',
				path: `${rootPath}{{path}}/{{pascalCase name}}/{{pascalCase name}}.module.scss`,
				templateFile: 'templates/component/Component.module.scss.hbs',
			});
		}

		return actions;
	},
});
