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

export type ProductPriceFragment = { __typename?: 'ProductPrice', isRange?: boolean | null | undefined, current?: { __typename?: 'Money', value?: number | null | undefined, text?: string | null | undefined, currency?: string | null | undefined } | null | undefined, initial?: { __typename?: 'Money', value?: number | null | undefined, text?: string | null | undefined, currency?: string | null | undefined } | null | undefined };

export const ProductPriceFragmentDoc = gql`
    fragment ProductPrice on ProductPrice {
  current {
    ...Money
  }
  initial {
    ...Money
  }
  isRange
}
    ${MoneyFragmentDoc}`;