import api from '@pwa-concept/core/api'
import { MutationResolvers } from '@pwa-concept/modules/graphql'
import { gql } from 'graphql-tag'
import { $auth } from '@pwa-concept/core/models'

const login: MutationResolvers['login'] = async (_, { email, password }) => {
    const { data: { generateCustomerToken: __context } } = await (
        api.graphql(
            gql`
                mutation($email: String!, $password: String!) {
                    generateCustomerToken(email: $email, password: $password) {
                        ... CustomerToken
                    }
                }
            `,
        ).mutation({ email, password })
    )

    if (__context?.token) {
        $auth.setToken(__context.token)
    }

    return {
        __context,
        __typename: 'AccessToken',
    }
}

export default login
