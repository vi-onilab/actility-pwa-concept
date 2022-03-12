const copyright = require('../templates/copyright')
const resolverTypeWrapperSignature = require('../templates/resolver-type-wrapper-signature')
const ResolverTypeWrapperSignatureContext = require('../templates/resolver-type-wrapper-signature-context')
const customResolverFn = require('../templates/custom-resolver-fn')
const { dirname } = require('path')

module.exports = {
    overwrite: true,
    schema: [
        'directive @client on FIELD_DEFINITION | ARGUMENT_DEFINITION | QUERY',
        ...(() => {
            try {
                return [
                    require.resolve('@pwa-concept/modules/schema.graphql'),
                ]
            } catch {
                return []
            }
        })(),
        '**/schema.{graphql,gql,graphqls}',
        '**/schemas.{graphql,gql,graphqls}',
        '**/schemas/*.{graphql,gql,graphqls}',
        '!./schema.graphql',
    ].filter(Boolean),
    documents: [
        ...(() => {
            try {
                const root = dirname(require.resolve('@pwa-concept/modules/schema.graphql'))

                return [
                    `${root}/**/{fragments,mutations,queries}/*.{graphql,gql}`,
                    `!${root}/schema.graphql`,
                    `!${root}/**/stores/**/*.{graphql,gql,graphqls}`,
                ]
            } catch {
                return []
            }
        })(),
        '**/{fragments,mutations,queries}/*.{graphql,gql}',
        '!./schema.graphql',
        '!./**/stores/**/*.{graphql,gql,graphqls}',
    ].filter(Boolean),
    generates: {
        './graphql.ts': {
            plugins:
                [
                    {
                        add: {
                            content: copyright,
                        },
                    },
                    {
                        add:
                            {
                                placement: 'prepend',
                                content: 'declare module \'@pwa-concept/modules/graphql\' {\n',
                            },
                    },
                    {
                        add: {
                            placement: 'append', content: '}\n',
                        },
                    },
                    {
                        add: {
                            content: ResolverTypeWrapperSignatureContext,
                        },
                    },
                    'typescript',
                    '@pwa-concept/codegen/lib/plugins/typescript-resolvers.js',
                ],
            config: {
                contextType: 'ResolverContext',
                declarationKind: 'interface',
                customResolverFn,
                resolverTypeWrapperSignature,
            },
        },
    },
}
