import { CartTotals } from '~modules/graphql'

const CartPricesToTotals = (prices, shippingAddresses): CartTotals => {
    if (!prices) return null

    const taxes = (prices?.appliedTaxes || []).map((result) => ({
        money: result?.amount?.value,
        label: result?.label,
    }))

    const discounts = (prices?.discounts || []).map((result) => ({
        money: result?.amount?.value,
        label: result?.label,
    }))

    const shippings = shippingAddresses.map((result) => ({
        money: result?.selected_shipping_method?.amount?.value,
        label: result?.selected_shipping_method?.carrier_title,
    }))

    return {
        taxes,
        tax: {
            money: taxes.reduce((acc, { value }) => acc + (value || 0), 0),
        },
        discounts,
        shippings,
        shipping: shippings?.[0] || null,
        sub: {
            money: prices?.subtotalExcludingTax?.value,
        },
        subTax: {
            money: prices?.subtotalIncludingTax?.value,
        },
        grand: {
            money: prices?.grandTotal?.value,
        },
    }
}

export default CartPricesToTotals
