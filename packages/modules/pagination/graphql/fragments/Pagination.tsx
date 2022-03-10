/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 * USE `yarn build:schema-types` or `yarn build`.
 */

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

import * as Types from '../../../graphql';

import { gql } from '@apollo/client';
export type PaginationFragment = { __typename?: 'Pagination', count?: number | null | undefined, limit?: number | null | undefined, total?: number | null | undefined, current?: number | null | undefined };

export const PaginationFragmentDoc = gql`
    fragment Pagination on Pagination {
  count
  limit
  total
  current
}
    `;