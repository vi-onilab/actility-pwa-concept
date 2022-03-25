import { Resolvers } from '@pwa-concept/modules/graphql'

const CustomerOrderTotals: Resolvers['CustomerOrderTotals'] = {
    total: (_, __, { context }) => context?.total?.grand_total?.value,
    subtotal: (_, __, { context }) => context?.total?.grand_total?.value,
    totalShipping: (_, __, { context }) => context?.total?.total_shipping?.value,
    taxes: (_, __, { context }) => context?.total?.taxes ? (context?.total?.taxes?.map((__context) => ({
        __context,
        __typename: 'CustomerOrderTotalsTax',
    }))) : null,
    discounts: (_, __, { context }) => context?.total?.discounts ? (context?.total?.discounts?.map((__context) => ({
        __context,
        __typename: 'CustomerOrderDiscount',
    }))) : null,
}

export default CustomerOrderTotals
