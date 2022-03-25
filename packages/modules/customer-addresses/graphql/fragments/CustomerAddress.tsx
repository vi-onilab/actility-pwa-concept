import * as Types from '../../../graphql';

import { gql } from '@apollo/client';
import { CustomerAddressRegionFragmentDoc } from './CustomerAddressRegion';

/**
* NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
* USE `yarn cli codegen`.
*/
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

export type CustomerAddressFragment = { __typename?: 'CustomerAddress', id?: string | null, defaultBilling?: boolean | null, defaultShipping?: boolean | null, city?: string | null, company?: string | null, countryId?: string | null, firstName?: string | null, lastName?: string | null, telephone?: string | null, postcode?: string | null, street?: string | null, region?: { __typename?: 'CustomerAddressRegion', region?: string | null, regionCode?: string | null, regionId?: number | null } | null };

export const CustomerAddressFragmentDoc = gql`
    fragment CustomerAddress on CustomerAddress {
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
  street
  region {
    ...CustomerAddressRegion
  }
}
    ${CustomerAddressRegionFragmentDoc}`;