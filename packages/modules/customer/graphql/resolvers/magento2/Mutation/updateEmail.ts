import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'
import { MutationResolvers } from '@pwa-concept/modules/graphql'

const updateEmail: MutationResolvers['updateEmail'] = async (_, { email, password }) => {
    const { data: { updateCustomerEmail: { customer: { email: customerEmail = '' } } } } = await (
        api.graphql(
            gql`
                mutation($email: String!, $password: String!) {
                    updateCustomerEmail(email: $email, password: $password) {
                        customer {
                            email
                        }
                    }
                }
            `,
        ).mutation({ email, password })
    )

    return {
        id: customerEmail,
        email: customerEmail,
        __typename: 'Customer',
    }
}

export default updateEmail
