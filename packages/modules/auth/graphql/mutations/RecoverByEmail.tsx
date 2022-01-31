/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 * USE `yarn build:schema-types` or `yarn build`.
 */

/* eslint-disable */
/* tslint:disable */
/* @ts-nocheck */

import * as Types from '../../../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type RecoverByEmailMutationVariables = Types.Exact<{
  email?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type RecoverByEmailMutation = { __typename?: 'Mutation', recoverByEmail?: string | null | undefined };


export const RecoverByEmailDocument = gql`
    mutation RecoverByEmail($email: String) {
  recoverByEmail(email: $email) @client
}
    `;
export type RecoverByEmailMutationFn = Apollo.MutationFunction<RecoverByEmailMutation, RecoverByEmailMutationVariables>;

/**
 * __useRecoverByEmailMutation__
 *
 * To run a mutation, you first call `useRecoverByEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRecoverByEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [recoverByEmailMutation, { data, loading, error }] = useRecoverByEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRecoverByEmailMutation(baseOptions?: Apollo.MutationHookOptions<RecoverByEmailMutation, RecoverByEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RecoverByEmailMutation, RecoverByEmailMutationVariables>(RecoverByEmailDocument, options);
      }
export type RecoverByEmailMutationHookResult = ReturnType<typeof useRecoverByEmailMutation>;
export type RecoverByEmailMutationResult = Apollo.MutationResult<RecoverByEmailMutation>;
export type RecoverByEmailMutationOptions = Apollo.BaseMutationOptions<RecoverByEmailMutation, RecoverByEmailMutationVariables>;