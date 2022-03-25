import api from '@pwa-concept/core/api'
import { MutationResolvers } from '@pwa-concept/modules/graphql'
import { gql } from '@apollo/client'

const cartAssignToCustomer: MutationResolvers['cartAssignToCustomer'] = async (_, { input }) => {
    const { data: { mergeCarts: __context = null } = {} } = await (
        api.graphql(gql`
            mutation(
                $sourceCartId: String!
                $destinationCartId: String
            ) {
                mergeCarts (
                    destination_cart_id: $destinationCartId
                    source_cart_id: $sourceCartId
                ) {
                    ... Cart
                }
            }
        `).mutation({
            ...input,
        })
    )

    if (!__context) return null

    return {
        __context,
        __typename: 'Cart',
    }
}

export default cartAssignToCustomer
