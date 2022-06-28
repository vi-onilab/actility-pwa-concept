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
                    read(existing, { args, toReference, canRead }) {
                        if (!existing) {
                            const reference = toReference({
                                id: (
                                    args?.input?.id ||
                                    args?.input?.external?.find((item) => ['id', 'entity_id'].includes(item?.key))?.value?.eq
                                ),
                                sku: args?.input?.sku,
                                url: args?.input?.url,
                                __typename: 'Product',
                            })

                            if (canRead(reference)) return reference
                        }

                        return existing
                    },
                },
            },
        },
        Product: {
            keyFields: (product) => `${product.__typename}:${product.id}`,
        },
    },
    graphqlResolvers: stores?.resolvers,
    graphqlStoreFragments: stores?.fragments,
    graphqlStorePossibleTypes: stores?.possibleTypes,
}))

export default ProductModule
