import * as Types from '../../../graphql';

import { gql } from '@apollo/client';

/**
* NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
* USE `yarn cli codegen`.
*/
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

export type CategoryFragment = { __typename?: 'Category', id?: string | null | undefined, name?: string | null | undefined, description?: string | null | undefined, level?: number | null | undefined, breadcrumbs?: Array<{ __typename?: 'CategoryBreadcrumb', id?: string | null | undefined, name?: string | null | undefined, level?: number | null | undefined } | null | undefined> | null | undefined, parent?: { __typename?: 'Category', id?: string | null | undefined, name?: string | null | undefined, description?: string | null | undefined, level?: number | null | undefined } | null | undefined };

export const CategoryFragmentDoc = gql`
    fragment Category on Category {
  id
  name
  description
  level
  breadcrumbs {
    id
    name
    level
  }
  parent {
    id
    name
    description
    level
  }
}
    `;