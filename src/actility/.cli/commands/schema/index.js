module.exports = ({ renderString }) => ({
	description: 'Creating a new schema',
	prompts: [
		{
			name: 'type',
			type: 'list',
			message: 'Select the type',
			choices: ['Query', 'Mutation'],
			default: 'Query',
		},
		{
			name: 'name',
			type: 'input',
			message: 'Enter the name of the schema',
		},
	],
	actions: (data) => {
		const rootPath = `${__dirname.split('.cli')[0]}src/schemas/`;
		const actions = [];

		const appendIndex = (suffix, path) => (
			actions.push({
				type: 'modify',
				path: `${rootPath}${path}/index.js`,
				transform: (current) => (
					`${current}${renderString(
						"export { default as {{pascalCase name}}{{suffix}} } from './{{pascalCase name}}.graphql';",
						data,
					)}\n`
				),
				data: {
					suffix,
				},
			})
		);

		switch (data.type) {
		case 'Query':
			actions.push({
				type: 'add',
				path: `${rootPath}queries/{{pascalCase name}}.graphql`,
				templateFile: 'templates/schema/Query.graphql.hbs',
			});

			appendIndex('Query', 'queries');
			break;
		case 'Mutation':
			actions.push({
				type: 'add',
				path: `${rootPath}mutations/{{pascalCase name}}.graphql`,
				templateFile: 'templates/schema/Mutation.graphql.hbs',
			});

			appendIndex('Mutation', 'mutations');
			break;
		default: break;
		}

		return actions;
	},
});
