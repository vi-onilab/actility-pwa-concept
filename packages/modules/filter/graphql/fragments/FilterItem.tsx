import * as Types from '../../../graphql';

import { gql } from '@apollo/client';

/**
* NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
* USE `yarn cli codegen`.
*/
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

export type FilterItemFragment = { __typename?: 'FilterItem', id?: string | null, key?: string | null, name?: string | null, value?: string | null };

export const FilterItemFragmentDoc = gql`
    fragment FilterItem on FilterItem {
  id
  key
  name
  value
}
    `;