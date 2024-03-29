import * as Types from '../../../graphql';

import { gql } from '@apollo/client';
import { FilterFragmentDoc } from '../fragments/Filter';
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
export type FiltersQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.FiltersQueryInput>;
}>;


export type FiltersQuery = { __typename?: 'Query', filters?: Array<{ __typename?: 'Filter', id?: string | null, name?: string | null, key?: string | null, type?: Types.FilterType | null, items?: Array<{ __typename?: 'FilterItem', id?: string | null, key?: string | null, name?: string | null, value?: string | null } | null> | null } | null> | null };


export const FiltersDocument = gql`
    query Filters($input: FiltersQueryInput) {
  filters(input: $input) @client {
    ...Filter
  }
}
    ${FilterFragmentDoc}`;

/**
 * __useFiltersQuery__
 *
 * To run a query within a React component, call `useFiltersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFiltersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFiltersQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFiltersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FiltersQuery, FiltersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<FiltersQuery, FiltersQueryVariables>(FiltersDocument, options);
      }
export function useFiltersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FiltersQuery, FiltersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<FiltersQuery, FiltersQueryVariables>(FiltersDocument, options);
        }
export type FiltersQueryHookResult = ReturnType<typeof useFiltersQuery>;
export type FiltersLazyQueryHookResult = ReturnType<typeof useFiltersLazyQuery>;
export type FiltersQueryResult = Apollo.QueryResult<FiltersQuery, FiltersQueryVariables>;