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

export type ProductOptionFragment = { __typename?: 'ProductOption', id?: string | null | undefined, name?: string | null | undefined, key?: string | null | undefined, type?: Types.ProductOptionType | null | undefined, required?: boolean | null | undefined, kind?: Types.ProductOptionKind | null | undefined, values?: Array<{ __typename?: 'ProductOptionValue', name?: string | null | undefined, value?: string | null | undefined, price?: { __typename?: 'Money', value?: number | null | undefined, text?: string | null | undefined, currency?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined };

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