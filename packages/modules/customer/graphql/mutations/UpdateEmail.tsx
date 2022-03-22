import * as Types from '../../../graphql';

import { gql } from '@apollo/client';
import { CustomerFragmentDoc } from '../fragments/Customer';
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
export type UpdateEmailMutationVariables = Types.Exact<{
  email?: Types.InputMaybe<Types.Scalars['String']>;
  password?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type UpdateEmailMutation = { __typename?: 'Mutation', updateEmail?: { __typename?: 'Customer', id?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, email?: string | null | undefined, middleName?: string | null | undefined, dateOfBirth?: number | null | undefined, gender?: number | null | undefined, isSubscribed?: boolean | null | undefined } | null | undefined };


export const UpdateEmailDocument = gql`
    mutation UpdateEmail($email: String, $password: String) {
  updateEmail(email: $email, password: $password) @client {
    ...Customer
  }
}
    ${CustomerFragmentDoc}`;
export type UpdateEmailMutationFn = Apollo.MutationFunction<UpdateEmailMutation, UpdateEmailMutationVariables>;

/**
 * __useUpdateEmailMutation__
 *
 * To run a mutation, you first call `useUpdateEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEmailMutation, { data, loading, error }] = useUpdateEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useUpdateEmailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateEmailMutation, UpdateEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateEmailMutation, UpdateEmailMutationVariables>(UpdateEmailDocument, options);
      }
export type UpdateEmailMutationHookResult = ReturnType<typeof useUpdateEmailMutation>;
export type UpdateEmailMutationResult = Apollo.MutationResult<UpdateEmailMutation>;
export type UpdateEmailMutationOptions = Apollo.BaseMutationOptions<UpdateEmailMutation, UpdateEmailMutationVariables>;