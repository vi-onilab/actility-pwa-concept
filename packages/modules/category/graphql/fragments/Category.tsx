import * as Types from '../../../graphql';

import { gql } from '@apollo/client';

/**
* NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
* USE `yarn cli codegen`.
*/
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

export type CategoryFragment = { __typename?: 'Category', id?: string | null, name?: string | null, description?: string | null, level?: number | null, breadcrumbs?: Array<{ __typename?: 'CategoryBreadcrumb', id?: string | null, name?: string | null, level?: number | null, url?: { __typename?: 'CategoryBreadcrumbUrl', id?: string | null, type?: Types.CategoryBreadcrumbUrlType | null, to?: string | null } | null } | null> | null };

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
    url {
      id
      type
      to
    }
  }
}
    `;