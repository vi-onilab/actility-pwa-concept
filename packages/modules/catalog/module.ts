import { module } from '@pwa-concept/core'
import graphqlSchemas from './graphql/schemas'
import graphqlResolvers from './graphql/resolvers'
import { ProductModule } from '@pwa-concept/modules/product'
import { PaginationModule } from '@pwa-concept/modules/pagination'

const CatalogModule = module(() => ({
    graphqlSchemas,
    graphqlResolvers,
    modules: [
        ProductModule,
        PaginationModule,
    ],
}))

export default CatalogModule
