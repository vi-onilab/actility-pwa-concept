const copyright = require('../templates/copyright')
const resolverTypeWrapperSignature = require('../templates/resolver-type-wrapper-signature')
const ResolverTypeWrapperSignatureContext = require('../templates/resolver-type-wrapper-signature-context')
const customResolverFn = require('../templates/custom-resolver-fn')

module.exports = {
    overwrite: true,
    schema: [
        'directive @client on FIELD_DEFINITION | ARGUMENT_DEFINITION | QUERY',
        'type Query { empty: String }',
        '**/schema.{graphql,gql,graphqls}',
        '**/schemas.{graphql,gql,graphqls}',
        '**/schemas/*.{graphql,gql,graphqls}',
        '!./schema.graphql',
    ],
    documents: [
        '**/{fragments,mutations,queries}/*.{graphql,gql}',
        '!./schema.graphql',
        '!./**/stores/**/*.{graphql,gql,graphqls}',
    ],
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
