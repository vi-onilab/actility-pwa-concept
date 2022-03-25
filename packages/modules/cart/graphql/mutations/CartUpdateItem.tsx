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
export type CartUpdateItemMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.CartUpdateItemInput>;
}>;


export type CartUpdateItemMutation = { __typename?: 'Mutation', cartUpdateItem?: { __typename?: 'Cart', id?: string | null, email?: string | null, totalQuantity?: number | null, totals?: { __typename?: 'CartTotals', taxes?: Array<{ __typename?: 'CartMoney', money?: string | null, label?: string | null } | null> | null, tax?: { __typename?: 'CartMoneyOnly', money?: string | null } | null, discounts?: Array<{ __typename?: 'CartMoney', money?: string | null, label?: string | null } | null> | null, shippings?: Array<{ __typename?: 'CartMoney', money?: string | null, label?: string | null } | null> | null, shipping?: { __typename?: 'CartMoney', money?: string | null, label?: string | null } | null, sub?: { __typename?: 'CartMoneyOnly', money?: string | null } | null, subTax?: { __typename?: 'CartMoneyOnly', money?: string | null } | null, grand?: { __typename?: 'CartMoneyOnly', money?: string | null } | null } | null, items?: Array<{ __typename?: 'CartItems', id?: string | null, quantity?: number | null, product?: { __typename?: 'CartProduct', id?: string | null, name?: string | null, sku?: string | null } | null, customizableOptions?: Array<{ __typename?: 'CartItemCustomizableOptions', id?: string | null, label?: string | null, changedLabel?: string | null, isRequired?: boolean | null, type?: string | null, values?: Array<{ __typename?: 'CartCustomizableOptionsValue', id?: string | null, label?: string | null, value?: string | null } | null> | null } | null> | null, prices?: { __typename?: 'CartItemPrices', discounts?: Array<{ __typename?: 'CartAmount', label?: string | null, amount?: { __typename?: 'CartMoney', money?: string | null, label?: string | null } | null } | null> | null, price?: { __typename?: 'CartMoneyOnly', money?: string | null } | null, rowTotal?: { __typename?: 'CartMoneyOnly', money?: string | null } | null, rowTotalIncludingTax?: { __typename?: 'CartMoneyOnly', money?: string | null } | null, totalItemDiscount?: { __typename?: 'CartMoneyOnly', money?: string | null } | null } | null } | null> | null, shippingAddresses?: Array<{ __typename?: 'CartShippingAddresses', city?: string | null, firstName?: string | null, lastName?: string | null, postCode?: string | null, methods?: Array<{ __typename?: 'CartShippingMethod', available?: string | null, carrierCode?: string | null, carrierTitle?: string | null, methodCode?: string | null, methodTitle?: string | null, price?: { __typename?: 'CartMoneyOnly', money?: string | null } | null, priceExcludingTax?: { __typename?: 'CartMoneyOnly', money?: string | null } | null, priceIncludingTax?: { __typename?: 'CartMoneyOnly', money?: string | null } | null } | null> | null, region?: { __typename?: 'CartShippingAddressRegion', code?: string | null, label?: string | null, regionId?: string | null } | null, selectedMethod?: { __typename?: 'CartSelectedShippingMethod', carrierCode?: string | null, carrierTitle?: string | null, methodCode?: string | null, methodTitle?: string | null, price?: { __typename?: 'CartMoneyOnly', money?: string | null } | null } | null } | null> | null } | null };


export const CartUpdateItemDocument = gql`
    mutation CartUpdateItem($input: CartUpdateItemInput) {
  cartUpdateItem(input: $input) @client {
    ...Cart
  }
}
    ${CartFragmentDoc}`;
export type CartUpdateItemMutationFn = Apollo.MutationFunction<CartUpdateItemMutation, CartUpdateItemMutationVariables>;

/**
 * __useCartUpdateItemMutation__
 *
 * To run a mutation, you first call `useCartUpdateItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCartUpdateItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cartUpdateItemMutation, { data, loading, error }] = useCartUpdateItemMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCartUpdateItemMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CartUpdateItemMutation, CartUpdateItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CartUpdateItemMutation, CartUpdateItemMutationVariables>(CartUpdateItemDocument, options);
      }
export type CartUpdateItemMutationHookResult = ReturnType<typeof useCartUpdateItemMutation>;
export type CartUpdateItemMutationResult = Apollo.MutationResult<CartUpdateItemMutation>;
export type CartUpdateItemMutationOptions = Apollo.BaseMutationOptions<CartUpdateItemMutation, CartUpdateItemMutationVariables>;