import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'
import { MutationResolvers } from '~modules/graphql'

const renewAccessToken: MutationResolvers['renewAccessToken'] = async (_, { email, code }) => {
	const { data: { token = '' } } = await (
		api.graphql(
			gql`
				mutation($email: String, $code: String) {
					verifyOneTimePasswordAuth(email: $email, code: $code) {
                        attempts_left
                        token
                    }
				}
			`,
		).mutation({ email, code })
	)

	return {
        token,
    }
}

export default renewAccessToken
