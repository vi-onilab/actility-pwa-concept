import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'
import { MutationResolvers } from '@pwa-concept/modules/graphql'

const changePassword: MutationResolvers['changePassword'] = async (_, { newPassword, currentPassword }) => {
    const { data: { changeCustomerPassword: { email: customerEmail = '' } } } = await (
        api.graphql(
            gql`
                mutation($currentPassword: String!, $newPassword: String!) {
                    changeCustomerPassword(currentPassword: $currentPassword, newPassword: $newPassword) {
                        email
                    }
                }
            `,
        ).mutation({ currentPassword, newPassword })
    )

    return {
        id: customerEmail,
        __typename: 'Customer',
    }
}

export default changePassword
