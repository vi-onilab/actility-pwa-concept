import * as Types from '../../../graphql';

import { gql } from '@apollo/client';

/**
* NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
* USE `yarn cli codegen`.
*/
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

export type AccessTokenFragment = { __typename?: 'AccessToken', token?: string | null | undefined };

export const AccessTokenFragmentDoc = gql`
    fragment AccessToken on AccessToken {
  token
}
    `;