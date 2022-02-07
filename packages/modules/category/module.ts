import { module } from '@pwa-concept/core'
import graphqlSchemas from './graphql/schemas'
import graphqlResolvers from './graphql/resolvers'

const CategoryModule = module(() => ({
    graphqlSchemas,
    graphqlResolvers,
}))

export default CategoryModule
