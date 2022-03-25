import { Resolvers } from '@pwa-concept/modules/graphql'

const CartAmount: Resolvers['CartAmount'] = {
    amount: (_, __, { context }) => null,
    label: (_, __, { context }) => null,
}

export default CartAmount
