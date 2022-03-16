import * as Types from '../../../graphql';

import { gql } from '@apollo/client';
import { ProductVatFragmentDoc } from './ProductVat';
import { ProductImageFragmentDoc } from './ProductImage';
import { ProductPriceFragmentDoc } from './ProductPrice';
import { ProductOptionFragmentDoc } from './ProductOption';

/**
* NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
* USE `yarn cli codegen`.
*/
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

export type ProductFragment = { __typename?: 'Product', id?: string | null | undefined, name?: string | null | undefined, breadcrumbs?: Array<{ __typename?: 'ProductBreadcrumb', id?: string | null | undefined, name?: string | null | undefined } | null | undefined> | null | undefined, stock?: { __typename?: 'ProductStock', name?: string | null | undefined, type?: Types.ProductStockType | null | undefined } | null | undefined, badges?: Array<{ __typename?: 'ProductBadge', id?: string | null | undefined, name?: string | null | undefined, icon?: string | null | undefined } | null | undefined> | null | undefined, vat?: { __typename?: 'ProductVat', type?: Types.ProductVatType | null | undefined, name?: string | null | undefined } | null | undefined, images?: Array<{ __typename?: 'ProductImage', id?: string | null | undefined, description?: string | null | undefined, url?: string | null | undefined } | null | undefined> | null | undefined, thumbnail?: { __typename?: 'ProductImage', id?: string | null | undefined, description?: string | null | undefined, url?: string | null | undefined } | null | undefined, price?: { __typename?: 'ProductPrice', isRange?: boolean | null | undefined, current?: { __typename?: 'Money', value?: number | null | undefined, text?: string | null | undefined, currency?: string | null | undefined } | null | undefined, initial?: { __typename?: 'Money', value?: number | null | undefined, text?: string | null | undefined, currency?: string | null | undefined } | null | undefined } | null | undefined, options?: Array<{ __typename?: 'ProductOption', id?: string | null | undefined, name?: string | null | undefined, key?: string | null | undefined, type?: Types.ProductOptionType | null | undefined, required?: boolean | null | undefined, kind?: Types.ProductOptionKind | null | undefined, values?: Array<{ __typename?: 'ProductOptionValue', name?: string | null | undefined, value?: string | null | undefined, price?: { __typename?: 'Money', value?: number | null | undefined, text?: string | null | undefined, currency?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export const ProductFragmentDoc = gql`
    fragment Product on Product {
  id
  name
  breadcrumbs {
    id
    name
  }
  stock {
    name
    type
  }
  badges {
    id
    name
    icon
  }
  vat {
    ...ProductVat
  }
  images {
    ...ProductImage
  }
  thumbnail {
    ...ProductImage
  }
  price {
    ...ProductPrice
  }
  options {
    ...ProductOption
  }
}
    ${ProductVatFragmentDoc}
${ProductImageFragmentDoc}
${ProductPriceFragmentDoc}
${ProductOptionFragmentDoc}`;