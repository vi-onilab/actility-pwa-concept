import * as Types from '../../../graphql';

import { gql } from '@apollo/client';
import { CustomerOrderFragmentDoc } from '../fragments/CustomerOrder';
import { PaginationFragmentDoc } from '../../../pagination/graphql/fragments/Pagination';
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
export type CustomerOrdersQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.CustomerOrdersInput>;
}>;


export type CustomerOrdersQuery = { __typename?: 'Query', customerOrders?: { __typename?: 'CustomerOrdersOutput', items?: Array<{ __typename?: 'CustomerOrder', id?: string | null | undefined, number?: string | null | undefined, status?: string | null | undefined, date?: number | null | undefined, paymentMethod?: string | null | undefined, shippingAddress?: { __typename?: 'CustomerOrderAddress', firstName?: string | null | undefined, lastName?: string | null | undefined, telephone?: string | null | undefined, city?: string | null | undefined, company?: string | null | undefined, street?: string | null | undefined, countryCode?: number | null | undefined, postcode?: string | null | undefined } | null | undefined, billingAddress?: { __typename?: 'CustomerOrderAddress', firstName?: string | null | undefined, lastName?: string | null | undefined, telephone?: string | null | undefined, city?: string | null | undefined, company?: string | null | undefined, street?: string | null | undefined, countryCode?: number | null | undefined, postcode?: string | null | undefined } | null | undefined, totals?: { __typename?: 'CustomerOrderTotals', total?: number | null | undefined, subtotal?: number | null | undefined, totalShipping?: number | null | undefined, taxes?: Array<{ __typename?: 'CustomerOrderTotalsTax', rate?: number | null | undefined, title?: string | null | undefined, tax?: number | null | undefined } | null | undefined> | null | undefined, discounts?: Array<{ __typename?: 'CustomerOrderDiscount', label?: string | null | undefined, value?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined, products?: Array<{ __typename?: 'CustomerOrderProduct', id?: string | null | undefined, url?: string | null | undefined, name?: string | null | undefined, status?: string | null | undefined, discounts?: Array<{ __typename?: 'CustomerOrderDiscount', label?: string | null | undefined, value?: string | null | undefined } | null | undefined> | null | undefined, options?: Array<{ __typename?: 'CustomerOrderProductOption', label?: string | null | undefined, value?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined, pagination?: { __typename?: 'Pagination', count?: number | null | undefined, limit?: number | null | undefined, total?: number | null | undefined, current?: number | null | undefined } | null | undefined } | null | undefined };


export const CustomerOrdersDocument = gql`
    query CustomerOrders($input: CustomerOrdersInput) {
  customerOrders(input: $input) @client {
    items {
      ...CustomerOrder
    }
    pagination {
      ...Pagination
    }
  }
}
    ${CustomerOrderFragmentDoc}
${PaginationFragmentDoc}`;

/**
 * __useCustomerOrdersQuery__
 *
 * To run a query within a React component, call `useCustomerOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomerOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomerOrdersQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCustomerOrdersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CustomerOrdersQuery, CustomerOrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<CustomerOrdersQuery, CustomerOrdersQueryVariables>(CustomerOrdersDocument, options);
      }
export function useCustomerOrdersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CustomerOrdersQuery, CustomerOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<CustomerOrdersQuery, CustomerOrdersQueryVariables>(CustomerOrdersDocument, options);
        }
export type CustomerOrdersQueryHookResult = ReturnType<typeof useCustomerOrdersQuery>;
export type CustomerOrdersLazyQueryHookResult = ReturnType<typeof useCustomerOrdersLazyQuery>;
export type CustomerOrdersQueryResult = Apollo.QueryResult<CustomerOrdersQuery, CustomerOrdersQueryVariables>;