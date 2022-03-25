import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'
import { MutationResolvers } from '@pwa-concept/modules/graphql'

const changePassword: MutationResolvers['changePassword'] = async (_, { newPassword, currentPassword }) => {
    const { data: { changeCustomerPassword: __context = null } = {} } = await (
        api.graphql(
            gql`
                mutation($currentPassword: String!, $newPassword: String!) {
                    changeCustomerPassword(currentPassword: $currentPassword, newPassword: $newPassword) {
                        ... Customer
                    }
                }
            `,
        ).mutation({ currentPassword, newPassword })
    )

    if (!__context) return null

    return {
        __context,
        __typename: 'Customer',
    }
}

export default changePassword
