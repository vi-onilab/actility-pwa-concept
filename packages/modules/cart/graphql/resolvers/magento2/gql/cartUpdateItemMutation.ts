import { gql } from 'graphql-tag'
import { cartFragment } from './cartFragment'

export const cartUpdateItemMutation = gql`
    ${cartFragment}
    mutation(
        $input: UpdateCartItemsInput
    ) {
        updateCartItems(input: $input) {
            cart {
                id
                totalQuantity: total_quantity

                ...CartFragment
            }
        }
    }
`
