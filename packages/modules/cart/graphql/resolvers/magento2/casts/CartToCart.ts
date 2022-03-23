import { Cart } from '~modules/graphql'
import CartPricesToTotals from './CartPricesToTotals'

const CartToCart = (cart): Cart => {
    if (!cart) return null

    const totals = CartPricesToTotals(cart?.prices, cart?.shippingAddresses)
    // TODO: We should use only uid for id, but deprecated id is required on Actility now
    return {
        id: cart?.id,
        totalQuantity: cart?.totalQuantity,
        email: cart?.email || null,
        totals,
        items: (cart?.items || []).map((item) => ({
            id: item.id,
            quantity: item.quantity,
            product: {
                id: item.product.uid,
                sku: item.product.sku,
                name: item.product.name,
                __typename: 'CartProduct',
            },
            prices: {
                discounts: (item?.discounts || []).map((result) => ({
                    money: result?.amount?.value,
                    label: result?.label,
                })),
                price: {
                    money: item?.prices?.price?.value,
                },
                rowTotal: {
                    money: item?.prices?.rowTotal?.value,
                },
                rowTotalIncludingTax: {
                    money: item?.prices?.rowTotalIncludingTax?.value,
                },
                totalItemDiscount: {
                    money: item?.prices?.totalItemDiscount?.value,
                },
                __typename: 'CartItemPrices',
            },
            customizableOptions: (item.customizableOptions || []).map((option) => ({
                changedLabel: option.changedLabel,
                id: option.id,
                isRequired: option.is_required,
                label: option.label,
                type: option.type,
                values: (option.values || []).map((optionValue) => ({
                    id: optionValue.id,
                    label: optionValue.label,
                    value: optionValue.value,
                    __typename: 'CartCustomizableOptionsValue',
                })),
                __typename: 'CartItemCustomizableOptions',
            })),
            __typename: 'CartItem',
        })),
        shippingAddresses: (cart?.shippingAddresses || []).map((address) => ({
            methods: (address?.available_shipping_methods || []).map((method) => ({
                price: method?.amount?.value,
                available: method.available,
                carrierCode: method.carrier_code,
                carrierTitle: method.carrier_title,
                methodCode: method.method_code,
                methodTitle: method.method_title,
                priceExcludingTax: method?.price_excl_tax?.value,
                priceIncludingTax: method?.price_incl_tax?.value,
            })),
            city: address?.city,
            firstName: address?.firstname,
            lastName: address?.lastname,
            postCode: address?.postcode,
            region: {
                code: address?.region.code,
                label: address?.region.labe,
                regionId: address?.region.region_id,
            },
            selectedMethod: {
                price: {
                    money: address?.selected_shipping_method.amount.value,
                },
                carrierCode: address?.selected_shipping_method.carrier_code,
                carrierTitle: address?.selected_shipping_method.carrier_title,
                methodCode: address?.selected_shipping_method.method_code,
                methodTitle: address?.selected_shipping_method.method_title,
            },
        })),
        __typename: 'Cart',
    }
}

export default CartToCart
