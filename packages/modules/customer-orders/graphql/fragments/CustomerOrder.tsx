import * as Types from '../../../graphql';

import { gql } from '@apollo/client';

/**
* NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
* USE `yarn cli codegen`.
*/
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

export type CustomerOrderFragment = { __typename?: 'CustomerOrder', id?: string | null, number?: string | null, status?: string | null, date?: number | null, paymentMethod?: string | null, shippingAddress?: { __typename?: 'CustomerOrderAddress', firstName?: string | null, lastName?: string | null, telephone?: string | null, city?: string | null, company?: string | null, street?: string | null, countryCode?: number | null, postcode?: string | null } | null, billingAddress?: { __typename?: 'CustomerOrderAddress', firstName?: string | null, lastName?: string | null, telephone?: string | null, city?: string | null, company?: string | null, street?: string | null, countryCode?: number | null, postcode?: string | null } | null, totals?: { __typename?: 'CustomerOrderTotals', total?: number | null, subtotal?: number | null, totalShipping?: number | null, taxes?: Array<{ __typename?: 'CustomerOrderTotalsTax', rate?: number | null, title?: string | null, tax?: number | null } | null> | null, discounts?: Array<{ __typename?: 'CustomerOrderDiscount', label?: string | null, value?: string | null } | null> | null } | null, products?: Array<{ __typename?: 'CustomerOrderProduct', id?: string | null, url?: string | null, name?: string | null, status?: string | null, discounts?: Array<{ __typename?: 'CustomerOrderDiscount', label?: string | null, value?: string | null } | null> | null, options?: Array<{ __typename?: 'CustomerOrderProductOption', label?: string | null, value?: string | null } | null> | null } | null> | null };

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