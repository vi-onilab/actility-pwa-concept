import * as Types from '../../../graphql';

import { gql } from '@apollo/client';

/**
* NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
* USE `yarn cli codegen`.
*/
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

export type MoneyFragment = { __typename?: 'Money', value?: number | null, text?: string | null, currency?: string | null };

export const MoneyFragmentDoc = gql`
    fragment Money on Money {
  value
  text
  currency
}
    `;