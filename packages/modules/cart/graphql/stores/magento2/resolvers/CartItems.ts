import { Resolvers } from '@pwa-concept/modules/graphql'

const CartItems: Resolvers['CartItems'] = {
    id: (_, __, { context }) => context?.id || null,
    quantity: (_, __, { context }) => context?.quantity || null,
    product: (_, __, { context }) => ({
        __context: context?.product,
        __typename: 'CartProduct',
    }),
    prices: (_, __, { context: __context }) => ({
        __context,
        __typename: 'CartItemPrices',
    }),
    customizableOptions: (_, __, { context }) => (context?.customizableOptions?.length > 0 ? context?.customizableOptions.map((__context) => ({
        __context,
        __typename: 'CartItemCustomizableOptions',
    })) : null),
}

export default CartItems
