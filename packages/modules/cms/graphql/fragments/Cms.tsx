import * as Types from '../../../graphql';

import { gql } from '@apollo/client';

/**
* NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
* USE `yarn cli codegen`.
*/
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

export type CmsFragment = { __typename?: 'Cms', id?: string | null, title?: string | null, content?: string | null, metaTitle?: string | null, metaKeywords?: string | null, metaDescription?: string | null };

export const CmsFragmentDoc = gql`
    fragment Cms on Cms {
  id
  title
  content
  metaTitle
  metaKeywords
  metaDescription
}
    `;