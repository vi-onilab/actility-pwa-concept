/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 * USE `yarn build:schema-types` or `yarn build`.
 */

/* eslint-disable */
/* tslint:disable */
/* @ts-nocheck */

import * as Types from '../../../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetCmsRouteQueryVariables = Types.Exact<{
  url?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type GetCmsRouteQuery = { __typename?: 'Query', getCmsRoute?: { __typename?: 'CmsRoute', id?: string | null | undefined, type?: string | null | undefined, url?: string | null | undefined } | null | undefined };


export const GetCmsRouteDocument = gql`
    query GetCmsRoute($url: String) {
  getCmsRoute(url: $url) @client {
    id
    type
    url
  }
}
    `;

/**
 * __useGetCmsRouteQuery__
 *
 * To run a query within a React component, call `useGetCmsRouteQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCmsRouteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCmsRouteQuery({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useGetCmsRouteQuery(baseOptions?: Apollo.QueryHookOptions<GetCmsRouteQuery, GetCmsRouteQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCmsRouteQuery, GetCmsRouteQueryVariables>(GetCmsRouteDocument, options);
      }
export function useGetCmsRouteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCmsRouteQuery, GetCmsRouteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCmsRouteQuery, GetCmsRouteQueryVariables>(GetCmsRouteDocument, options);
        }
export type GetCmsRouteQueryHookResult = ReturnType<typeof useGetCmsRouteQuery>;
export type GetCmsRouteLazyQueryHookResult = ReturnType<typeof useGetCmsRouteLazyQuery>;
export type GetCmsRouteQueryResult = Apollo.QueryResult<GetCmsRouteQuery, GetCmsRouteQueryVariables>;