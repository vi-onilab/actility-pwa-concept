import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'
import { MutationResolvers } from '@pwa-concept/modules/graphql'

const updateEmail: MutationResolvers['updateEmail'] = async (_, { email, password }) => {
    const { data: { updateCustomerEmail: { customer: __context = null } = {} } } = await (
        api.graphql(
            gql`
                mutation($email: String!, $password: String!) {
                    updateCustomerEmail(email: $email, password: $password) {
                        customer {
                            ... Customer
                        }
                    }
                }
            `,
        ).mutation({ email, password })
    )

    if (!__context) return null

    return {
        __context,
        __typename: 'Customer',
    }
}

export default updateEmail
