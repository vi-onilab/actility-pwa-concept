import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'
import { MutationResolvers } from '~modules/graphql'

const getAccessToken: MutationResolvers['getAccessToken'] = async (_, { email, password }) => {
	const { data: { token = '' } } = await (
		api.graphql(
			gql`
				mutation($email: String, $password: String) {
					generateCustomerToken(email: $email, password: $password) {
						token
					}
				}
			`,
		).mutation({ email, password })
	)

	return {
		token
	}
}

export default getAccessToken
