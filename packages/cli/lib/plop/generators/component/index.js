const { join } = require('path')

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
			basePath: `${process.cwd()}/src/`,
			message: 'Select the location of the component',
		},
		{
			name: 'styles',
			type: 'list',
			message: 'With styles?',
			choices: ['Yes', 'No'],
			default: 'Yes',
		},
	],
	actions: (data) => {
		const rootPath = `${process.cwd()}/src/`;
		const actions = [];

		actions.push({
			type: 'add',
			path: `${rootPath}{{path}}/{{pascalCase name}}/{{pascalCase name}}.tsx`,
			templateFile: join(__dirname, 'Component.tsx.hbs'),
			data: {
				isAddCss: data.styles !== 'No',
			},
		});

		actions.push({
			type: 'add',
			path: `${rootPath}{{path}}/{{pascalCase name}}/index.ts`,
			templateFile: join(__dirname, 'index.ts.hbs'),
		});

		if (data.styles !== 'No') {
			actions.push({
				type: 'add',
				path: `${rootPath}{{path}}/{{pascalCase name}}/{{pascalCase name}}.module.scss`,
				templateFile: join(__dirname, 'Component.module.scss.hbs'),
			});
		}

		return actions;
	},
});
