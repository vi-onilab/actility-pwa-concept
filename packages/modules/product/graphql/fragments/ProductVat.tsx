import * as Types from '../../../graphql';

import { gql } from '@apollo/client';

/**
* NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
* USE `yarn cli codegen`.
*/
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

export type ProductVatFragment = { __typename?: 'ProductVat', type?: Types.ProductVatType | null | undefined, name?: string | null | undefined };

export const ProductVatFragmentDoc = gql`
    fragment ProductVat on ProductVat {
  type
  name
}
    `;