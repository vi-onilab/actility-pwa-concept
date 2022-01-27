import { ApolloClient, InMemoryCache } from '@apollo/client'
import { env } from '../../utils'

const apollo = new ApolloClient({
	uri: env('APP_GRAPHQL_URL'),
	cache: new InMemoryCache(),
})

const graphql = (
	document: Parameters<typeof apollo.mutate>[0]['mutation'] | Parameters<typeof apollo.query>[0]['query'],
) => ({
	query(variables) {
		return apollo.query<any>({
			query: document,
			variables,
		})
	},
	mutation(variables) {
		return apollo.mutate<any>({
			mutation: document,
			variables,
		})
	},
})

export default graphql
