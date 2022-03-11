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
export type SortsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type SortsQuery = { __typename?: 'Query', sorts?: { __typename?: 'SortsQueryOutput', default?: string | null | undefined, items?: Array<{ __typename?: 'Sort', id?: string | null | undefined, name?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };


export const SortsDocument = gql`
    query Sorts {
  sorts @client {
    default
    items {
      id
      name
    }
  }
}
    `;

/**
 * __useSortsQuery__
 *
 * To run a query within a React component, call `useSortsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSortsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSortsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSortsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SortsQuery, SortsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SortsQuery, SortsQueryVariables>(SortsDocument, options);
      }
export function useSortsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SortsQuery, SortsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SortsQuery, SortsQueryVariables>(SortsDocument, options);
        }
export type SortsQueryHookResult = ReturnType<typeof useSortsQuery>;
export type SortsLazyQueryHookResult = ReturnType<typeof useSortsLazyQuery>;
export type SortsQueryResult = Apollo.QueryResult<SortsQuery, SortsQueryVariables>;