import * as Types from '../../../graphql';

import { gql } from '@apollo/client';

/**
* NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
* USE `yarn cli codegen`.
*/
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

export type CustomerFragment = { __typename?: 'Customer', id?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, email?: string | null | undefined, middleName?: string | null | undefined, dateOfBirth?: number | null | undefined, gender?: number | null | undefined, isSubscribed?: boolean | null | undefined };

export const CustomerFragmentDoc = gql`
    fragment Customer on Customer {
  id
  firstName
  lastName
  email
  middleName
  dateOfBirth
  gender
  isSubscribed
}
    `;