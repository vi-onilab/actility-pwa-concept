import { Resolvers } from '@pwa-concept/modules/graphql'

const CartMoney: Resolvers['CartMoney'] = {
    money: ({ money = null } = {}) => money,
    label: ({ label = null } = {}) => label,
}

export default CartMoney
