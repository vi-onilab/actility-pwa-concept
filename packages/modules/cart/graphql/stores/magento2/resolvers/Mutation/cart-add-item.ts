import api from '@pwa-concept/core/api'
import { MutationResolvers } from '@pwa-concept/modules/graphql'
import { gql } from '@apollo/client'

const cartAddItem: MutationResolvers['cartAddItem'] = async (_, input) => {
    const { cartId, cartItems } = input

    const { data: { addProductsToCart: { cart: __context = null } = {} } = {} } = await (
        api.graphql(gql`
            mutation(
                $cartId: String!
                $cartItems: [CartItemInput!]!
            ) {
                addProductsToCart(
                    cartId: $cartId
                    cartItems: $cartItems
                ) {
                    cart {
                        ... Cart
                    }
                }
            }
        `).mutation({
            cartId,
            cartItems,
        })
    )

    if (!__context) return null

    return {
        __context,
        __typename: 'Cart',
    }
}

export default cartAddItem
