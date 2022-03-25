const { join } = require('path')
const { generate } = require('@graphql-codegen/cli')

exports.command = 'get-schema <url> <file>'
exports.desc = 'Get schema'
exports.builder = {
    url: {
        alias: 'u',
        describe: 'URL to schema',
        demand: false,
    },
    file: {
        alias: 'f',
        describe: 'File',
        demand: false,
    },
}
exports.handler = async ({ url, file }) => {
    const resultPath = join(process.cwd(), file)

    console.log(`Get GraphQL schema from ${url}`)

    const result = generate({
        schema: url,
        overwrite: true,
        generates: {
            [resultPath]: {
                plugins: [
                    'schema-ast',
                ],
                config: {
                    includeDirectives: true,
                    federation: true,
                },
            },
        },
    })

    if ('then' in result) {
        result.then(() => {
            console.log(`GraphQL schema successfully saved to file: ${resultPath}`)
        })
    }
}
