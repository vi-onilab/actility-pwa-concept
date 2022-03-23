import api from '@pwa-concept/core/api'
import { MutationResolvers } from '~modules/graphql'
import { cartUpdateItemMutation } from '../gql/cartUpdateItemMutation'
import { CartToCart } from '../casts'

const cartUpdateItem: MutationResolvers['cartUpdateItem'] = async (_, { input }) => {
    const { cartId, cartItems } = input
    const items = cartItems[0]

    const { data: { updateCartItems: { cart = {} } = {} } = {} } = await (
        api.graphql(cartUpdateItemMutation).mutation({
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

    return CartToCart(cart)
}

export default cartUpdateItem
