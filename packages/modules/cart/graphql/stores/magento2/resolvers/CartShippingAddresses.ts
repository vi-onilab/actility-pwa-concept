import { Resolvers } from '@pwa-concept/modules/graphql'

const CartShippingAddresses: Resolvers['CartShippingAddresses'] = {
    firstName: (_, __, { context }) => context?.firstname || null,
    lastName: (_, __, { context }) => context?.lastname || null,
    city: (_, __, { context }) => context?.city || null,
    postCode: (_, __, { context }) => context?.postcode || null,
    region: (_, __, { context: __context }) => ({
        __context,
        __typename: 'CartShippingAddressRegion',
    }),
    methods: (_, __, { context }) => (context?.available_shipping_methods?.length > 0 ? context?.available_shipping_methods.map((__context) => ({
        __context,
        __typename: 'CartSelectedShippingMethod',
    })) : null),
    selectedMethod: (_, __, { context }) => ({
        __context: context?.selected_shipping_method,
        __typename: 'CartSelectedShippingMethod',
    }),
}

export default CartShippingAddresses
