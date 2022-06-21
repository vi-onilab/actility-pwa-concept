import { module } from '@pwa-concept/core'

import graphqlSchemas from './graphql/schemas'
import stores from './graphql/stores'

const CategoryModule = module(() => ({
    graphqlSchemas,
    graphqlResolvers: stores?.resolvers,
    graphqlStoreFragments: stores?.fragments,
    graphqlStorePossibleTypes: stores?.possibleTypes,
    graphqlPolicies: {
        Query: {
            keyFields: (category) => `${category.__typename}:${category.id}`,
            fields: {
                category: {
                    read(existing, { args, toReference, canRead }) {
                        if (!existing) {
                            const reference = toReference({
                                id: args?.input?.id,
                                __typename: 'Category',
                            })

                            if (canRead(reference)) return reference
                        }

                        return existing
                    },
                },
            },
        },
    },
}))

export default CategoryModule
