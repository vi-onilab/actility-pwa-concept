import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'
import { MutationResolvers } from '@pwa-concept/modules/graphql'

const deleteCustomerAddress: MutationResolvers['deleteCustomerAddress'] = async (_, input) => {
    const { id } = input

    const { data: { deleteCustomerAddress } = {} } = await (
        api.graphql(
            gql`
                mutation($id: Int!) {
                    deleteCustomerAddress(id: $id)
                }
            `,
        ).mutation({ id: Number(id) })
    )

    return deleteCustomerAddress
}

export default deleteCustomerAddress
