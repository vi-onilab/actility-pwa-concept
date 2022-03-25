import { module } from '@pwa-concept/core'
import graphqlSchemas from './graphql/schemas'
import stores from './graphql/stores'
import { PaginationModule } from '@pwa-concept/modules/pagination'

const CustomerOrdersModule = module(() => ({
    modules: [
        PaginationModule,
    ],
    graphqlSchemas,
    graphqlResolvers: stores?.resolvers,
    graphqlStoreFragments: stores?.fragments,
    graphqlStorePossibleTypes: stores?.possibleTypes,
}))

export default CustomerOrdersModule
