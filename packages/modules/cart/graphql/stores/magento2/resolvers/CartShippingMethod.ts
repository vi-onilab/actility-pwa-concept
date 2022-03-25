import { Resolvers } from '@pwa-concept/modules/graphql'

const CartShippingMethod: Resolvers['CartShippingMethod'] = {
    methodCode: (_, __, { context }) => context?.method_code || null,
    methodTitle: (_, __, { context }) => context?.method_title || null,
    available: (_, __, { context }) => context?.available || null,
    carrierCode: (_, __, { context }) => context?.carrier_code || null,
    carrierTitle: (_, __, { context }) => context?.carrier_title || null,
    price: (_, __, { context }) => context?.amount?.value || null,
    priceExcludingTax: (_, __, { context }) => context?.price_excl_tax?.value || null,
    priceIncludingTax: (_, __, { context }) => context?.price_incl_tax?.value || null,
}

export default CartShippingMethod
