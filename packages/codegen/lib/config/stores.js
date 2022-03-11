const glob = require('glob')
const { join, dirname, sep } = require('path')
const copyright = require('../templates/copyright')
const toPascalCase = require('../utils/toPascalCase')

module.exports = () => {
    const generates = {}

    const options = {
        cwd: process.cwd(),
        sync: true,
        ignore: ['node_modules/**/*.*', '.pwa/**/*.*'],
    }

    const files = glob(join('**', 'schema.{graphql,gql,graphqls}'), options)

    files.forEach((file) => {
        const path = join(process.cwd(), file)
        const folderPath = dirname(path)
        const storeName = toPascalCase(file.split(sep)[0])

        const storeFragmentsKeys = `export type ${storeName}StoreFragmentsKeys = keyof ${storeName}ResolversParentTypes;`
        const storePossibleTypesKeys = `export type ${storeName}StorePossibleTypesKeys = keyof ${storeName}ResolversParentTypes;`

        generates[join(folderPath, 'graphql.ts')] = {
            schema: [
                join(folderPath, 'schema.{graphql,gql,graphqls}'),
            ],
            config: {
                typesPrefix: storeName,
                declarationKind: 'interface',
            },
            plugins: [
                {
                    add: {
                        placement: 'append',
                        content: `${storeFragmentsKeys}\n${storePossibleTypesKeys}`,
                    },
                },
                {
                    add: {
                        content: copyright,
                    },
                },
                'typescript',
                '@pwa-concept/codegen/lib/plugins/typescript-resolvers.js',
            ],
        }
    })

    return {
        overwrite: true,
        schema: [
            'directive @client on FIELD_DEFINITION | ARGUMENT_DEFINITION | QUERY',
        ],
        generates,
    }
}
