import api from '@pwa-concept/core/api'
import { MutationResolvers } from '~modules/graphql'
import { cartRemoveItemMutation } from '../gql/cartRemoveItemMutation'
import { CartToCart } from '../casts'

const cartRemoveItem: MutationResolvers['cartRemoveItem'] = async (_, { input }) => {
    const { cartId, cartItemUid } = input

    const { data: { removeItemFromCart: { cart = {} } = {} } = {} } = await (
        api.graphql(cartRemoveItemMutation).mutation({
            input: {
                cart_id: cartId,
                cart_item_id: cartItemUid,
            },
        })
    )

    return CartToCart(cart)
}

export default cartRemoveItem
