import { Resolvers } from '@pwa-concept/modules/graphql'

const CartSelectedShippingMethod: Resolvers['CartSelectedShippingMethod'] = {
    methodCode: (_, __, { context }) => context?.method_code || null,
    methodTitle: (_, __, { context }) => context?.method_title || null,
    price: (_, __, { context }) => ({
        money: context?.amount?.value,
        __typename: 'CartMoneyOnly',
    }),
    carrierCode: (_, __, { context }) => context?.carrier_code || null,
    carrierTitle: (_, __, { context }) => context?.carrier_title || null,
}

export default CartSelectedShippingMethod
