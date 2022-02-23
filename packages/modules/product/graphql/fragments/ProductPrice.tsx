/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 * USE `yarn build:schema-types` or `yarn build`.
 */

/* eslint-disable */
/* tslint:disable */
/* @ts-nocheck */

import * as Types from '../../../graphql';

import { gql } from '@apollo/client';
import { MoneyFragmentDoc } from '../../../currency/graphql/fragments/Money';
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