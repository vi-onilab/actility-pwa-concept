import * as Types from '../../../graphql';

import { gql } from '@apollo/client';
import { FilterItemFragmentDoc } from './FilterItem';

/**
* NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
* USE `yarn cli codegen`.
*/
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

export type FilterFragment = { __typename?: 'Filter', id?: string | null, name?: string | null, key?: string | null, type?: Types.FilterType | null, items?: Array<{ __typename?: 'FilterItem', id?: string | null, key?: string | null, name?: string | null, value?: string | null } | null> | null };

export const FilterFragmentDoc = gql`
    fragment Filter on Filter {
  id
  name
  key
  type
  items {
    ...FilterItem
  }
}
    ${FilterItemFragmentDoc}`;