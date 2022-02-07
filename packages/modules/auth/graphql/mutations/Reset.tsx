/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 * USE `yarn build:schema-types` or `yarn build`.
 */

/* eslint-disable */
/* tslint:disable */
/* @ts-nocheck */

import * as Types from '../../../graphql'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

const defaultOptions = {} as const
export type ResetMutationVariables = Types.Exact<{
    code?: Types.InputMaybe<Types.Scalars['String']>;
    email?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type ResetMutation = { __typename?: 'Mutation', reset?: { __typename?: 'RenewToken', token?: string | null | undefined } | null | undefined };


export const ResetDocument = gql`
    mutation Reset($code: String, $email: String) {
        reset(code: $code, email: $email) @client {
            token
        }
    }
`
export type ResetMutationFn = Apollo.MutationFunction<ResetMutation, ResetMutationVariables>;

/**
 * __useResetMutation__
 *
 * To run a mutation, you first call `useResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetMutation, { data, loading, error }] = useResetMutation({
 *   variables: {
 *      code: // value for 'code'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useResetMutation(baseOptions?: Apollo.MutationHookOptions<ResetMutation, ResetMutationVariables>) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useMutation<ResetMutation, ResetMutationVariables>(ResetDocument, options)
}

export type ResetMutationHookResult = ReturnType<typeof useResetMutation>;
export type ResetMutationResult = Apollo.MutationResult<ResetMutation>;
export type ResetMutationOptions = Apollo.BaseMutationOptions<ResetMutation, ResetMutationVariables>;