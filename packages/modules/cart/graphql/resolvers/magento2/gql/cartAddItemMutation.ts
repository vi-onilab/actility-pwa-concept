import { gql } from 'graphql-tag'
import { cartFragment } from './cartFragment'

export const cartAddItemMutation = gql`
    ${cartFragment}
    mutation(
        $cartId: String!
        $cartItems: [CartItemInput!]!
    ) {
        addProductsToCart(
            cartId: $cartId
            cartItems: $cartItems
        ) {
            cart {
                id
                totalQuantity: total_quantity

                ...CartFragment
            }
        }
    }
`
