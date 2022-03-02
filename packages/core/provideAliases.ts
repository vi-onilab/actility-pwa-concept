import { PROVIDE_ROUTER } from './router'
import {
    PROVIDE_GRAPHQL_POLICY,
    PROVIDE_GRAPHQL_LINKS,
    PROVIDE_GRAPHQL_SCHEMAS,
    PROVIDE_GRAPHQL_RESOLVERS,
    PROVIDE_GRAPHQL_STORE_FRAGMENTS,
    PROVIDE_GRAPHQL_STORE_POSSIBLE_TYPES,
} from './graphql'
import { ModuleProvideAliases, ProvideToken } from './types'

const provideAliases: Record<keyof ModuleProvideAliases, ProvideToken> = {
    routes: PROVIDE_ROUTER,
    graphqlPolicies: PROVIDE_GRAPHQL_POLICY,
    graphqlLinks: PROVIDE_GRAPHQL_LINKS,
    graphqlSchemas: PROVIDE_GRAPHQL_SCHEMAS,
    graphqlResolvers: PROVIDE_GRAPHQL_RESOLVERS,
    graphqlStoreFragments: PROVIDE_GRAPHQL_STORE_FRAGMENTS,
    graphqlStorePossibleTypes: PROVIDE_GRAPHQL_STORE_POSSIBLE_TYPES,
}

export default provideAliases
