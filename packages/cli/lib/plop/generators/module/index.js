const { join } = require('path')

const STORES = [
    'magento2',
]

module.exports = () => ({
    description: 'Creating a new module',
    prompts: [
        {
            name: 'name',
            type: 'input',
            message: 'Enter the name of the module',
        },
        {
            name: 'path',
            type: 'directory',
            basePath: process.cwd(),
            message: 'Select the location of the module',
        },
    ],
    actions: (data) => {
        const rootPath = process.cwd()
        const actions = []

        actions.push({
            type: 'add',
            path: join(rootPath, '{{path}}', '{{dashCase name}}', 'index.ts'),
            templateFile: join(__dirname, 'index.ts.hbs'),
        })

        actions.push({
            type: 'add',
            path: join(rootPath, '{{path}}', '{{dashCase name}}', 'module.ts'),
            templateFile: join(__dirname, 'module.ts.hbs'),
        })

        actions.push({
            type: 'add',
            path: join(rootPath, '{{path}}', '{{dashCase name}}', 'features', 'index.ts'),
            templateFile: join(__dirname, 'features', 'index.ts.hbs'),
        })

        actions.push({
            type: 'add',
            path: join(rootPath, '{{path}}', '{{dashCase name}}', 'graphql', 'schemas', 'index.ts'),
            templateFile: join(__dirname, 'graphql', 'schemas', 'index.ts.hbs'),
        })

        actions.push({
            type: 'add',
            path: join(rootPath, '{{path}}', '{{dashCase name}}', 'graphql', 'schemas', '{{pascalCase name}}.graphql'),
            templateFile: join(__dirname, 'graphql', 'schemas', 'Query.graphql.hbs'),
        })

        actions.push({
            type: 'add',
            path: join(rootPath, '{{path}}', '{{dashCase name}}', 'graphql', 'resolvers', 'index.ts'),
            templateFile: join(__dirname, 'graphql', 'resolvers', 'index.ts.hbs'),
        })

        STORES.forEach((storeName) => {
            actions.push({
                type: 'add',
                path: join(rootPath, '{{path}}', '{{dashCase name}}', 'graphql', 'resolvers', storeName, 'index.ts'),
                templateFile: join(__dirname, 'graphql', 'resolvers', 'store', 'index.ts.hbs'),
            })

            actions.push({
                type: 'add',
                path: join(rootPath, '{{path}}', '{{dashCase name}}', 'graphql', 'resolvers', storeName, 'Query', 'index.ts'),
                templateFile: join(__dirname, 'graphql', 'resolvers', 'store', 'Query', 'index.ts.hbs'),
            })

            actions.push({
                type: 'add',
                path: join(rootPath, '{{path}}', '{{dashCase name}}', 'graphql', 'resolvers', storeName, 'Mutation', 'index.ts'),
                templateFile: join(__dirname, 'graphql', 'resolvers', 'store', 'Mutation', 'index.ts.hbs'),
            })
        })

        return actions
    },
})
