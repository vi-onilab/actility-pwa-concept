import * as Types from '../../../graphql';

import { gql } from '@apollo/client';

/**
* NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
* USE `yarn cli codegen`.
*/
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

export type CustomerAddressRegionFragment = { __typename?: 'CustomerAddressRegion', region?: string | null, regionCode?: string | null, regionId?: number | null };

export const CustomerAddressRegionFragmentDoc = gql`
    fragment CustomerAddressRegion on CustomerAddressRegion {
  region
  regionCode
  regionId
}
    `;