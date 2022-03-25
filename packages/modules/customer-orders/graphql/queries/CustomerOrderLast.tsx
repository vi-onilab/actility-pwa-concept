import * as Types from '../../../graphql';

import { gql } from '@apollo/client';
import { CustomerOrderFragmentDoc } from '../fragments/CustomerOrder';
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
export type CustomerOrderLastQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CustomerOrderLastQuery = { __typename?: 'Query', customerOrderLast?: { __typename?: 'CustomerOrder', id?: string | null, number?: string | null, status?: string | null, date?: number | null, paymentMethod?: string | null, shippingAddress?: { __typename?: 'CustomerOrderAddress', firstName?: string | null, lastName?: string | null, telephone?: string | null, city?: string | null, company?: string | null, street?: string | null, countryCode?: number | null, postcode?: string | null } | null, billingAddress?: { __typename?: 'CustomerOrderAddress', firstName?: string | null, lastName?: string | null, telephone?: string | null, city?: string | null, company?: string | null, street?: string | null, countryCode?: number | null, postcode?: string | null } | null, totals?: { __typename?: 'CustomerOrderTotals', total?: number | null, subtotal?: number | null, totalShipping?: number | null, taxes?: Array<{ __typename?: 'CustomerOrderTotalsTax', rate?: number | null, title?: string | null, tax?: number | null } | null> | null, discounts?: Array<{ __typename?: 'CustomerOrderDiscount', label?: string | null, value?: string | null } | null> | null } | null, products?: Array<{ __typename?: 'CustomerOrderProduct', id?: string | null, url?: string | null, name?: string | null, status?: string | null, discounts?: Array<{ __typename?: 'CustomerOrderDiscount', label?: string | null, value?: string | null } | null> | null, options?: Array<{ __typename?: 'CustomerOrderProductOption', label?: string | null, value?: string | null } | null> | null } | null> | null } | null };


export const CustomerOrderLastDocument = gql`
    query CustomerOrderLast {
  customerOrderLast @client {
    ...CustomerOrder
  }
}
    ${CustomerOrderFragmentDoc}`;

/**
 * __useCustomerOrderLastQuery__
 *
 * To run a query within a React component, call `useCustomerOrderLastQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomerOrderLastQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomerOrderLastQuery({
 *   variables: {
 *   },
 * });
 */
export function useCustomerOrderLastQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CustomerOrderLastQuery, CustomerOrderLastQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<CustomerOrderLastQuery, CustomerOrderLastQueryVariables>(CustomerOrderLastDocument, options);
      }
export function useCustomerOrderLastLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CustomerOrderLastQuery, CustomerOrderLastQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<CustomerOrderLastQuery, CustomerOrderLastQueryVariables>(CustomerOrderLastDocument, options);
        }
export type CustomerOrderLastQueryHookResult = ReturnType<typeof useCustomerOrderLastQuery>;
export type CustomerOrderLastLazyQueryHookResult = ReturnType<typeof useCustomerOrderLastLazyQuery>;
export type CustomerOrderLastQueryResult = Apollo.QueryResult<CustomerOrderLastQuery, CustomerOrderLastQueryVariables>;