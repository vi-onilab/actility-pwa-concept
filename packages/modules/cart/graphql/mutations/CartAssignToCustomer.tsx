/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 * USE `yarn build:schema-types` or `yarn build`.
 */

/* eslint-disable */
/* tslint:disable */
/* @ts-nocheck */

import * as Types from '../../../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CartAssignToCustomerMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.CartAssignToCustomerInput>;
}>;


export type CartAssignToCustomerMutation = { __typename?: 'Mutation', cartAssignToCustomer?: { __typename?: 'Cart', id?: string | null | undefined, email?: string | null | undefined, totalQuantity?: number | null | undefined, totals?: { __typename?: 'CartTotals', taxes?: Array<{ __typename?: 'CartMoney', money?: string | null | undefined, label?: string | null | undefined } | null | undefined> | null | undefined, tax?: { __typename?: 'CartMoneyOnly', money?: string | null | undefined } | null | undefined, discounts?: Array<{ __typename?: 'CartMoney', money?: string | null | undefined, label?: string | null | undefined } | null | undefined> | null | undefined, shippings?: Array<{ __typename?: 'CartMoney', money?: string | null | undefined, label?: string | null | undefined } | null | undefined> | null | undefined, shipping?: { __typename?: 'CartMoney', money?: string | null | undefined, label?: string | null | undefined } | null | undefined, sub?: { __typename?: 'CartMoneyOnly', money?: string | null | undefined } | null | undefined, subTax?: { __typename?: 'CartMoneyOnly', money?: string | null | undefined } | null | undefined, grand?: { __typename?: 'CartMoneyOnly', money?: string | null | undefined } | null | undefined } | null | undefined, items?: Array<{ __typename?: 'CartItems', id?: string | null | undefined, quantity?: number | null | undefined, product?: { __typename?: 'CartProduct', id?: string | null | undefined, name?: string | null | undefined, sku?: string | null | undefined } | null | undefined, customizableOptions?: Array<{ __typename?: 'CartItemCustomizableOptions', id?: string | null | undefined, label?: string | null | undefined, changedLabel?: string | null | undefined, isRequired?: boolean | null | undefined, type?: string | null | undefined, values?: Array<{ __typename?: 'CartCustomizableOptionsValue', id?: string | null | undefined, label?: string | null | undefined, value?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined, prices?: { __typename?: 'CartItemPrices', discounts?: Array<{ __typename?: 'CartAmount', label?: string | null | undefined, amount?: { __typename?: 'CartMoney', money?: string | null | undefined, label?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined, price?: { __typename?: 'CartMoneyOnly', money?: string | null | undefined } | null | undefined, rowTotal?: { __typename?: 'CartMoneyOnly', money?: string | null | undefined } | null | undefined, rowTotalIncludingTax?: { __typename?: 'CartMoneyOnly', money?: string | null | undefined } | null | undefined, totalItemDiscount?: { __typename?: 'CartMoneyOnly', money?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined> | null | undefined, shippingAddresses?: Array<{ __typename?: 'CartShippingAddresses', city?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, postCode?: string | null | undefined, methods?: Array<{ __typename?: 'CartShippingMethod', available?: string | null | undefined, carrierCode?: string | null | undefined, carrierTitle?: string | null | undefined, methodCode?: string | null | undefined, methodTitle?: string | null | undefined, price?: { __typename?: 'CartMoneyOnly', money?: string | null | undefined } | null | undefined, priceExcludingTax?: { __typename?: 'CartMoneyOnly', money?: string | null | undefined } | null | undefined, priceIncludingTax?: { __typename?: 'CartMoneyOnly', money?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined, region?: { __typename?: 'CartShippingAddressRegion', code?: string | null | undefined, label?: string | null | undefined, regionId?: string | null | undefined } | null | undefined, selectedMethod?: { __typename?: 'CartSelectedShippingMethod', carrierCode?: string | null | undefined, carrierTitle?: string | null | undefined, methodCode?: string | null | undefined, methodTitle?: string | null | undefined, price?: { __typename?: 'CartMoneyOnly', money?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };


export const CartAssignToCustomerDocument = gql`
    mutation CartAssignToCustomer($input: CartAssignToCustomerInput) {
  cartAssignToCustomer(input: $input) @client {
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
        sku
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
}
    `;
export type CartAssignToCustomerMutationFn = Apollo.MutationFunction<CartAssignToCustomerMutation, CartAssignToCustomerMutationVariables>;

/**
 * __useCartAssignToCustomerMutation__
 *
 * To run a mutation, you first call `useCartAssignToCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCartAssignToCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cartAssignToCustomerMutation, { data, loading, error }] = useCartAssignToCustomerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCartAssignToCustomerMutation(baseOptions?: Apollo.MutationHookOptions<CartAssignToCustomerMutation, CartAssignToCustomerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CartAssignToCustomerMutation, CartAssignToCustomerMutationVariables>(CartAssignToCustomerDocument, options);
      }
export type CartAssignToCustomerMutationHookResult = ReturnType<typeof useCartAssignToCustomerMutation>;
export type CartAssignToCustomerMutationResult = Apollo.MutationResult<CartAssignToCustomerMutation>;
export type CartAssignToCustomerMutationOptions = Apollo.BaseMutationOptions<CartAssignToCustomerMutation, CartAssignToCustomerMutationVariables>;