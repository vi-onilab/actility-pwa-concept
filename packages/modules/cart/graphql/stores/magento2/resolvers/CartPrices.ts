import { Resolvers } from '@pwa-concept/modules/graphql'

// TODO: Dick know what is it
const CartPrices: Resolvers['CartPrices'] = {
    appliedTaxes: (_, __, { context }) => null,
    discounts: (_, __, { context }) => null,
    grandTotal: (_, __, { context }) => null,
    subtotalExcludingTax: (_, __, { context }) => null,
    subtotalIncludingTax: (_, __, { context }) => null,
    subtotalWithDiscountExcludingTax: (_, __, { context }) => null,
}

export default CartPrices
