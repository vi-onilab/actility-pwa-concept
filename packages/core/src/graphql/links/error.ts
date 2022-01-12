import { onError } from '@apollo/client/link/error'

const errorLink = (
	onError(({ graphQLErrors, networkError }) => {
		if (graphQLErrors) {
			graphQLErrors.map(
				({ message, locations, path }) => (
					console.log(
						`[GQL]: Message: ${message}, Location: ${JSON.stringify(locations)}, Path: ${path}`,
					)),
			)
		}
		if (networkError) {
			console.log(`[GQL]: Network: ${networkError}`)
		}
	})
)

export default errorLink
