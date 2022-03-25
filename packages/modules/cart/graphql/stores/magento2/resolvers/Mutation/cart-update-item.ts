import api from '@pwa-concept/core/api'
import { MutationResolvers } from '@pwa-concept/modules/graphql'
import { gql } from '@apollo/client'

const cartUpdateItem: MutationResolvers['cartUpdateItem'] = async (_, { input }) => {
    const { cartId, cartItems } = input
    const items = cartItems[0]

    const { data: { updateCartItems: { cart: __context = null } = {} } = {} } = await (
        api.graphql(gql`
            mutation(
                $input: UpdateCartItemsInput
            ) {
                updateCartItems(input: $input) {
                    cart {
                        ... Cart
                    }
                }
            }
        `).mutation({
            input: {
                cart_id: cartId,
                cart_items: [
                    {
                        cart_item_id: items.cartItemId,
                        quantity: items.quantity,
                    },
                ],
            },
        })
    )

    if (!__context) return null

    return {
        __context,
        __typename: 'Cart',
    }
}

export default cartUpdateItem
