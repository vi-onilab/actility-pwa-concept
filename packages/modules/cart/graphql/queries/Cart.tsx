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
export type CartQueryVariables = Types.Exact<{
  cartId?: Types.InputMaybe<Types.Scalars['String']>;
  isFull?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;


export type CartQuery = { __typename?: 'Query', cart?: { __typename?: 'Cart', id?: string | null, email?: string | null, totalQuantity?: number | null, totals?: { __typename?: 'CartTotals', taxes?: Array<{ __typename?: 'CartMoney', money?: string | null, label?: string | null } | null> | null, tax?: { __typename?: 'CartMoneyOnly', money?: string | null } | null, discounts?: Array<{ __typename?: 'CartMoney', money?: string | null, label?: string | null } | null> | null, shippings?: Array<{ __typename?: 'CartMoney', money?: string | null, label?: string | null } | null> | null, shipping?: { __typename?: 'CartMoney', money?: string | null, label?: string | null } | null, sub?: { __typename?: 'CartMoneyOnly', money?: string | null } | null, subTax?: { __typename?: 'CartMoneyOnly', money?: string | null } | null, grand?: { __typename?: 'CartMoneyOnly', money?: string | null } | null } | null, items?: Array<{ __typename?: 'CartItems', id?: string | null, quantity?: number | null, product?: { __typename?: 'Product', id?: string | null, name?: string | null, url?: string | null, breadcrumbs?: Array<{ __typename?: 'ProductBreadcrumb', id?: string | null, name?: string | null, url?: { __typename?: 'ProductBreadcrumbUrl', id?: string | null, type?: Types.ProductBreadcrumbUrlType | null, to?: string | null } | null } | null> | null, stock?: { __typename?: 'ProductStock', name?: string | null, type?: Types.ProductStockType | null } | null, vat?: { __typename?: 'ProductVat', type?: Types.ProductVatType | null, name?: string | null } | null, images?: Array<{ __typename?: 'ProductImage', id?: string | null, description?: string | null, url?: string | null } | null> | null, thumbnail?: { __typename?: 'ProductImage', id?: string | null, description?: string | null, url?: string | null } | null, price?: { __typename?: 'ProductPrice', discount?: number | null, isRange?: boolean | null, badges?: Array<{ __typename?: 'ProductPriceBadge', name?: string | null } | null> | null, current?: { __typename?: 'Money', value?: number | null, text?: string | null, currency?: string | null } | null, initial?: { __typename?: 'Money', value?: number | null, text?: string | null, currency?: string | null } | null } | null, options?: Array<{ __typename?: 'ProductOption', id?: string | null, name?: string | null, key?: string | null, type?: Types.ProductOptionType | null, required?: boolean | null, kind?: Types.ProductOptionKind | null, values?: Array<{ __typename?: 'ProductOptionValue', name?: string | null, value?: string | null, price?: { __typename?: 'Money', value?: number | null, text?: string | null, currency?: string | null } | null } | null> | null } | null> | null, variants?: Array<{ __typename?: 'ProductVariant', options?: Array<{ __typename?: 'ProductVariantOption', key?: string | null, value?: string | null } | null> | null, product?: { __typename?: 'Product', id?: string | null, sku?: string | null, name?: string | null, images?: Array<{ __typename?: 'ProductImage', id?: string | null, description?: string | null, url?: string | null } | null> | null, thumbnail?: { __typename?: 'ProductImage', id?: string | null, description?: string | null, url?: string | null } | null, price?: { __typename?: 'ProductPrice', discount?: number | null, isRange?: boolean | null, badges?: Array<{ __typename?: 'ProductPriceBadge', name?: string | null } | null> | null, current?: { __typename?: 'Money', value?: number | null, text?: string | null, currency?: string | null } | null, initial?: { __typename?: 'Money', value?: number | null, text?: string | null, currency?: string | null } | null } | null } | null } | null> | null } | null, customizableOptions?: Array<{ __typename?: 'CartItemCustomizableOptions', id?: string | null, label?: string | null, changedLabel?: string | null, isRequired?: boolean | null, type?: string | null, values?: Array<{ __typename?: 'CartCustomizableOptionsValue', id?: string | null, label?: string | null, value?: string | null } | null> | null } | null> | null, prices?: { __typename?: 'CartItemPrices', discounts?: Array<{ __typename?: 'CartAmount', label?: string | null, amount?: { __typename?: 'CartMoney', money?: string | null, label?: string | null } | null } | null> | null, price?: { __typename?: 'CartMoneyOnly', money?: string | null } | null, rowTotal?: { __typename?: 'CartMoneyOnly', money?: string | null } | null, rowTotalIncludingTax?: { __typename?: 'CartMoneyOnly', money?: string | null } | null, totalItemDiscount?: { __typename?: 'CartMoneyOnly', money?: string | null } | null } | null } | null> | null, shippingAddresses?: Array<{ __typename?: 'CartShippingAddresses', city?: string | null, firstName?: string | null, lastName?: string | null, postCode?: string | null, methods?: Array<{ __typename?: 'CartShippingMethod', available?: string | null, carrierCode?: string | null, carrierTitle?: string | null, methodCode?: string | null, methodTitle?: string | null, price?: { __typename?: 'CartMoneyOnly', money?: string | null } | null, priceExcludingTax?: { __typename?: 'CartMoneyOnly', money?: string | null } | null, priceIncludingTax?: { __typename?: 'CartMoneyOnly', money?: string | null } | null } | null> | null, region?: { __typename?: 'CartShippingAddressRegion', code?: string | null, label?: string | null, regionId?: string | null } | null, selectedMethod?: { __typename?: 'CartSelectedShippingMethod', carrierCode?: string | null, carrierTitle?: string | null, methodCode?: string | null, methodTitle?: string | null, price?: { __typename?: 'CartMoneyOnly', money?: string | null } | null } | null } | null> | null } | null };


export const CartDocument = gql`
    query Cart($cartId: String, $isFull: Boolean) {
  cart(cartId: $cartId, isFull: $isFull) @client {
    ...Cart
  }
}
    ${CartFragmentDoc}`;

/**
 * __useCartQuery__
 *
 * To run a query within a React component, call `useCartQuery` and pass it any options that fit your needs.
 * When your component renders, `useCartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCartQuery({
 *   variables: {
 *      cartId: // value for 'cartId'
 *      isFull: // value for 'isFull'
 *   },
 * });
 */
export function useCartQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CartQuery, CartQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<CartQuery, CartQueryVariables>(CartDocument, options);
      }
export function useCartLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CartQuery, CartQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<CartQuery, CartQueryVariables>(CartDocument, options);
        }
export type CartQueryHookResult = ReturnType<typeof useCartQuery>;
export type CartLazyQueryHookResult = ReturnType<typeof useCartLazyQuery>;
export type CartQueryResult = Apollo.QueryResult<CartQuery, CartQueryVariables>;