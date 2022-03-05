/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 * USE `yarn build:schema-types` or `yarn build`.
 */

/* eslint-disable */
/* tslint:disable */
/* @ts-nocheck */

import * as Types from '../../../graphql';

import { gql } from '@apollo/client';
import { ProductFragmentDoc } from '../../../product/graphql/fragments/Product';
import { PaginationFragmentDoc } from '../../../pagination/graphql/fragments/Pagination';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CatalogQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.CatalogQueryInput>;
}>;


export type CatalogQuery = { __typename?: 'Query', catalog?: { __typename?: 'CatalogQueryOutput', items?: Array<{ __typename?: 'Product', id?: string | null | undefined, name?: string | null | undefined, breadcrumbs?: Array<{ __typename?: 'ProductBreadcrumb', id?: string | null | undefined, name?: string | null | undefined } | null | undefined> | null | undefined, stock?: { __typename?: 'ProductStock', name?: string | null | undefined, type?: Types.ProductStockType | null | undefined } | null | undefined, badges?: Array<{ __typename?: 'ProductBadge', id?: string | null | undefined, name?: string | null | undefined, icon?: string | null | undefined } | null | undefined> | null | undefined, vat?: { __typename?: 'ProductVat', type?: Types.ProductVatType | null | undefined, name?: string | null | undefined } | null | undefined, images?: Array<{ __typename?: 'ProductImage', id?: string | null | undefined, description?: string | null | undefined, url?: string | null | undefined } | null | undefined> | null | undefined, thumbnail?: { __typename?: 'ProductImage', id?: string | null | undefined, description?: string | null | undefined, url?: string | null | undefined } | null | undefined, price?: { __typename?: 'ProductPrice', isRange?: boolean | null | undefined, current?: { __typename?: 'Money', value?: number | null | undefined, text?: string | null | undefined, currency?: string | null | undefined } | null | undefined, initial?: { __typename?: 'Money', value?: number | null | undefined, text?: string | null | undefined, currency?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined> | null | undefined, pagination?: { __typename?: 'Pagination', count?: number | null | undefined, limit?: number | null | undefined, total?: number | null | undefined, current?: number | null | undefined } | null | undefined } | null | undefined };


export const CatalogDocument = gql`
    query Catalog($input: CatalogQueryInput) {
  catalog(input: $input) @client {
    items {
      ...Product
    }
    pagination {
      ...Pagination
    }
  }
}
    ${ProductFragmentDoc}
${PaginationFragmentDoc}`;

/**
 * __useCatalogQuery__
 *
 * To run a query within a React component, call `useCatalogQuery` and pass it any options that fit your needs.
 * When your component renders, `useCatalogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCatalogQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCatalogQuery(baseOptions?: Apollo.QueryHookOptions<CatalogQuery, CatalogQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CatalogQuery, CatalogQueryVariables>(CatalogDocument, options);
      }
export function useCatalogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CatalogQuery, CatalogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CatalogQuery, CatalogQueryVariables>(CatalogDocument, options);
        }
export type CatalogQueryHookResult = ReturnType<typeof useCatalogQuery>;
export type CatalogLazyQueryHookResult = ReturnType<typeof useCatalogLazyQuery>;
export type CatalogQueryResult = Apollo.QueryResult<CatalogQuery, CatalogQueryVariables>;