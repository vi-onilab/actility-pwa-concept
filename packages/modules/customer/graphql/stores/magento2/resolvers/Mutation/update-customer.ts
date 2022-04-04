import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'
import { MutationResolvers } from '@pwa-concept/modules/graphql'

const updateCustomer: MutationResolvers['updateCustomer'] = async (_, { input }) => {
    const {
        isSubscribed,
        firstName,
        gender,
        lastName,
        middleName,
        dateOfBirth,
    } = input

    const { data: { updateCustomerV2: { customer: __context = null } = {} } = {} } = await (
        api.graphql(
            gql`
                mutation($input: CustomerUpdateInput!) {
                    updateCustomerV2(input: $input) {
                        customer {
                            ... Customer
                        }
                    }
                }
            `,
        ).mutation({
            input: {
                is_subscribed: isSubscribed,
                firstname: firstName,
                middlename: middleName,
                lastname: lastName,
                gender,
                date_of_birth: dateOfBirth,
            },
        })
    )

    if (!__context) return null

    return {
        __context,
        __typename: 'Customer',
    }
}

export default updateCustomer
