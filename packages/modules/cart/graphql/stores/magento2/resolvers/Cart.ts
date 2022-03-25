import { Resolvers } from '@pwa-concept/modules/graphql'

const Cart: Resolvers['Cart'] = {
    // TODO: We should use only uid for id, but deprecated id is required on Actility now
    id: (_, __, { context }) => context?.id || null,
    totalQuantity: (_, __, { context }) => context?.totalQuantity || null,
    email: (_, __, { context }) => context?.email || null,
    totals: (_, __, { context: __context }) => ({
        __context,
        __typename: 'CartTotals',
    }),
    prices: (_, __, { context: __context }) => ({
        __context,
        __typename: 'CartPrices',
    }),
    items: (_, __, { context }) => context?.items?.length > 0 ? context?.items.map((__context) => ({
        __context,
        __typename: 'CartItem',
    })) : null,
    shippingAddresses: (_, __, { context }) => context?.shippingAddresses?.length > 0 ? context?.shippingAddresses.map((__context) => ({
        __context,
        __typename: 'CartShippingAddresses',
    })) : null,
}

export default Cart
