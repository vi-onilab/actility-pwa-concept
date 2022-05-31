import * as Types from '../../../graphql';

import { gql } from '@apollo/client';
import { ProductFragmentDoc } from '../fragments/Product';
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
export type ProductRelationsQueryVariables = Types.Exact<{
  input: Types.ProductRelationsQueryInput;
}>;


export type ProductRelationsQuery = { __typename?: 'Query', productRelations?: Array<{ __typename?: 'Product', id?: string | null, name?: string | null, breadcrumbs?: Array<{ __typename?: 'ProductBreadcrumb', id?: string | null, name?: string | null, url?: { __typename?: 'ProductBreadcrumbUrl', id?: string | null, type?: Types.ProductBreadcrumbUrlType | null, to?: string | null } | null } | null> | null, stock?: { __typename?: 'ProductStock', name?: string | null, type?: Types.ProductStockType | null } | null, badges?: Array<{ __typename?: 'ProductBadge', id?: string | null, name?: string | null, icon?: string | null } | null> | null, vat?: { __typename?: 'ProductVat', type?: Types.ProductVatType | null, name?: string | null } | null, images?: Array<{ __typename?: 'ProductImage', id?: string | null, description?: string | null, url?: string | null } | null> | null, thumbnail?: { __typename?: 'ProductImage', id?: string | null, description?: string | null, url?: string | null } | null, price?: { __typename?: 'ProductPrice', discount?: number | null, isRange?: boolean | null, badges?: Array<{ __typename?: 'ProductPriceBadge', name?: string | null } | null> | null, current?: { __typename?: 'Money', value?: number | null, text?: string | null, currency?: string | null } | null, initial?: { __typename?: 'Money', value?: number | null, text?: string | null, currency?: string | null } | null } | null, options?: Array<{ __typename?: 'ProductOption', id?: string | null, name?: string | null, key?: string | null, type?: Types.ProductOptionType | null, required?: boolean | null, kind?: Types.ProductOptionKind | null, values?: Array<{ __typename?: 'ProductOptionValue', name?: string | null, value?: string | null, price?: { __typename?: 'Money', value?: number | null, text?: string | null, currency?: string | null } | null } | null> | null } | null> | null } | null> | null };


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
export function useProductRelationsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<ProductRelationsQuery, ProductRelationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ProductRelationsQuery, ProductRelationsQueryVariables>(ProductRelationsDocument, options);
      }
export function useProductRelationsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProductRelationsQuery, ProductRelationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ProductRelationsQuery, ProductRelationsQueryVariables>(ProductRelationsDocument, options);
        }
export type ProductRelationsQueryHookResult = ReturnType<typeof useProductRelationsQuery>;
export type ProductRelationsLazyQueryHookResult = ReturnType<typeof useProductRelationsLazyQuery>;
export type ProductRelationsQueryResult = Apollo.QueryResult<ProductRelationsQuery, ProductRelationsQueryVariables>;