import * as Types from '../../../graphql';

import { gql } from '@apollo/client';
import { CmsRouteFragmentDoc } from '../fragments/CmsRoute';
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
export type CmsRouteQueryVariables = Types.Exact<{
  url?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type CmsRouteQuery = { __typename?: 'Query', cmsRoute?: { __typename?: 'CmsRoute', id?: string | null, type?: Types.CmsRouteType | null, url?: string | null } | null };


export const CmsRouteDocument = gql`
    query CmsRoute($url: String) {
  cmsRoute(url: $url) @client {
    ...CmsRoute
  }
}
    ${CmsRouteFragmentDoc}`;

/**
 * __useCmsRouteQuery__
 *
 * To run a query within a React component, call `useCmsRouteQuery` and pass it any options that fit your needs.
 * When your component renders, `useCmsRouteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCmsRouteQuery({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useCmsRouteQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CmsRouteQuery, CmsRouteQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<CmsRouteQuery, CmsRouteQueryVariables>(CmsRouteDocument, options);
      }
export function useCmsRouteLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CmsRouteQuery, CmsRouteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<CmsRouteQuery, CmsRouteQueryVariables>(CmsRouteDocument, options);
        }
export type CmsRouteQueryHookResult = ReturnType<typeof useCmsRouteQuery>;
export type CmsRouteLazyQueryHookResult = ReturnType<typeof useCmsRouteLazyQuery>;
export type CmsRouteQueryResult = Apollo.QueryResult<CmsRouteQuery, CmsRouteQueryVariables>;