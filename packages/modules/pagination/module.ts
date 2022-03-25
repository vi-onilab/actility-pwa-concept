import { module } from '@pwa-concept/core'
import graphqlSchemas from './graphql/schemas'

const PaginationModule = module(() => ({
    graphqlSchemas,
}))

export default PaginationModule
