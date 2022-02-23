/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 * USE `yarn build:schema-types` or `yarn build`.
 */

/* eslint-disable */
/* tslint:disable */
/* @ts-nocheck */

import * as Types from '../../../graphql';

import { gql } from '@apollo/client';
export type ProductImageFragment = { __typename?: 'ProductImage', id?: string | null | undefined, description?: string | null | undefined, url?: string | null | undefined };

export const ProductImageFragmentDoc = gql`
    fragment ProductImage on ProductImage {
  id
  description
  url
}
    `;