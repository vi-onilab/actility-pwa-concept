/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 * USE `yarn build:schema-types` or `yarn build`.
 */

/* eslint-disable */
/* tslint:disable */
/* @ts-nocheck */

import * as Types from '../../../graphql'

import { gql } from '@apollo/client'
import { CategoryFragmentFragmentDoc } from '../fragments/Category'
import * as Apollo from '@apollo/client'

const defaultOptions = {} as const
export type CategoryQueryVariables = Types.Exact<{
    input: Types.CategoryQueryInput;
}>;


export type CategoryQuery = {
    __typename?: 'Query', category?: {
        __typename?: 'Category', id?: string | null | undefined, name?: string | null | undefined, description?: string | null | undefined, level?: number | null | undefined, icon?: string | null | undefined, banners?: Array<{ __typename?: 'CategoryBanner', id?: string | null | undefined, title?: string | null | undefined, description?: string | null | undefined, image?: { __typename?: 'CategoryBannerImage', id?: string | null | undefined, url?: string | null | undefined, sources?: Array<{ __typename?: 'CategoryBannerImageSource', id?: string | null | undefined, url?: string | null | undefined, media?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined> | null | undefined, breadcrumbs?: Array<{ __typename?: 'CategoryBreadcrumb', id?: string | null | undefined, name?: string | null | undefined, level?: number | null | undefined } | null | undefined> | null | undefined, images?: { __typename?: 'CategoryImages', thumbnail?: { __typename?: 'CategoryImage', id?: string | null | undefined, url?: string | null | undefined } | null | undefined, main?: { __typename?: 'CategoryImage', id?: string | null | undefined, url?: string | null | undefined } | null | undefined } | null | undefined, parent?: { __typename?: 'Category', id?: string | null | undefined, name?: string | null | undefined, description?: string | null | undefined, level?: number | null | undefined } | null | undefined
    } | null | undefined
};


export const CategoryDocument = gql`
    query Category($input: CategoryQueryInput!) {
        category(input: $input) @client {
            ...CategoryFragment
        }
    }
${CategoryFragmentFragmentDoc}`

/**
 * __useCategoryQuery__
 *
 * To run a query within a React component, call `useCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCategoryQuery(baseOptions: Apollo.QueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options)
}

export function useCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useLazyQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options)
}

export type CategoryQueryHookResult = ReturnType<typeof useCategoryQuery>;
export type CategoryLazyQueryHookResult = ReturnType<typeof useCategoryLazyQuery>;
export type CategoryQueryResult = Apollo.QueryResult<CategoryQuery, CategoryQueryVariables>;