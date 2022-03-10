/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 * USE `yarn build:schema-types` or `yarn build`.
 */

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

import * as Types from '../../../graphql';

import { gql } from '@apollo/client';
export type ProductVatFragment = { __typename?: 'ProductVat', type?: Types.ProductVatType | null | undefined, name?: string | null | undefined };

export const ProductVatFragmentDoc = gql`
    fragment ProductVat on ProductVat {
  type
  name
}
    `;