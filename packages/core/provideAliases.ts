import { PROVIDE_ROUTER } from './router'
import { PROVIDE_GRAPHQL_POLICY, PROVIDE_GRAPHQL_LINKS } from './graphql'
import { ModuleProvideAliases, ProvideToken } from './types'

const provideAliases: Record<keyof ModuleProvideAliases, ProvideToken> = {
	routes: PROVIDE_ROUTER,
	graphqlPolicies: PROVIDE_GRAPHQL_POLICY,
	graphqlLinks: PROVIDE_GRAPHQL_LINKS,
}

export default provideAliases
