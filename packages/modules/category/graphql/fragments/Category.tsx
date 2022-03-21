import * as Types from '../../../graphql';

import { gql } from '@apollo/client';

/**
* NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
* USE `yarn cli codegen`.
*/
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

export type CategoryFragment = { __typename?: 'Category', id?: string | null | undefined, name?: string | null | undefined, description?: string | null | undefined, level?: number | null | undefined, icon?: string | null | undefined, banners?: Array<{ __typename?: 'CategoryBanner', id?: string | null | undefined, title?: string | null | undefined, description?: string | null | undefined, image?: { __typename?: 'CategoryBannerImage', id?: string | null | undefined, url?: string | null | undefined, sources?: Array<{ __typename?: 'CategoryBannerImageSource', id?: string | null | undefined, url?: string | null | undefined, media?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined> | null | undefined, breadcrumbs?: Array<{ __typename?: 'CategoryBreadcrumb', id?: string | null | undefined, name?: string | null | undefined, level?: number | null | undefined } | null | undefined> | null | undefined, images?: { __typename?: 'CategoryImages', thumbnail?: { __typename?: 'CategoryImage', id?: string | null | undefined, url?: string | null | undefined } | null | undefined, main?: { __typename?: 'CategoryImage', id?: string | null | undefined, url?: string | null | undefined } | null | undefined } | null | undefined, parent?: { __typename?: 'Category', id?: string | null | undefined, name?: string | null | undefined, description?: string | null | undefined, level?: number | null | undefined } | null | undefined };

export const CategoryFragmentDoc = gql`
    fragment Category on Category {
  id
  name
  description
  level
  icon
  banners {
    id
    title
    description
    image {
      id
      url
      sources {
        id
        url
        media
      }
    }
  }
  breadcrumbs {
    id
    name
    level
  }
  images {
    thumbnail {
      id
      url
    }
    main {
      id
      url
    }
  }
  parent {
    id
    name
    description
    level
  }
}
    `;