import { FC, useMemo } from 'react'
import {
	ApolloClient, ApolloProvider, from, InMemoryCache,
} from '@apollo/client'
import {
	authErrorLink, authLink, errorLink, httpLink, queueLink, retryLink,
} from './links'
import { useProvide } from '../provide'
import { PROVIDE_GRAPHQL_POLICY_TOKEN } from './tokens'

const GraphQLProvider: FC = ({ children }) => {
	const typePolicies = useProvide(PROVIDE_GRAPHQL_POLICY_TOKEN, {})

	const client = useMemo(() => (
		new ApolloClient({
			cache: new InMemoryCache({
				typePolicies,
			}),
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
	), [typePolicies])

	return (
		<ApolloProvider client={client}>
			{children}
		</ApolloProvider>
	)
}

export default GraphQLProvider
