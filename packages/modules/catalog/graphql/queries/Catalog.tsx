import * as Types from '../../../graphql';

import { gql } from '@apollo/client';
import { ProductFragmentDoc } from '../../../product/graphql/fragments/Product';
import { PaginationFragmentDoc } from '../../../pagination/graphql/fragments/Pagination';
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
export type CatalogQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.CatalogQueryInput>;
}>;


export type CatalogQuery = { __typename?: 'Query', catalog?: { __typename?: 'CatalogQueryOutput', items?: Array<{ __typename?: 'Product', id?: string | null, name?: string | null, url?: string | null, breadcrumbs?: Array<{ __typename?: 'ProductBreadcrumb', id?: string | null, name?: string | null, url?: { __typename?: 'ProductBreadcrumbUrl', id?: string | null, type?: Types.ProductBreadcrumbUrlType | null, to?: string | null } | null } | null> | null, stock?: { __typename?: 'ProductStock', name?: string | null, type?: Types.ProductStockType | null } | null, vat?: { __typename?: 'ProductVat', type?: Types.ProductVatType | null, name?: string | null } | null, images?: Array<{ __typename?: 'ProductImage', id?: string | null, description?: string | null, url?: string | null } | null> | null, thumbnail?: { __typename?: 'ProductImage', id?: string | null, description?: string | null, url?: string | null } | null, price?: { __typename?: 'ProductPrice', discount?: number | null, isRange?: boolean | null, badges?: Array<{ __typename?: 'ProductPriceBadge', name?: string | null } | null> | null, current?: { __typename?: 'Money', value?: number | null, text?: string | null, currency?: string | null } | null, initial?: { __typename?: 'Money', value?: number | null, text?: string | null, currency?: string | null } | null } | null, options?: Array<{ __typename?: 'ProductOption', id?: string | null, name?: string | null, key?: string | null, type?: Types.ProductOptionType | null, required?: boolean | null, kind?: Types.ProductOptionKind | null, values?: Array<{ __typename?: 'ProductOptionValue', name?: string | null, value?: string | null, price?: { __typename?: 'Money', value?: number | null, text?: string | null, currency?: string | null } | null } | null> | null } | null> | null, variants?: Array<{ __typename?: 'ProductVariant', options?: Array<{ __typename?: 'ProductVariantOption', key?: string | null, value?: string | null } | null> | null, product?: { __typename?: 'Product', id?: string | null, sku?: string | null, name?: string | null, images?: Array<{ __typename?: 'ProductImage', id?: string | null, description?: string | null, url?: string | null } | null> | null, thumbnail?: { __typename?: 'ProductImage', id?: string | null, description?: string | null, url?: string | null } | null, price?: { __typename?: 'ProductPrice', discount?: number | null, isRange?: boolean | null, badges?: Array<{ __typename?: 'ProductPriceBadge', name?: string | null } | null> | null, current?: { __typename?: 'Money', value?: number | null, text?: string | null, currency?: string | null } | null, initial?: { __typename?: 'Money', value?: number | null, text?: string | null, currency?: string | null } | null } | null } | null } | null> | null } | null> | null, pagination?: { __typename?: 'Pagination', count?: number | null, limit?: number | null, total?: number | null, current?: number | null } | null } | null };


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
export function useCatalogQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CatalogQuery, CatalogQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<CatalogQuery, CatalogQueryVariables>(CatalogDocument, options);
      }
export function useCatalogLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CatalogQuery, CatalogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<CatalogQuery, CatalogQueryVariables>(CatalogDocument, options);
        }
export type CatalogQueryHookResult = ReturnType<typeof useCatalogQuery>;
export type CatalogLazyQueryHookResult = ReturnType<typeof useCatalogLazyQuery>;
export type CatalogQueryResult = Apollo.QueryResult<CatalogQuery, CatalogQueryVariables>;