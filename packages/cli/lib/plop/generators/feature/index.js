const { join } = require('path')
const { readFileSync } = require('fs')

module.exports = ({ renderString }) => ({
    description: 'Creating a new feature',
    prompts: [
        {
            name: 'name',
            type: 'input',
            message: 'Enter the name of the feature',
        },
        {
            name: 'path',
            type: 'directory',
            basePath: process.cwd(),
            message: 'Select the location of the feature',
        },
    ],
    actions: (data) => {
        const rootPath = process.cwd()
        const actions = []

        actions.push({
            type: 'add',
            path: `${rootPath}{{path}}/{{dashCase name}}/index.ts`,
            templateFile: join(__dirname, 'index.ts.hbs'),
        })

        actions.push({
            type: 'add',
            path: `${rootPath}{{path}}/{{dashCase name}}/hooks/index.ts`,
            templateFile: join(__dirname, 'hooks', 'index.ts.hbs'),
        })

        try {
            actions.push({
                type: 'modify',
                path: `${rootPath}{{path}}/index.ts`,
                transform: (current) => (
                    `${(current || '').replace('export {}', '').trim()}${renderString(
                        'export * from \'./{{dashCase name}}\'',
                        data,
                    )}\n`
                ),
            })
        } catch (e) {
            //
        }

        return actions
    },
})
