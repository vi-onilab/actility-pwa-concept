import * as Types from '../../../graphql';

import { gql } from '@apollo/client';
import { CustomerFragmentDoc } from '../fragments/Customer';
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
export type CustomerQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CustomerQuery = { __typename?: 'Query', customer?: { __typename?: 'Customer', id?: string | null, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null, middleName?: string | null, dateOfBirth?: number | null, gender?: number | null, isSubscribed?: boolean | null } | null };


export const CustomerDocument = gql`
    query Customer {
  customer @client {
    ...Customer
  }
}
    ${CustomerFragmentDoc}`;

/**
 * __useCustomerQuery__
 *
 * To run a query within a React component, call `useCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomerQuery({
 *   variables: {
 *   },
 * });
 */
export function useCustomerQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CustomerQuery, CustomerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<CustomerQuery, CustomerQueryVariables>(CustomerDocument, options);
      }
export function useCustomerLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CustomerQuery, CustomerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<CustomerQuery, CustomerQueryVariables>(CustomerDocument, options);
        }
export type CustomerQueryHookResult = ReturnType<typeof useCustomerQuery>;
export type CustomerLazyQueryHookResult = ReturnType<typeof useCustomerLazyQuery>;
export type CustomerQueryResult = Apollo.QueryResult<CustomerQuery, CustomerQueryVariables>;