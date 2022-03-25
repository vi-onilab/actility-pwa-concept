import { Resolvers } from '@pwa-concept/modules/graphql'

const CartItemPrices: Resolvers['CartItemPrices'] = {
    price: (_, __, { context }) => ({
        money: context?.prices?.price?.value,
        __typename: 'CartMoneyOnly',
    }),
    discounts: (_, __, { context }) => (context?.discounts?.length > 0 ? context?.discounts.map((result) => ({
        money: result?.amount?.value,
        label: result?.label,
        __typename: 'CartMoney',
    })) : null),
    totalItemDiscount: (_, __, { context }) => ({
        money: context?.prices?.totalItemDiscount?.value,
        __typename: 'CartMoneyOnly',
    }),
    rowTotal: (_, __, { context }) => ({
        money: context?.prices?.rowTotal?.value,
        __typename: 'CartMoneyOnly',
    }),
    rowTotalIncludingTax: (_, __, { context }) => ({
        money: context?.prices?.rowTotalIncludingTax?.value,
        __typename: 'CartMoneyOnly',
    }),
}

export default CartItemPrices
