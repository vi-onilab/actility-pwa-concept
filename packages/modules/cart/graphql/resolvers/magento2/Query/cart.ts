import api from '@pwa-concept/core/api'
import { QueryResolvers } from '~modules/graphql'
import { cartQuery, customerCartQuery } from '../gql/cartQuery'
import { $cart, $auth } from '~core/models'
import { CartToCart } from '../casts'

const cart: QueryResolvers['cart'] = async (_, { cartId, isFull }) => {
    const isCustomerCart = $auth.isToken && !$cart.isId

    if (!isCustomerCart && cartId) {
        const { data: { cart = {} } = {} } = await (
            api.graphql(cartQuery).query({
                cartId,
                isFull,
            })
        )

        return CartToCart(cart)
    }

    if (isCustomerCart || !$cart.isId) {
        const { data: { customerCart = {} } = {} } = await (
            api.graphql(customerCartQuery).query({
                isFull,
            })
        )

        return CartToCart(customerCart)
    }

    return null
}

export default cart
