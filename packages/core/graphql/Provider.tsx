import { FC, useMemo } from 'react'
import {
	ApolloClient,
	ApolloProvider,
	from,
	InMemoryCache,
} from '@apollo/client'
import { TypeSource } from '@graphql-tools/utils/Interfaces'
import {
	authErrorLink,
	authLink,
	errorLink,
	httpLink,
	queueLink,
	retryLink,
} from './links'
import { useProvide } from '../provide'
import { PROVIDE_GRAPHQL_POLICY, PROVIDE_GRAPHQL_RESOLVERS, PROVIDE_GRAPHQL_SCHEMAS } from './tokens'
import { env } from '../utils'

const GraphQLProvider: FC = ({ children }) => {
	const typePolicies = useProvide(PROVIDE_GRAPHQL_POLICY, {})
	const typeDefs = useProvide<TypeSource[], any>(PROVIDE_GRAPHQL_SCHEMAS, null, (value) => (
		value?.length > 0 ? value : undefined
	))
	const resolvers = useProvide<any>(PROVIDE_GRAPHQL_RESOLVERS, [], (value) => (
		value?.length > 0 ? value : undefined
	))

	console.log(typeDefs, resolvers)

	const client = useMemo(() => (
		new ApolloClient({
			cache: new InMemoryCache({
				typePolicies,
			}),
			typeDefs,
			resolvers,
			uri: env('APP_GRAPHQL_URL'),
			link: from([
				retryLink,
				queueLink,
				authLink,
				errorLink,
				authErrorLink,
				httpLink,
			]),
			connectToDevTools: process.env.NODE_ENV === 'development',
		})
	), [typeDefs, resolvers, typePolicies])

	return (
		<ApolloProvider client={client}>
			{children}
		</ApolloProvider>
	)
}

export default GraphQLProvider
