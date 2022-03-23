import { gql } from 'graphql-tag'
import { cartFragment } from './cartFragment'

export const cartRemoveItemMutation = gql`
    ${cartFragment}
    mutation(
        $input: RemoveItemFromCartInput!
    ) {
        removeItemFromCart(input: $input) {
            cart {
                id
                totalQuantity: total_quantity

                ...CartFragment
            }
        }
    }
`
