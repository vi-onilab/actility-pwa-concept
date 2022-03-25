import { module } from '@pwa-concept/core'
import graphqlSchemas from './graphql/schemas'
import stores from './graphql/stores'

const CustomerModule = module(() => ({
    graphqlSchemas,
    graphqlResolvers: stores?.resolvers,
    graphqlStoreFragments: stores?.fragments,
    graphqlStorePossibleTypes: stores?.possibleTypes,
}))

export default CustomerModule
