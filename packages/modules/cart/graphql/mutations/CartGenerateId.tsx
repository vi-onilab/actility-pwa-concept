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
export type CartGenerateIdMutationVariables = Types.Exact<{ [key: string]: never; }>;


export type CartGenerateIdMutation = { __typename?: 'Mutation', cartGenerateId?: string | null };


export const CartGenerateIdDocument = gql`
    mutation CartGenerateId {
  cartGenerateId @client
}
    `;
export type CartGenerateIdMutationFn = Apollo.MutationFunction<CartGenerateIdMutation, CartGenerateIdMutationVariables>;

/**
 * __useCartGenerateIdMutation__
 *
 * To run a mutation, you first call `useCartGenerateIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCartGenerateIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cartGenerateIdMutation, { data, loading, error }] = useCartGenerateIdMutation({
 *   variables: {
 *   },
 * });
 */
export function useCartGenerateIdMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CartGenerateIdMutation, CartGenerateIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CartGenerateIdMutation, CartGenerateIdMutationVariables>(CartGenerateIdDocument, options);
      }
export type CartGenerateIdMutationHookResult = ReturnType<typeof useCartGenerateIdMutation>;
export type CartGenerateIdMutationResult = Apollo.MutationResult<CartGenerateIdMutation>;
export type CartGenerateIdMutationOptions = Apollo.BaseMutationOptions<CartGenerateIdMutation, CartGenerateIdMutationVariables>;