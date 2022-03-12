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
export type UpdateCustomerAddressMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['ID']>;
  input?: Types.InputMaybe<Types.UpdateCustomerAddressInput>;
}>;


export type UpdateCustomerAddressMutation = { __typename?: 'Mutation', updateCustomerAddress?: { __typename?: 'CustomerAddress', id?: string | null | undefined, defaultBilling?: boolean | null | undefined, defaultShipping?: boolean | null | undefined, city?: string | null | undefined, company?: string | null | undefined, countryId?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, telephone?: string | null | undefined, postcode?: string | null | undefined, street?: string | null | undefined, region?: { __typename?: 'CustomerAddressesRegion', region?: string | null | undefined, regionCode?: string | null | undefined, regionId?: number | null | undefined } | null | undefined } | null | undefined };


export const UpdateCustomerAddressDocument = gql`
    mutation UpdateCustomerAddress($id: ID, $input: UpdateCustomerAddressInput) {
  updateCustomerAddress(id: $id, input: $input) @client {
    id
    defaultBilling
    defaultShipping
    city
    company
    countryId
    firstName
    lastName
    telephone
    postcode
    region {
      region
      regionCode
      regionId
    }
    street
  }
}
    `;
export type UpdateCustomerAddressMutationFn = Apollo.MutationFunction<UpdateCustomerAddressMutation, UpdateCustomerAddressMutationVariables>;

/**
 * __useUpdateCustomerAddressMutation__
 *
 * To run a mutation, you first call `useUpdateCustomerAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCustomerAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCustomerAddressMutation, { data, loading, error }] = useUpdateCustomerAddressMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCustomerAddressMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateCustomerAddressMutation, UpdateCustomerAddressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateCustomerAddressMutation, UpdateCustomerAddressMutationVariables>(UpdateCustomerAddressDocument, options);
      }
export type UpdateCustomerAddressMutationHookResult = ReturnType<typeof useUpdateCustomerAddressMutation>;
export type UpdateCustomerAddressMutationResult = Apollo.MutationResult<UpdateCustomerAddressMutation>;
export type UpdateCustomerAddressMutationOptions = Apollo.BaseMutationOptions<UpdateCustomerAddressMutation, UpdateCustomerAddressMutationVariables>;