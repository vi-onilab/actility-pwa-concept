import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'
import { MutationResolvers } from '~modules/graphql'

const deleteCustomerAddress: MutationResolvers['deleteCustomerAddress'] = async (_, id) => {
    const { data: { deleteCustomerAddress } = {} } = await (
        api.graphql(
            gql`
                mutation($id: Int) {
                    deleteCustomerAddress
                }
            `,
        ).mutation({ id: Number(id) })
    )

    return deleteCustomerAddress
}

export default deleteCustomerAddress
