import { Resolvers } from '@pwa-concept/modules/graphql'

const CustomerOrder: Resolvers['CustomerOrder'] = {
    id: (_, __, { context }) => context?.id,
    number: (_, __, { context }) => context?.order_number,
    status: (_, __, { context }) => context?.status,
    date: (_, __, { context }) => context?.order_date,
    paymentMethod: (_, __, { context }) => context?.payment_methods[0]?.name,
    totals: (_, __, { context }) => ({
        __context: context,
        __typename: 'CustomerOrderTotals',
    }),
    products: (_, __, { context }) => context?.items ? context?.items?.map?.((__context) => ({
        __context,
        __typename: 'CustomerOrderProduct',
    })) : null,
    shippingAddress: (_, __, { context }) => ({
        __context: context?.shipping_address,
        __typename: 'CustomerOrderAddress',
    }),
    billingAddress: (_, __, { context }) => ({
        __context: context?.billing_address,
        __typename: 'CustomerOrderAddress',
    }),
    shippingMethod: (_, __, { context }) => context?.shipping_method,
}

export default CustomerOrder
