import { gql } from 'graphql-tag'
import { cartFragment } from './cartFragment'

export const cartQuery = gql`
    ${cartFragment}
    query(
        $cartId: String!
        $isFull: Boolean!
    ) {
        cart(
            cart_id: $cartId
        ) {
            id
            totalQuantity: total_quantity

            ...CartFragment @include(if: $isFull)
        }
    }
`

export const customerCartQuery = gql`
    ${cartFragment}
    query(
        $isFull: Boolean = false
    ) {
        customerCart {
            id @skip(if: $isFull)
            totalQuantity: total_quantity @skip(if: $isFull)

            ...CartFragment @include(if: $isFull)
        }
    }
`
