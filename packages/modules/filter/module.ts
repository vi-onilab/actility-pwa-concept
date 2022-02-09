import { module } from '@pwa-concept/core'
import graphqlSchemas from './graphql/schemas'
import graphqlResolvers from './graphql/resolvers'

const FilterModule = module(() => ({
    graphqlSchemas,
    graphqlResolvers,
}))

export default FilterModule
