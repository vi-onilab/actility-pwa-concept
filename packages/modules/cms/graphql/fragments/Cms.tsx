import * as Types from '../../../graphql';

import { gql } from '@apollo/client';

/**
* NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
* USE `yarn cli codegen`.
*/
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

export type CmsFragment = { __typename?: 'Cms', id?: string | null | undefined, title?: string | null | undefined, content?: string | null | undefined, metaTitle?: string | null | undefined, metaKeywords?: string | null | undefined, metaDescription?: string | null | undefined };

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