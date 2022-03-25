import { Resolvers } from '@pwa-concept/modules/graphql'

const CartProduct: Resolvers['CartProduct'] = {
    id: (_, __, { context }) => context?.uid || null,
    sku: (_, __, { context }) => context?.sku || null,
    name: (_, __, { context }) => context?.name || null,
}

export default CartProduct
