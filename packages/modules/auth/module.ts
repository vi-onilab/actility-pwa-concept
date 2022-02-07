import { module } from '@pwa-concept/core'
import graphqlSchemas from './graphql/schemas'
import graphqlResolvers from './graphql/resolvers'

const AuthModule = module(() => ({
    graphqlSchemas,
    graphqlResolvers,
}))

export default AuthModule
