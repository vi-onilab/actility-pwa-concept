/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 * USE `yarn build:schema-types` or `yarn build`.
 */

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

import * as Types from '../../../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@pwa-concept/core/graphql/hooks';
const defaultOptions = {} as const;
export type CmsRouteQueryVariables = Types.Exact<{
  url?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type CmsRouteQuery = { __typename?: 'Query', cmsRoute?: { __typename?: 'CmsRoute', id?: string | null | undefined, type?: string | null | undefined, url?: string | null | undefined } | null | undefined };


export const CmsRouteDocument = gql`
    query CmsRoute($url: String) {
  cmsRoute(url: $url) @client {
    id
    type
    url
  }
}
    `;

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