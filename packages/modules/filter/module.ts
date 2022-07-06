import { module } from '@pwa-concept/core'

import graphqlSchemas from './graphql/schemas'
import stores from './graphql/stores'

const FilterModule = module(() => ({
    graphqlSchemas,
    graphqlResolvers: stores?.resolvers,
    graphqlStoreFragments: stores?.fragments,
    graphqlStorePossibleTypes: stores?.possibleTypes,
    graphqlPolicies: {
        Filter: {
            keyFields: false,
        },
        FilterItem: {
            keyFields: false,
        },
    },
}))

export default FilterModule
