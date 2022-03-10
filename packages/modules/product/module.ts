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
    graphqlResolvers: stores?.resolvers,
    graphqlStoreFragments: stores?.fragments,
    graphqlStorePossibleTypes: stores?.possibleTypes,
}))

export default ProductModule
