import * as Types from '../../../graphql';

import { gql } from '@apollo/client';

/**
* NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
* USE `yarn cli codegen`.
*/
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

export type CustomerOrderFragment = { __typename?: 'CustomerOrder', id?: string | null | undefined, number?: string | null | undefined, status?: string | null | undefined, date?: number | null | undefined, paymentMethod?: string | null | undefined, shippingAddress?: { __typename?: 'CustomerOrderAddress', firstName?: string | null | undefined, lastName?: string | null | undefined, telephone?: string | null | undefined, city?: string | null | undefined, company?: string | null | undefined, street?: string | null | undefined, countryCode?: number | null | undefined, postcode?: string | null | undefined } | null | undefined, billingAddress?: { __typename?: 'CustomerOrderAddress', firstName?: string | null | undefined, lastName?: string | null | undefined, telephone?: string | null | undefined, city?: string | null | undefined, company?: string | null | undefined, street?: string | null | undefined, countryCode?: number | null | undefined, postcode?: string | null | undefined } | null | undefined, totals?: { __typename?: 'CustomerOrderTotals', total?: number | null | undefined, subtotal?: number | null | undefined, totalShipping?: number | null | undefined, taxes?: Array<{ __typename?: 'CustomerOrderTotalsTax', rate?: number | null | undefined, title?: string | null | undefined, tax?: number | null | undefined } | null | undefined> | null | undefined, discounts?: Array<{ __typename?: 'CustomerOrderDiscount', label?: string | null | undefined, value?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined, products?: Array<{ __typename?: 'CustomerOrderProduct', id?: string | null | undefined, url?: string | null | undefined, name?: string | null | undefined, status?: string | null | undefined, discounts?: Array<{ __typename?: 'CustomerOrderDiscount', label?: string | null | undefined, value?: string | null | undefined } | null | undefined> | null | undefined, options?: Array<{ __typename?: 'CustomerOrderProductOption', label?: string | null | undefined, value?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export const CustomerOrderFragmentDoc = gql`
    fragment CustomerOrder on CustomerOrder {
  id
  number
  status
  date
  paymentMethod
  shippingAddress {
    firstName
    lastName
    telephone
    city
    company
    street
    countryCode
    postcode
  }
  billingAddress {
    firstName
    lastName
    telephone
    city
    company
    street
    countryCode
    postcode
  }
  totals {
    total
    subtotal
    totalShipping
    taxes {
      rate
      title
      tax
    }
    discounts {
      label
      value
    }
  }
  products {
    id
    url
    name
    discounts {
      label
      value
    }
    status
    options {
      label
      value
    }
  }
}
    `;