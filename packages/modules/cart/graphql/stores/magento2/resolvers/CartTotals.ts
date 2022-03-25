import { Resolvers } from '@pwa-concept/modules/graphql'

const CartTotals: Resolvers['CartTotals'] = {
    grand: (_, __, { context }) => ({
        money: context?.prices?.grandTotal?.value,
        __typename: 'CartMoneyOnly',
    }),
    sub: (_, __, { context }) => ({
        money: context?.prices?.subtotalExcludingTax?.value,
        __typename: 'CartMoneyOnly',
    }),
    subTax: (_, __, { context }) => ({
        money: context?.prices?.subtotalIncludingTax?.value,
        __typename: 'CartMoneyOnly',
    }),
    shippings: (_, __, { context }) => (context?.shippingAddresses?.length > 0 ? context?.shippingAddresses.map((result) => ({
        money: result?.selected_shipping_method?.amount?.value,
        label: result?.selected_shipping_method?.carrier_title,
        __typename: 'CartMoney',
    })) : null),
    shipping: (_, __, { context }) => (context?.shippingAddresses?.length > 0 ? {
        money: context?.shippingAddresses?.selected_shipping_method?.amount?.value,
        label: context?.shippingAddresses?.selected_shipping_method?.carrier_title,
        __typename: 'CartMoney',
    } : null),
    discounts: (_, __, { context }) => (context?.prices?.discounts?.length > 0 ? context?.prices?.discounts.map((result) => ({
        money: result?.amount?.value,
        label: result?.label,
        __typename: 'CartMoney',
    })) : null),
    tax: (_, __, { context }) => (context?.prices?.appliedTaxes?.length > 0 ? ({
        money: context?.prices?.appliedTaxes.reduce((acc: number, { value }) => (acc + (+value || 0)), 0),
        __typename: 'CartMoneyOnly',
    }) : null),
    taxes: (_, __, { context }) => (context?.prices?.appliedTaxes?.length > 0 ? context?.prices?.appliedTaxes.map((result) => ({
        money: result?.amount?.value,
        label: result?.label,
        __typename: 'CartMoney',
    })) : null),
}

export default CartTotals
