const copyright = require('../templates/copyright')
const copyrightGraphQL = require('../templates/copyright-graphql')
const resolverTypeWrapperSignature = require('../templates/resolver-type-wrapper-signature')
const ResolverTypeWrapperSignatureContext = require('../templates/resolver-type-wrapper-signature-context')
const customResolverFn = require('../templates/custom-resolver-fn')

module.exports = {
    overwrite: true,
    schema: [
        'directive @client on FIELD_DEFINITION | ARGUMENT_DEFINITION | QUERY',
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
        './schema.graphql': {
            plugins: [
                {
                    add: {
                        content: copyrightGraphQL,
                    },
                },
                'schema-ast',
            ],
            config: {
                includeDirectives: true,
                federation: true,
            },
        },
        './graphql.ts': {
            plugins: [
                {
                    add: {
                        content: copyright,
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
        './': {
            preset: 'near-operation-file',
            presetConfig: {
                extension: '.tsx',
                baseTypesPath: './graphql.ts',
            },
            config: {
                withHooks: true,
                apolloReactHooksImportFrom: '@pwa-concept/core/graphql/hooks',
            },
            plugins: [
                {
                    add: {
                        content: copyright,
                    },
                },
                'typescript-operations',
                'typescript-react-apollo',
            ],
        },
    },
}
