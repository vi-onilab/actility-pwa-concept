import { module } from '@pwa-concept/core'
import graphqlSchemas from './graphql/schemas'
import graphqlResolvers from './graphql/resolvers'

const CartModule = module(() => ({
    graphqlSchemas,
    graphqlResolvers,
}))

export default CartModule
