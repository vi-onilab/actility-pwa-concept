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
export type CreateCustomerAddressMutationVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.CustomerAddressInput>;
}>;


export type CreateCustomerAddressMutation = { __typename?: 'Mutation', createCustomerAddress?: { __typename?: 'CustomerAddress', id?: string | null | undefined, defaultBilling?: boolean | null | undefined, defaultShipping?: boolean | null | undefined, city?: string | null | undefined, company?: string | null | undefined, countryId?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, telephone?: string | null | undefined, postcode?: string | null | undefined, street?: string | null | undefined, region?: { __typename?: 'CustomerAddressesRegion', region?: string | null | undefined, regionCode?: string | null | undefined, regionId?: number | null | undefined } | null | undefined } | null | undefined };


export const CreateCustomerAddressDocument = gql`
    mutation CreateCustomerAddress($input: CustomerAddressInput) {
  createCustomerAddress(input: $input) @client {
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
export type CreateCustomerAddressMutationFn = Apollo.MutationFunction<CreateCustomerAddressMutation, CreateCustomerAddressMutationVariables>;

/**
 * __useCreateCustomerAddressMutation__
 *
 * To run a mutation, you first call `useCreateCustomerAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCustomerAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCustomerAddressMutation, { data, loading, error }] = useCreateCustomerAddressMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCustomerAddressMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateCustomerAddressMutation, CreateCustomerAddressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateCustomerAddressMutation, CreateCustomerAddressMutationVariables>(CreateCustomerAddressDocument, options);
      }
export type CreateCustomerAddressMutationHookResult = ReturnType<typeof useCreateCustomerAddressMutation>;
export type CreateCustomerAddressMutationResult = Apollo.MutationResult<CreateCustomerAddressMutation>;
export type CreateCustomerAddressMutationOptions = Apollo.BaseMutationOptions<CreateCustomerAddressMutation, CreateCustomerAddressMutationVariables>;