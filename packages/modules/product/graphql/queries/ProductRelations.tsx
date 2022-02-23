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
export type ProductRelationsQueryVariables = Types.Exact<{
  input: Types.ProductRelationsQueryInput;
}>;


export type ProductRelationsQuery = { __typename?: 'Query', productRelations?: Array<{ __typename?: 'Product', id?: string | null | undefined, name?: string | null | undefined, breadcrumbs?: Array<{ __typename?: 'ProductBreadcrumb', id?: string | null | undefined, name?: string | null | undefined } | null | undefined> | null | undefined, manufacturer?: { __typename?: 'ProductManufacturer', name?: string | null | undefined } | null | undefined, stock?: { __typename?: 'ProductStock', name?: string | null | undefined, type?: Types.ProductStockType | null | undefined } | null | undefined, badges?: Array<{ __typename?: 'ProductBadge', id?: string | null | undefined, name?: string | null | undefined, icon?: string | null | undefined } | null | undefined> | null | undefined, vat?: { __typename?: 'ProductVat', type?: Types.ProductVatType | null | undefined, name?: string | null | undefined } | null | undefined, images?: Array<{ __typename?: 'ProductImage', id?: string | null | undefined, description?: string | null | undefined, url?: string | null | undefined } | null | undefined> | null | undefined, thumbnail?: { __typename?: 'ProductImage', id?: string | null | undefined, description?: string | null | undefined, url?: string | null | undefined } | null | undefined, price?: { __typename?: 'ProductPrice', isRange?: boolean | null | undefined, current?: { __typename?: 'Money', value?: number | null | undefined, text?: string | null | undefined, currency?: string | null | undefined } | null | undefined, initial?: { __typename?: 'Money', value?: number | null | undefined, text?: string | null | undefined, currency?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined> | null | undefined };


export const ProductRelationsDocument = gql`
    query ProductRelations($input: ProductRelationsQueryInput!) {
  productRelations(input: $input) @client {
    ...Product
  }
}
    ${ProductFragmentDoc}`;

/**
 * __useProductRelationsQuery__
 *
 * To run a query within a React component, call `useProductRelationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductRelationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductRelationsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useProductRelationsQuery(baseOptions: Apollo.QueryHookOptions<ProductRelationsQuery, ProductRelationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductRelationsQuery, ProductRelationsQueryVariables>(ProductRelationsDocument, options);
      }
export function useProductRelationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductRelationsQuery, ProductRelationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductRelationsQuery, ProductRelationsQueryVariables>(ProductRelationsDocument, options);
        }
export type ProductRelationsQueryHookResult = ReturnType<typeof useProductRelationsQuery>;
export type ProductRelationsLazyQueryHookResult = ReturnType<typeof useProductRelationsLazyQuery>;
export type ProductRelationsQueryResult = Apollo.QueryResult<ProductRelationsQuery, ProductRelationsQueryVariables>;