import * as Types from '../../../graphql';

import { gql } from '@apollo/client';
import { CustomerAddressFragmentDoc } from '../fragments/CustomerAddress';
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
export type CustomerAddressesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CustomerAddressesQuery = { __typename?: 'Query', customerAddresses?: Array<{ __typename?: 'CustomerAddress', id?: string | null, defaultBilling?: boolean | null, defaultShipping?: boolean | null, city?: string | null, company?: string | null, countryId?: string | null, firstName?: string | null, lastName?: string | null, telephone?: string | null, postcode?: string | null, street?: string | null, region?: { __typename?: 'CustomerAddressRegion', region?: string | null, regionCode?: string | null, regionId?: number | null } | null } | null> | null };


export const CustomerAddressesDocument = gql`
    query CustomerAddresses {
  customerAddresses @client {
    ...CustomerAddress
  }
}
    ${CustomerAddressFragmentDoc}`;

/**
 * __useCustomerAddressesQuery__
 *
 * To run a query within a React component, call `useCustomerAddressesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomerAddressesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomerAddressesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCustomerAddressesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CustomerAddressesQuery, CustomerAddressesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<CustomerAddressesQuery, CustomerAddressesQueryVariables>(CustomerAddressesDocument, options);
      }
export function useCustomerAddressesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CustomerAddressesQuery, CustomerAddressesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<CustomerAddressesQuery, CustomerAddressesQueryVariables>(CustomerAddressesDocument, options);
        }
export type CustomerAddressesQueryHookResult = ReturnType<typeof useCustomerAddressesQuery>;
export type CustomerAddressesLazyQueryHookResult = ReturnType<typeof useCustomerAddressesLazyQuery>;
export type CustomerAddressesQueryResult = Apollo.QueryResult<CustomerAddressesQuery, CustomerAddressesQueryVariables>;