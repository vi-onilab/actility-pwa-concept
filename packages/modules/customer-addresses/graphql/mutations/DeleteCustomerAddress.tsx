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
export type DeleteCustomerAddressMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['ID']>;
}>;


export type DeleteCustomerAddressMutation = { __typename?: 'Mutation', deleteCustomerAddress?: boolean | null | undefined };


export const DeleteCustomerAddressDocument = gql`
    mutation DeleteCustomerAddress($id: ID) {
  deleteCustomerAddress(id: $id) @client
}
    `;
export type DeleteCustomerAddressMutationFn = Apollo.MutationFunction<DeleteCustomerAddressMutation, DeleteCustomerAddressMutationVariables>;

/**
 * __useDeleteCustomerAddressMutation__
 *
 * To run a mutation, you first call `useDeleteCustomerAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCustomerAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCustomerAddressMutation, { data, loading, error }] = useDeleteCustomerAddressMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCustomerAddressMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteCustomerAddressMutation, DeleteCustomerAddressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteCustomerAddressMutation, DeleteCustomerAddressMutationVariables>(DeleteCustomerAddressDocument, options);
      }
export type DeleteCustomerAddressMutationHookResult = ReturnType<typeof useDeleteCustomerAddressMutation>;
export type DeleteCustomerAddressMutationResult = Apollo.MutationResult<DeleteCustomerAddressMutation>;
export type DeleteCustomerAddressMutationOptions = Apollo.BaseMutationOptions<DeleteCustomerAddressMutation, DeleteCustomerAddressMutationVariables>;