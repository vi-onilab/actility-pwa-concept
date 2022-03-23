import { gql } from 'graphql-tag'

export const cartFragment = gql`
    fragment CartFragment on Cart {
        prices {
            discounts {
                amount {
                    currency
                    value
                }
                label
            }
            subtotalExcludingTax: subtotal_excluding_tax {
                currency
                value
            }
            subtotalIncludingTax: subtotal_including_tax {
                currency
                value
            }
            subtotalWithDiscountExcludingTax: subtotal_with_discount_excluding_tax {
                currency
                value
            }
            appliedTaxes: applied_taxes {
                amount {
                    currency
                    value
                }
                label
            }
            grandTotal: grand_total {
                currency
                value
            }
        }

        items {
            uid
            id
            customizableOptions: customizable_options {
                id
                label
                changedLabel
                is_required
                type
                values {
                    id
                    label
                    value
                }
            }
            prices {
                discounts {
                    amount {
                        currency
                        value
                    }
                    label
                }
                price {
                    currency
                    value
                }
                rowTotal: row_total {
                    currency
                    value
                }
                rowTotalIncludingTax: row_total_including_tax {
                    currency
                    value
                }
                totalItemDiscount: total_item_discount {
                    currency
                    value
                }
            }
            product {
                uid
                name
                sku
            }
            quantity
        }
        shippingAddresses: shipping_addresses {
            available_shipping_methods {
                amount {
                    currency
                    value
                }
                available
                carrier_code
                carrier_title
                error_message
                method_code
                method_title
                price_excl_tax {
                    currency
                    value
                }
                price_incl_tax {
                    currency
                    value
                }
            }
            city
            company
            country {
                code
                label
            }
            customer_notes
            firstname
            items_weight

            lastname
            postcode
            region {
                code
                label
                region_id
            }
            selected_shipping_method {
                amount {
                    currency
                    value
                }
                carrier_code
                carrier_title
                method_code
                method_title
            }
            street
            telephone
        }
    }
`
