import { module } from '@pwa-concept/core'

import graphqlSchemas from './graphql/schemas'
import stores from './graphql/stores'

const CustomerModule = module(() => ({
    graphqlSchemas,
    graphqlResolvers: stores?.resolvers,
    graphqlStoreFragments: stores?.fragments,
    graphqlStorePossibleTypes: stores?.possibleTypes,
    graphqlPolicies: {
        Customer: {
            keyFields: (customer) => `${customer?.__typename}:${customer?.id || customer?.email}`,
        },
    },
}))

export default CustomerModule
