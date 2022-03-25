import * as Types from '../../../graphql';

import { gql } from '@apollo/client';
import { CategoryFragmentDoc } from '../fragments/Category';
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
export type CategoriesQueryVariables = Types.Exact<{
  input: Types.CategoriesQueryInput;
}>;


export type CategoriesQuery = { __typename?: 'Query', categories?: Array<{ __typename?: 'Category', id?: string | null, name?: string | null, description?: string | null, level?: number | null, breadcrumbs?: Array<{ __typename?: 'CategoryBreadcrumb', id?: string | null, name?: string | null, level?: number | null } | null> | null, parent?: { __typename?: 'Category', id?: string | null, name?: string | null, description?: string | null, level?: number | null } | null } | null> | null };


export const CategoriesDocument = gql`
    query Categories($input: CategoriesQueryInput!) {
  categories(input: $input) @client {
    ...Category
  }
}
    ${CategoryFragmentDoc}`;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions: ApolloReactHooks.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;