import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'
import { MutationResolvers } from '~modules/graphql'
import { $auth } from '~core/models'

const register: MutationResolvers['register'] = async (_, input) => {
    const { input: { password } } = input

    const { data: { createCustomerV2: data = {} } = {} } = await (
        api.graphql(
            gql`
                mutation ($input: CustomerCreateInput!) {
                    createCustomerV2(input: $input) {
                        customer {
                            lastname
                            firstname
                            email
                        }
                    }
                }
            `,
        ).mutation({ ...input })
    )

    const { data: { generateCustomerToken: { token = '' } } } = await (
        api.graphql(
            gql`
                mutation($email: String!, $password: String!) {
                    generateCustomerToken(email: $email, password: $password) {
                        token
                    }
                }
            `,
        ).mutation({
            email: data?.customer?.email,
            password,
        })
    )

    if (token) {
        $auth.setToken(token)
    }

    return null
}

export default register
