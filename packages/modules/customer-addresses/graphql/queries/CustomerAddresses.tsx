/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 * USE `yarn cli codegen`.
 */

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

import * as Types from '../../../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@pwa-concept/core/graphql/hooks';
const defaultOptions = {} as const;
export type CustomerAddressesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CustomerAddressesQuery = { __typename?: 'Query', customerAddresses?: Array<{ __typename?: 'CustomerAddress', id?: string | null | undefined, defaultBilling?: boolean | null | undefined, defaultShipping?: boolean | null | undefined, city?: string | null | undefined, company?: string | null | undefined, countryId?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, telephone?: string | null | undefined, postcode?: string | null | undefined, street?: string | null | undefined, region?: { __typename?: 'CustomerAddressesRegion', region?: string | null | undefined, regionCode?: string | null | undefined, regionId?: number | null | undefined } | null | undefined } | null | undefined> | null | undefined };


export const CustomerAddressesDocument = gql`
    query CustomerAddresses {
  customerAddresses @client {
    id
    defaultBilling
    defaultShipping
    city
    company
    countryId
    firstName
    lastName
    telephone
    postcode
    region {
      region
      regionCode
      regionId
    }
    street
  }
}
    `;

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