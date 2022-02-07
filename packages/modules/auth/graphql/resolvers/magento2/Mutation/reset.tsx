import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'
import { MutationResolvers } from '~modules/graphql'

const reset: MutationResolvers['reset'] = async (_, { email, code }) => {
    const { data: { verifyOneTimePassword: { token = '' } } } = await (
        api.graphql(
            gql`
                mutation($email: String!, $code: String!) {
                    verifyOneTimePassword(email: $email, code: $code) {
                        attempts_left
                        token
                    }
                }
            `,
        ).mutation({ email, code })
    )

    return {
        token
    }
}

export default reset
