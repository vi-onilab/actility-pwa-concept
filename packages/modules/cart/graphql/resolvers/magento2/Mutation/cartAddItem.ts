import api from '@pwa-concept/core/api'
import { MutationResolvers } from '~modules/graphql'
import { cartAddItemMutation } from '../gql/cartAddItemMutation'
import { CartToCart } from '../casts'

const cartAddItem: MutationResolvers['cartAddItem'] = async (_, input) => {
    const { cartId, cartItems } = input

    const { data: { addProductsToCart: { cart = {} } = {} } = {} } = await (
        api.graphql(cartAddItemMutation).mutation({
            cartId,
            cartItems,
        })
    )

    return CartToCart(cart)
}

export default cartAddItem
