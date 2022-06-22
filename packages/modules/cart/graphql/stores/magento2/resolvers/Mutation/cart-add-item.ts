import { gql } from '@apollo/client'
import api from '@pwa-concept/core/api'
import { MutationResolvers } from '@pwa-concept/modules/graphql'

const cartAddItem: MutationResolvers['cartAddItem'] = async (_, input) => {
    const { cartId, cartItems } = input

    const { data: { addProductsToCart: { cart: __context = null, user_errors: errors = [] } = {} } = {} } = await (
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
                    user_errors {
                        message
                        code
                    }
                }
            }
        `).mutation({
            cartId,
            cartItems,
        })
    )

    if (errors?.[0]?.message?.length) throw new Error(errors?.[0]?.message)

    if (!__context) return null

    return {
        __context,
        __typename: 'Cart',
    }
}

export default cartAddItem
