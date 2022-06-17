import * as Types from '../../../graphql';

import { gql } from '@apollo/client';
import { ProductImageFragmentDoc } from '../../../product/graphql/fragments/ProductImage';
import { ProductPriceFragmentDoc } from '../../../product/graphql/fragments/ProductPrice';

/**
* NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
* USE `yarn cli codegen`.
*/
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

export type CartFragment = { __typename?: 'Cart', id?: string | null, email?: string | null, totalQuantity?: number | null, totals?: { __typename?: 'CartTotals', taxes?: Array<{ __typename?: 'CartMoney', money?: string | null, label?: string | null } | null> | null, tax?: { __typename?: 'CartMoneyOnly', money?: string | null } | null, discounts?: Array<{ __typename?: 'CartMoney', money?: string | null, label?: string | null } | null> | null, shippings?: Array<{ __typename?: 'CartMoney', money?: string | null, label?: string | null } | null> | null, shipping?: { __typename?: 'CartMoney', money?: string | null, label?: string | null } | null, sub?: { __typename?: 'CartMoneyOnly', money?: string | null } | null, subTax?: { __typename?: 'CartMoneyOnly', money?: string | null } | null, grand?: { __typename?: 'CartMoneyOnly', money?: string | null } | null } | null, items?: Array<{ __typename?: 'CartItems', id?: string | null, quantity?: number | null, product?: { __typename?: 'Product', id?: string | null, name?: string | null, url?: string | null, stock?: { __typename?: 'ProductStock', name?: string | null, type?: Types.ProductStockType | null } | null, thumbnail?: { __typename?: 'ProductImage', id?: string | null, description?: string | null, url?: string | null } | null, price?: { __typename?: 'ProductPrice', discount?: number | null, isRange?: boolean | null, badges?: Array<{ __typename?: 'ProductPriceBadge', name?: string | null } | null> | null, current?: { __typename?: 'Money', value?: number | null, text?: string | null, currency?: string | null } | null, initial?: { __typename?: 'Money', value?: number | null, text?: string | null, currency?: string | null } | null } | null } | null, customizableOptions?: Array<{ __typename?: 'CartItemCustomizableOptions', id?: string | null, label?: string | null, changedLabel?: string | null, isRequired?: boolean | null, type?: string | null, values?: Array<{ __typename?: 'CartCustomizableOptionsValue', id?: string | null, label?: string | null, value?: string | null } | null> | null } | null> | null, prices?: { __typename?: 'CartItemPrices', discounts?: Array<{ __typename?: 'CartAmount', label?: string | null, amount?: { __typename?: 'CartMoney', money?: string | null, label?: string | null } | null } | null> | null, price?: { __typename?: 'CartMoneyOnly', money?: string | null } | null, rowTotal?: { __typename?: 'CartMoneyOnly', money?: string | null } | null, rowTotalIncludingTax?: { __typename?: 'CartMoneyOnly', money?: string | null } | null, totalItemDiscount?: { __typename?: 'CartMoneyOnly', money?: string | null } | null } | null } | null> | null, shippingAddresses?: Array<{ __typename?: 'CartShippingAddresses', city?: string | null, firstName?: string | null, lastName?: string | null, postCode?: string | null, methods?: Array<{ __typename?: 'CartShippingMethod', available?: string | null, carrierCode?: string | null, carrierTitle?: string | null, methodCode?: string | null, methodTitle?: string | null, price?: { __typename?: 'CartMoneyOnly', money?: string | null } | null, priceExcludingTax?: { __typename?: 'CartMoneyOnly', money?: string | null } | null, priceIncludingTax?: { __typename?: 'CartMoneyOnly', money?: string | null } | null } | null> | null, region?: { __typename?: 'CartShippingAddressRegion', code?: string | null, label?: string | null, regionId?: string | null } | null, selectedMethod?: { __typename?: 'CartSelectedShippingMethod', carrierCode?: string | null, carrierTitle?: string | null, methodCode?: string | null, methodTitle?: string | null, price?: { __typename?: 'CartMoneyOnly', money?: string | null } | null } | null } | null> | null };

export const CartFragmentDoc = gql`
    fragment Cart on Cart {
  id
  email
  totalQuantity
  totals {
    taxes {
      money
      label
    }
    tax {
      money
    }
    discounts {
      money
      label
    }
    shippings {
      money
      label
    }
    shipping {
      money
      label
    }
    sub {
      money
    }
    subTax {
      money
    }
    grand {
      money
    }
  }
  items {
    id
    quantity
    product {
      id
      name
      url
      stock {
        name
        type
      }
      thumbnail {
        ...ProductImage
      }
      price {
        ...ProductPrice
      }
    }
    customizableOptions {
      id
      label
      changedLabel
      isRequired
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
          money
          label
        }
        label
      }
      price {
        money
      }
      rowTotal {
        money
      }
      rowTotalIncludingTax {
        money
      }
      totalItemDiscount {
        money
      }
    }
  }
  shippingAddresses {
    methods {
      price {
        money
      }
      available
      carrierCode
      carrierTitle
      methodCode
      methodTitle
      priceExcludingTax {
        money
      }
      priceIncludingTax {
        money
      }
    }
    city
    firstName
    lastName
    postCode
    region {
      code
      label
      regionId
    }
    selectedMethod {
      price {
        money
      }
      carrierCode
      carrierTitle
      methodCode
      methodTitle
    }
  }
}
    ${ProductImageFragmentDoc}
${ProductPriceFragmentDoc}`;