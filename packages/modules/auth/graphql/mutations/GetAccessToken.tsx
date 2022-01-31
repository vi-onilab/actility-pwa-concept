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
export type GetAccessTokenMutationVariables = Types.Exact<{
  email?: Types.InputMaybe<Types.Scalars['String']>;
  password?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type GetAccessTokenMutation = { __typename?: 'Mutation', getAccessToken?: { __typename?: 'GetAccessToken', accessToken?: string | null | undefined } | null | undefined };


export const GetAccessTokenDocument = gql`
    mutation GetAccessToken($email: String, $password: String) {
  getAccessToken(email: $email, password: $password) @client {
    accessToken
  }
}
    `;
export type GetAccessTokenMutationFn = Apollo.MutationFunction<GetAccessTokenMutation, GetAccessTokenMutationVariables>;

/**
 * __useGetAccessTokenMutation__
 *
 * To run a mutation, you first call `useGetAccessTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetAccessTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getAccessTokenMutation, { data, loading, error }] = useGetAccessTokenMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useGetAccessTokenMutation(baseOptions?: Apollo.MutationHookOptions<GetAccessTokenMutation, GetAccessTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetAccessTokenMutation, GetAccessTokenMutationVariables>(GetAccessTokenDocument, options);
      }
export type GetAccessTokenMutationHookResult = ReturnType<typeof useGetAccessTokenMutation>;
export type GetAccessTokenMutationResult = Apollo.MutationResult<GetAccessTokenMutation>;
export type GetAccessTokenMutationOptions = Apollo.BaseMutationOptions<GetAccessTokenMutation, GetAccessTokenMutationVariables>;