import { onError } from '@apollo/client/link/error'
import { $auth, $clean } from '@pwa-concept/core/models'

const authErrorLink = (
	onError(({ graphQLErrors }) => {
		if (graphQLErrors) {
			const authError = graphQLErrors.find(({ extensions }) => extensions?.category === 'graphql-authorization')

			if (authError && $auth.isToken) {
				$clean.logout()
			}
		}
	})
)

export default authErrorLink
