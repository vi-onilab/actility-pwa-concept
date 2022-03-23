import { gql } from 'graphql-tag'
import { cartFragment } from './cartFragment'

export const cartAssignToCustomerMutation = gql`
    ${cartFragment}
    mutation(
        $sourceCartId: String!
        $destinationCartId: String
    ) {
        mergeCarts (
            destination_cart_id: $destinationCartId
            source_cart_id: $sourceCartId
        ) {
            id
            totalQuantity: total_quantity

            ...CartFragment
        }
    }
`
