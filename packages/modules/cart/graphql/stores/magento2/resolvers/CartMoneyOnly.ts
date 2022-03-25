import { Resolvers } from '@pwa-concept/modules/graphql'

const CartMoneyOnly: Resolvers['CartMoneyOnly'] = {
    money: ({ money = null } = {}) => money,
}

export default CartMoneyOnly
