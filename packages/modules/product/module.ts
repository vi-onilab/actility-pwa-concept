import { module } from '@pwa-concept/core'
import { CurrencyModule } from '~modules/currency'
import graphqlSchemas from './graphql/schemas'
import graphqlResolvers from './graphql/resolvers'

const ProductModule = module(() => ({
    modules: [
        CurrencyModule,
    ],
    graphqlSchemas,
    graphqlResolvers,
}))

export default ProductModule
