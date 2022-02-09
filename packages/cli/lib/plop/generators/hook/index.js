const { join } = require('path')
const { existsSync } = require('fs')

module.exports = ({ renderString }) => ({
    description: 'Creating a new hook',
    prompts: [
        {
            name: 'name',
            type: 'input',
            message: 'Enter the name of the hook',
        },
        {
            name: 'path',
            type: 'directory',
            basePath: process.cwd(),
            message: 'Select the location of the hook',
        },
    ],
    actions: (data) => {
        const rootPath = process.cwd()
        const actions = []

        actions.push({
            type: 'add',
            path: join(rootPath, '{{path}}', 'use{{ pascalCase name }}.ts'),
            templateFile: join(__dirname, 'hook.ts.hbs'),
        })

        try {
            if (existsSync(join(rootPath, data.path, 'index.ts'))) {
                actions.push({
                    type: 'modify',
                    path: join(rootPath, '{{path}}', 'index.ts'),
                    transform: (current) => (
                        `${`${(current || '').replace('export {}', '').replace('export { }', '').trim()}\n${renderString(
                            'export { default as use{{ pascalCase name }} } from \'./use{{ pascalCase name }}\'',
                            data,
                        )}`.trim()}\n`
                    ),
                })
            }
        } catch (e) {
            //
        }

        return actions
    },
})
