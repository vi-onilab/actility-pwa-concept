import { module } from '@pwa-concept/core'
import { CurrencyModule } from '@pwa-concept/modules/currency'
import { PaginationModule } from '@pwa-concept/modules/pagination'
import graphqlSchemas from './graphql/schemas'
import stores from './graphql/stores'

const ProductModule = module(() => ({
    modules: [
        CurrencyModule,
        PaginationModule,
    ],
    graphqlSchemas,
    graphqlPolicies: {
        Query: {
            fields: {
                product: {
                    read(existing, { args, toReference }) {
                        return existing ?? toReference({
                            id: args?.id,
                            sku: args?.sku,
                            url: args?.url,
                            __typename: 'Product',
                        })
                    },
                },
            },
        },
    },
    graphqlResolvers: stores?.resolvers,
    graphqlStoreFragments: stores?.fragments,
    graphqlStorePossibleTypes: stores?.possibleTypes,
}))

export default ProductModule
