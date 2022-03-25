import * as Types from '../../../graphql';

import { gql } from '@apollo/client';

/**
* NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
* USE `yarn cli codegen`.
*/
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

export type ResetRequestOutputFragment = { __typename?: 'ResetRequestOutput', email?: string | null };

export const ResetRequestOutputFragmentDoc = gql`
    fragment ResetRequestOutput on ResetRequestOutput {
  email
}
    `;