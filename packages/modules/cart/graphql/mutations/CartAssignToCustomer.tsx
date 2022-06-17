import * as Types from '../../../graphql';

import { gql } from '@apollo/client';
import { CartFragmentDoc } from '../fragments/Cart';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@pwa-concept/core/graphql/hooks';

/**
* NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
* USE `yarn cli codegen`.
*/
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

const defaultOptions = {} as const;
export type CartAssignToCustomerMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.CartAssignToCustomerInput>;
}>;


export type CartAssignToCustomerMutation = { __typename?: 'Mutation', cartAssignToCustomer?: { __typename?: 'Cart', id?: string | null, email?: string | null, totalQuantity?: number | null, totals?: { __typename?: 'CartTotals', taxes?: Array<{ __typename?: 'CartMoney', money?: string | null, label?: string | null } | null> | null, tax?: { __typename?: 'CartMoneyOnly', money?: string | null } | null, discounts?: Array<{ __typename?: 'CartMoney', money?: string | null, label?: string | null } | null> | null, shippings?: Array<{ __typename?: 'CartMoney', money?: string | null, label?: string | null } | null> | null, shipping?: { __typename?: 'CartMoney', money?: string | null, label?: string | null } | null, sub?: { __typename?: 'CartMoneyOnly', money?: string | null } | null, subTax?: { __typename?: 'CartMoneyOnly', money?: string | null } | null, grand?: { __typename?: 'CartMoneyOnly', money?: string | null } | null } | null, items?: Array<{ __typename?: 'CartItems', id?: string | null, quantity?: number | null, product?: { __typename?: 'Product', id?: string | null, name?: string | null, url?: string | null, stock?: { __typename?: 'ProductStock', name?: string | null, type?: Types.ProductStockType | null } | null, thumbnail?: { __typename?: 'ProductImage', id?: string | null, description?: string | null, url?: string | null } | null, price?: { __typename?: 'ProductPrice', discount?: number | null, isRange?: boolean | null, badges?: Array<{ __typename?: 'ProductPriceBadge', name?: string | null } | null> | null, current?: { __typename?: 'Money', value?: number | null, text?: string | null, currency?: string | null } | null, initial?: { __typename?: 'Money', value?: number | null, text?: string | null, currency?: string | null } | null } | null } | null, customizableOptions?: Array<{ __typename?: 'CartItemCustomizableOptions', id?: string | null, label?: string | null, changedLabel?: string | null, isRequired?: boolean | null, type?: string | null, values?: Array<{ __typename?: 'CartCustomizableOptionsValue', id?: string | null, label?: string | null, value?: string | null } | null> | null } | null> | null, prices?: { __typename?: 'CartItemPrices', discounts?: Array<{ __typename?: 'CartAmount', label?: string | null, amount?: { __typename?: 'CartMoney', money?: string | null, label?: string | null } | null } | null> | null, price?: { __typename?: 'CartMoneyOnly', money?: string | null } | null, rowTotal?: { __typename?: 'CartMoneyOnly', money?: string | null } | null, rowTotalIncludingTax?: { __typename?: 'CartMoneyOnly', money?: string | null } | null, totalItemDiscount?: { __typename?: 'CartMoneyOnly', money?: string | null } | null } | null } | null> | null, shippingAddresses?: Array<{ __typename?: 'CartShippingAddresses', city?: string | null, firstName?: string | null, lastName?: string | null, postCode?: string | null, methods?: Array<{ __typename?: 'CartShippingMethod', available?: string | null, carrierCode?: string | null, carrierTitle?: string | null, methodCode?: string | null, methodTitle?: string | null, price?: { __typename?: 'CartMoneyOnly', money?: string | null } | null, priceExcludingTax?: { __typename?: 'CartMoneyOnly', money?: string | null } | null, priceIncludingTax?: { __typename?: 'CartMoneyOnly', money?: string | null } | null } | null> | null, region?: { __typename?: 'CartShippingAddressRegion', code?: string | null, label?: string | null, regionId?: string | null } | null, selectedMethod?: { __typename?: 'CartSelectedShippingMethod', carrierCode?: string | null, carrierTitle?: string | null, methodCode?: string | null, methodTitle?: string | null, price?: { __typename?: 'CartMoneyOnly', money?: string | null } | null } | null } | null> | null } | null };


export const CartAssignToCustomerDocument = gql`
    mutation CartAssignToCustomer($input: CartAssignToCustomerInput) {
  cartAssignToCustomer(input: $input) @client {
    ...Cart
  }
}
    ${CartFragmentDoc}`;
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
export function useCartAssignToCustomerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CartAssignToCustomerMutation, CartAssignToCustomerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CartAssignToCustomerMutation, CartAssignToCustomerMutationVariables>(CartAssignToCustomerDocument, options);
      }
export type CartAssignToCustomerMutationHookResult = ReturnType<typeof useCartAssignToCustomerMutation>;
export type CartAssignToCustomerMutationResult = Apollo.MutationResult<CartAssignToCustomerMutation>;
export type CartAssignToCustomerMutationOptions = Apollo.BaseMutationOptions<CartAssignToCustomerMutation, CartAssignToCustomerMutationVariables>;