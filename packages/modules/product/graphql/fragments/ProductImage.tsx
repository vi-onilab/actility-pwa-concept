import * as Types from '../../../graphql';

import { gql } from '@apollo/client';

/**
* NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
* USE `yarn cli codegen`.
*/
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

export type ProductImageFragment = { __typename?: 'ProductImage', id?: string | null, description?: string | null, url?: string | null };

export const ProductImageFragmentDoc = gql`
    fragment ProductImage on ProductImage {
  id
  description
  url
}
    `;