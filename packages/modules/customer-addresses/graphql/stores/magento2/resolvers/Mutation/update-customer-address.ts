import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'
import { MutationResolvers } from '@pwa-concept/modules/graphql'

const updateCustomerAddress: MutationResolvers['updateCustomerAddress'] = async (_, input) => {
    const { id, input: address } = input

    const { data: { updateCustomerAddress: __context = null } = {} } = await (
        api.graphql(
            gql`
                mutation($id: Int!, $input: CustomerAddressInput!) {
                    updateCustomerAddress(id: $id, input: $input) {
                        ... CustomerAddress
                    }
                }
            `,
        ).mutation({ id: Number(id), input: { ...address } })
    )

    if (!__context) return null

    return {
        __context,
        __typename: 'CustomerAddress',
    }
}

export default updateCustomerAddress
