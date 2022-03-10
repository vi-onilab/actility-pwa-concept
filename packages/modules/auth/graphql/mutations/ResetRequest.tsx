/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 * USE `yarn build:schema-types` or `yarn build`.
 */

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

import * as Types from '../../../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@pwa-concept/core/graphql/hooks';
const defaultOptions = {} as const;
export type ResetRequestMutationVariables = Types.Exact<{
  email?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type ResetRequestMutation = { __typename?: 'Mutation', resetRequest?: string | null | undefined };


export const ResetRequestDocument = gql`
    mutation ResetRequest($email: String) {
  resetRequest(email: $email) @client
}
    `;
export type ResetRequestMutationFn = Apollo.MutationFunction<ResetRequestMutation, ResetRequestMutationVariables>;

/**
 * __useResetRequestMutation__
 *
 * To run a mutation, you first call `useResetRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetRequestMutation, { data, loading, error }] = useResetRequestMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useResetRequestMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResetRequestMutation, ResetRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ResetRequestMutation, ResetRequestMutationVariables>(ResetRequestDocument, options);
      }
export type ResetRequestMutationHookResult = ReturnType<typeof useResetRequestMutation>;
export type ResetRequestMutationResult = Apollo.MutationResult<ResetRequestMutation>;
export type ResetRequestMutationOptions = Apollo.BaseMutationOptions<ResetRequestMutation, ResetRequestMutationVariables>;