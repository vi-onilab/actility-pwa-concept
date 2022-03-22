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

export type CustomerAddressFragment = { __typename?: 'CustomerAddress', id?: string | null | undefined, defaultBilling?: boolean | null | undefined, defaultShipping?: boolean | null | undefined, city?: string | null | undefined, company?: string | null | undefined, countryId?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, telephone?: string | null | undefined, postcode?: string | null | undefined, street?: string | null | undefined, region?: { __typename?: 'CustomerAddressRegion', region?: string | null | undefined, regionCode?: string | null | undefined, regionId?: number | null | undefined } | null | undefined };

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