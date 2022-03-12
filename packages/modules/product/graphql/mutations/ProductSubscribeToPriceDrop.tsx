import * as Types from '../../../graphql';

import { gql } from '@apollo/client';
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
export type ProductSubscribeToPriceDropMutationVariables = Types.Exact<{
  input: Types.ProductSubscribeToPriceDropInput;
}>;


export type ProductSubscribeToPriceDropMutation = { __typename?: 'Mutation', productSubscribeToPriceDrop?: { __typename?: 'Product', id?: string | null | undefined } | null | undefined };


export const ProductSubscribeToPriceDropDocument = gql`
    mutation ProductSubscribeToPriceDrop($input: ProductSubscribeToPriceDropInput!) {
  productSubscribeToPriceDrop(input: $input) {
    id
  }
}
    `;
export type ProductSubscribeToPriceDropMutationFn = Apollo.MutationFunction<ProductSubscribeToPriceDropMutation, ProductSubscribeToPriceDropMutationVariables>;

/**
 * __useProductSubscribeToPriceDropMutation__
 *
 * To run a mutation, you first call `useProductSubscribeToPriceDropMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProductSubscribeToPriceDropMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [productSubscribeToPriceDropMutation, { data, loading, error }] = useProductSubscribeToPriceDropMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useProductSubscribeToPriceDropMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ProductSubscribeToPriceDropMutation, ProductSubscribeToPriceDropMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ProductSubscribeToPriceDropMutation, ProductSubscribeToPriceDropMutationVariables>(ProductSubscribeToPriceDropDocument, options);
      }
export type ProductSubscribeToPriceDropMutationHookResult = ReturnType<typeof useProductSubscribeToPriceDropMutation>;
export type ProductSubscribeToPriceDropMutationResult = Apollo.MutationResult<ProductSubscribeToPriceDropMutation>;
export type ProductSubscribeToPriceDropMutationOptions = Apollo.BaseMutationOptions<ProductSubscribeToPriceDropMutation, ProductSubscribeToPriceDropMutationVariables>;