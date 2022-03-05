/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 * USE `yarn build:schema-types` or `yarn build`.
 */

/* eslint-disable */
/* tslint:disable */
/* @ts-nocheck */

import * as Types from '../../../graphql';

import { gql } from '@apollo/client';
import { ProductFragmentDoc } from '../fragments/Product';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ProductQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.ProductQueryInput>;
}>;


export type ProductQuery = { __typename?: 'Query', product?: { __typename?: 'Product', id?: string | null | undefined, name?: string | null | undefined, breadcrumbs?: Array<{ __typename?: 'ProductBreadcrumb', id?: string | null | undefined, name?: string | null | undefined } | null | undefined> | null | undefined, stock?: { __typename?: 'ProductStock', name?: string | null | undefined, type?: Types.ProductStockType | null | undefined } | null | undefined, badges?: Array<{ __typename?: 'ProductBadge', id?: string | null | undefined, name?: string | null | undefined, icon?: string | null | undefined } | null | undefined> | null | undefined, vat?: { __typename?: 'ProductVat', type?: Types.ProductVatType | null | undefined, name?: string | null | undefined } | null | undefined, images?: Array<{ __typename?: 'ProductImage', id?: string | null | undefined, description?: string | null | undefined, url?: string | null | undefined } | null | undefined> | null | undefined, thumbnail?: { __typename?: 'ProductImage', id?: string | null | undefined, description?: string | null | undefined, url?: string | null | undefined } | null | undefined, price?: { __typename?: 'ProductPrice', isRange?: boolean | null | undefined, current?: { __typename?: 'Money', value?: number | null | undefined, text?: string | null | undefined, currency?: string | null | undefined } | null | undefined, initial?: { __typename?: 'Money', value?: number | null | undefined, text?: string | null | undefined, currency?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined };


export const ProductDocument = gql`
    query Product($input: ProductQueryInput) {
  product(input: $input) @client {
    ...Product
  }
}
    ${ProductFragmentDoc}`;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useProductQuery(baseOptions?: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
      }
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
        }
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;