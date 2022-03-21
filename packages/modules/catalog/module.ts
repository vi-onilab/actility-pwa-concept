import { module } from '@pwa-concept/core'
import { ProductModule } from '@pwa-concept/modules/product'
import { PaginationModule } from '@pwa-concept/modules/pagination'
import graphqlSchemas from './graphql/schemas'
import stores from './graphql/stores'

const CatalogModule = module(() => ({
    modules: [
        ProductModule,
        PaginationModule,
    ],
    graphqlSchemas,
    graphqlResolvers: stores?.resolvers,
    graphqlStoreFragments: stores?.fragments,
    graphqlStorePossibleTypes: stores?.possibleTypes,
}))

export default CatalogModule
