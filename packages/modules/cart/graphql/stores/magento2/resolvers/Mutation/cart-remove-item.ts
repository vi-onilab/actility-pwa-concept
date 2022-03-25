import api from '@pwa-concept/core/api'
import { MutationResolvers } from '@pwa-concept/modules/graphql'
import { gql } from '@apollo/client'

const cartRemoveItem: MutationResolvers['cartRemoveItem'] = async (_, { input }) => {
    const { cartId, cartItemUid } = input

    const { data: { removeItemFromCart: { cart: __context = null } = {} } = {} } = await (
        api.graphql(gql`
            mutation(
                $input: RemoveItemFromCartInput!
            ) {
                removeItemFromCart(input: $input) {
                    cart {
                        ... Cart
                    }
                }
            }
        `).mutation({
            input: {
                cart_id: cartId,
                cart_item_id: cartItemUid,
            },
        })
    )

    if (!__context) return null

    return {
        __context,
        __typename: 'Cart',
    }
}

export default cartRemoveItem
