import * as Types from '../../../graphql';

import { gql } from '@apollo/client';

/**
* NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
* USE `yarn cli codegen`.
*/
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

export type CustomerFragment = { __typename?: 'Customer', id?: string | null, firstName?: string | null, lastName?: string | null, fullName?: string | null, email?: string | null, middleName?: string | null, dateOfBirth?: number | null, gender?: number | null, isSubscribed?: boolean | null };

export const CustomerFragmentDoc = gql`
    fragment Customer on Customer {
  id
  firstName
  lastName
  fullName
  email
  middleName
  dateOfBirth
  gender
  isSubscribed
}
    `;