import * as Types from '../../../graphql';

import { gql } from '@apollo/client';

/**
* NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
* USE `yarn cli codegen`.
*/
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

export type ResetTokenFragment = { __typename?: 'ResetToken', token?: string | null | undefined };

export const ResetTokenFragmentDoc = gql`
    fragment ResetToken on ResetToken {
  token
}
    `;