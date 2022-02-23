import { module } from '@pwa-concept/core'
import { CurrencyModule } from '~modules/currency'
import { PaginationModule } from '~modules/pagination'
import graphqlSchemas from './graphql/schemas'
import graphqlResolvers from './graphql/resolvers'

const ProductModule = module(() => ({
    modules: [
        CurrencyModule,
        PaginationModule,
    ],
    graphqlSchemas,
    graphqlResolvers,
}))

export default ProductModule
