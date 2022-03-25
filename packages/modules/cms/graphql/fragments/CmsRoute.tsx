import * as Types from '../../../graphql';

import { gql } from '@apollo/client';

/**
* NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
* USE `yarn cli codegen`.
*/
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

export type CmsRouteFragment = { __typename?: 'CmsRoute', id?: string | null, type?: Types.CmsRouteType | null, url?: string | null };

export const CmsRouteFragmentDoc = gql`
    fragment CmsRoute on CmsRoute {
  id
  type
  url
}
    `;