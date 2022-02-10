import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'
import { $auth } from '@pwa-concept/core/models'
import { MutationResolvers } from '~modules/graphql'

const login: MutationResolvers['login'] = async (_, { email, password }) => {
    const { data: { generateCustomerToken: { token = '' } } } = await (
        api.graphql(
            gql`
                mutation($email: String!, $password: String!) {
                    generateCustomerToken(email: $email, password: $password) {
                        token
                    }
                }
            `,
        ).mutation({ email, password })
    )

    if (token) {
        $auth.setToken(token)
    }

    return {
        token,
    }
}

export default login
