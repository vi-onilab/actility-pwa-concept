import { CustomerOrder } from '@pwa-concept/modules/graphql'

const CustomerOrdersToOrder = (order): CustomerOrder => {
    if (!order) return null

    return {
        id: order?.id,
        number: order?.order_number,
        status: order?.status,
        date: order?.order_date,
        paymentMethod: order?.payment_methods[0]?.name,
        totals: {
            total: order?.total?.grand_total?.value,
            subtotal: order?.total?.grand_total?.value,
            totalShipping: order?.total?.total_shipping?.value,
            taxes: [...order?.total?.taxes?.map(({ amount, rate, title }) => ({
                rate,
                title,
                tax: amount.value,
            }))?.filter?.(Boolean) || null],
            discounts: [...order?.total?.discounts.map(({ label, amount }) => ({
                label,
                value: amount.value,
            }))?.filter?.(Boolean) || null],
            __typename: 'CustomerOrderTotals',
        },
        products: [...order?.items.map(({
            id, product_url_key: productUrlKey, product_name: productName,
            discounts, status, selected_options: selectedOptions,
        }) => ({
            id,
            url: productUrlKey,
            name: productName,
            discounts: [...discounts?.map(({ label, amount }) => ({
                label,
                value: amount.value,
            }))],
            status,
            options: [...selectedOptions?.map(({ label, value }) => ({
                label,
                value,
            }))],
        }))?.filter?.(Boolean) || null],
        shippingAddress: {
            firstName: order.shipping_address?.firstname,
            lastName: order.shipping_address?.lastname,
            telephone: order.shipping_address?.telephone,
            city: order.shipping_address?.city,
            company: order.shipping_address?.company,
            street: order.shipping_address?.street,
            countryCode: order.shipping_address?.country_code,
            postcode: order.shipping_address?.postcode,
            __typename: 'Address',
        },
        billingAddress: {
            firstName: order.billing_address?.firstname,
            lastName: order.billing_address?.lastname,
            telephone: order.billing_address?.telephone,
            city: order.billing_address?.city,
            company: order.billing_address?.company,
            street: order.billing_address?.street,
            countryCode: order.billing_address?.country_code,
            postcode: order.billing_address?.postcode,
            __typename: 'Address',
        },
        shippingMethod: order.shipping_method,
        __typename: 'CustomerOrder',
    }
}

export default CustomerOrdersToOrder
