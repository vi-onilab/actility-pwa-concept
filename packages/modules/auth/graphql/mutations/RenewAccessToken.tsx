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
export type RenewAccessTokenMutationVariables = Types.Exact<{
  code?: Types.InputMaybe<Types.Scalars['String']>;
  email?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type RenewAccessTokenMutation = { __typename?: 'Mutation', renewAccessToken?: { __typename?: 'RenewAccessToken', token?: string | null | undefined } | null | undefined };


export const RenewAccessTokenDocument = gql`
    mutation RenewAccessToken($code: String, $email: String) {
  renewAccessToken(code: $code, email: $email) @client {
    token
  }
}
    `;
export type RenewAccessTokenMutationFn = Apollo.MutationFunction<RenewAccessTokenMutation, RenewAccessTokenMutationVariables>;

/**
 * __useRenewAccessTokenMutation__
 *
 * To run a mutation, you first call `useRenewAccessTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRenewAccessTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [renewAccessTokenMutation, { data, loading, error }] = useRenewAccessTokenMutation({
 *   variables: {
 *      code: // value for 'code'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRenewAccessTokenMutation(baseOptions?: Apollo.MutationHookOptions<RenewAccessTokenMutation, RenewAccessTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RenewAccessTokenMutation, RenewAccessTokenMutationVariables>(RenewAccessTokenDocument, options);
      }
export type RenewAccessTokenMutationHookResult = ReturnType<typeof useRenewAccessTokenMutation>;
export type RenewAccessTokenMutationResult = Apollo.MutationResult<RenewAccessTokenMutation>;
export type RenewAccessTokenMutationOptions = Apollo.BaseMutationOptions<RenewAccessTokenMutation, RenewAccessTokenMutationVariables>;