import api from '@pwa-concept/core/api'
import { QueryResolvers } from '@pwa-concept/modules/graphql'
import { $auth, $cart } from '@pwa-concept/core/models'
import { gql } from '@apollo/client'

const cart: QueryResolvers['cart'] = async (_, { cartId }) => {
    const isCustomerCart = $auth.isToken && !$cart.isId

    if (!isCustomerCart && cartId) {
        const { data: { cart: __context = null } = {} } = await (
            api.graphql(gql`
                query(
                    $cartId: String!
                ) {
                    cart(cart_id: $cartId) {
                        ... Cart
                    }
                }
            `).query({
                cartId,
            })
        )

        if (!__context) return null

        return {
            __context,
            __typename: 'Cart',
        }
    }

    if (isCustomerCart || !$cart.isId) {
        const { data: { customerCart: __context = null } = {} } = await (
            api.graphql(gql`
                query {
                    customerCart {
                        ... Cart
                    }
                }
            `).query()
        )

        if (!__context) return null

        return {
            __context,
            __typename: 'Cart',
        }
    }

    return null
}

export default cart
