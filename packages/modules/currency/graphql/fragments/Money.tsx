/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 * USE `yarn build:schema-types` or `yarn build`.
 */

/* eslint-disable */
/* tslint:disable */
/* @ts-nocheck */

import * as Types from '../../../graphql';

import { gql } from '@apollo/client';
export type MoneyFragment = { __typename?: 'Money', value?: number | null | undefined, text?: string | null | undefined, currency?: string | null | undefined };

export const MoneyFragmentDoc = gql`
    fragment Money on Money {
  value
  text
  currency
}
    `;