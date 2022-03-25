import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'
import { MutationResolvers } from '@pwa-concept/modules/graphql'

const createCustomerAddress: MutationResolvers['createCustomerAddress'] = async (_, input) => {
    const { data: { createCustomerAddress: __context = null } = {} } = await (
        api.graphql(
            gql`
                mutation($input: CustomerAddressInput!) {
                    createCustomerAddress(input: $input) {
                        ... CustomerAddress
                    }
                }
            `,
        ).mutation({ ...input })
    )

    if (!__context) return null

    return {
        __context,
        __typename: 'CustomerAddress',
    }
}

export default createCustomerAddress
