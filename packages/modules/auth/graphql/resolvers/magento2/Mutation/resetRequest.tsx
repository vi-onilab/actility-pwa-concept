import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'
import { MutationResolvers } from '@pwa-concept/modules/graphql'

const resetRequest: MutationResolvers['resetRequest'] = async (_, { email }) => {
    await (
        api.graphql(
            gql`
                mutation($email: String!) {
                    requestPasswordResetEmail(email: $email)
                }
            `,
        ).mutation({ email })
    )

    return null
}

export default resetRequest
