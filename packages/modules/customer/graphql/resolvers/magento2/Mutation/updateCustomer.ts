import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'
import { MutationResolvers } from '~modules/graphql'

const updateCustomer: MutationResolvers['updateCustomer'] = async (_, input) => {
    const { data: { updateCustomerV2: data = {} } } = await (
        api.graphql(
            gql`
                mutation($input: CustomerUpdateInput!) {
                    updateCustomerV2(input: $input) {
                        customer {
                            email
                            firstname
                            lastname
                            is_subscribed
                            middlename
                            date_of_birth
                            gender
                        }
                    }
                }
            `,
        ).mutation({ ...input })
    )

    return {
        id: data?.email,
        firstName: data?.firstname,
        lastName: data?.lastname,
        email: data?.email,
        middleName: data?.middlename,
        dateOfBirth: data?.date_of_birth,
        gender: data?.gender,
        isSubscribed: data?.is_subscribed,
        __typename: 'Customer',
    }
}

export default updateCustomer
