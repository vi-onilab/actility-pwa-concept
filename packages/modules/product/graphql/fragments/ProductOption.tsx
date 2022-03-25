import * as Types from '../../../graphql';

import { gql } from '@apollo/client';
import { MoneyFragmentDoc } from '../../../currency/graphql/fragments/Money';

/**
* NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
* USE `yarn cli codegen`.
*/
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

export type ProductOptionFragment = { __typename?: 'ProductOption', id?: string | null, name?: string | null, key?: string | null, type?: Types.ProductOptionType | null, required?: boolean | null, kind?: Types.ProductOptionKind | null, values?: Array<{ __typename?: 'ProductOptionValue', name?: string | null, value?: string | null, price?: { __typename?: 'Money', value?: number | null, text?: string | null, currency?: string | null } | null } | null> | null };

export const ProductOptionFragmentDoc = gql`
    fragment ProductOption on ProductOption {
  id
  name
  key
  type
  required
  kind
  values {
    name
    value
    price {
      ...Money
    }
  }
}
    ${MoneyFragmentDoc}`;