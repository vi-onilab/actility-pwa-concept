import * as Types from '../../../graphql';

import { gql } from '@apollo/client';
import { CmsFragmentDoc } from '../fragments/Cms';
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
export type CmsQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['ID']>;
}>;


export type CmsQuery = { __typename?: 'Query', cms?: { __typename?: 'Cms', id?: string | null, title?: string | null, content?: string | null, metaTitle?: string | null, metaKeywords?: string | null, metaDescription?: string | null, layout?: string | null } | null };


export const CmsDocument = gql`
    query Cms($id: ID) {
  cms(id: $id) @client {
    ...Cms
  }
}
    ${CmsFragmentDoc}`;

/**
 * __useCmsQuery__
 *
 * To run a query within a React component, call `useCmsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCmsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCmsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCmsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CmsQuery, CmsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<CmsQuery, CmsQueryVariables>(CmsDocument, options);
      }
export function useCmsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CmsQuery, CmsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<CmsQuery, CmsQueryVariables>(CmsDocument, options);
        }
export type CmsQueryHookResult = ReturnType<typeof useCmsQuery>;
export type CmsLazyQueryHookResult = ReturnType<typeof useCmsLazyQuery>;
export type CmsQueryResult = Apollo.QueryResult<CmsQuery, CmsQueryVariables>;