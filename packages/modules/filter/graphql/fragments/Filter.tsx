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

export type FilterFragment = { __typename?: 'Filter', id?: string | null | undefined, name?: string | null | undefined, key?: string | null | undefined, type?: Types.FilterType | null | undefined, items?: Array<{ __typename?: 'FilterItem', id?: string | null | undefined, key?: string | null | undefined, name?: string | null | undefined, value?: string | null | undefined } | null | undefined> | null | undefined };

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