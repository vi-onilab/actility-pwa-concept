import * as Types from '../../../graphql';

import { gql } from '@apollo/client';

/**
* NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
* USE `yarn cli codegen`.
*/
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

export type PaginationFragment = { __typename?: 'Pagination', count?: number | null, limit?: number | null, total?: number | null, current?: number | null };

export const PaginationFragmentDoc = gql`
    fragment Pagination on Pagination {
  count
  limit
  total
  current
}
    `;