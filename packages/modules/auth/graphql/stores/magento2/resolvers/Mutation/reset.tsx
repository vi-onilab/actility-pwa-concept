import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'
import { MutationResolvers } from '@pwa-concept/modules/graphql'

const reset: MutationResolvers['reset'] = async (_, { email, code }) => {
    const { data: { verifyOneTimePassword: __context } } = await (
        api.graphql(
            gql`
                mutation($email: String!, $code: String!) {
                    verifyOneTimePassword(email: $email, code: $code) {
                        ... OneTimePasswordVerificationResult
                    }
                }
            `,
        ).mutation({ email, code })
    )

    return {
        __context,
        __typename: 'ResetToken',
    }
}

export default reset
