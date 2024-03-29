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

export type ProductFragment = { __typename?: 'Product', id?: string | null, name?: string | null, url?: string | null, breadcrumbs?: Array<{ __typename?: 'ProductBreadcrumb', id?: string | null, name?: string | null, url?: { __typename?: 'ProductBreadcrumbUrl', id?: string | null, type?: Types.ProductBreadcrumbUrlType | null, to?: string | null } | null } | null> | null, stock?: { __typename?: 'ProductStock', name?: string | null, type?: Types.ProductStockType | null } | null, vat?: { __typename?: 'ProductVat', type?: Types.ProductVatType | null, name?: string | null } | null, images?: Array<{ __typename?: 'ProductImage', id?: string | null, description?: string | null, url?: string | null } | null> | null, thumbnail?: { __typename?: 'ProductImage', id?: string | null, description?: string | null, url?: string | null } | null, price?: { __typename?: 'ProductPrice', discount?: number | null, isRange?: boolean | null, badges?: Array<{ __typename?: 'ProductPriceBadge', name?: string | null } | null> | null, current?: { __typename?: 'Money', value?: number | null, text?: string | null, currency?: string | null } | null, initial?: { __typename?: 'Money', value?: number | null, text?: string | null, currency?: string | null } | null } | null, options?: Array<{ __typename?: 'ProductOption', id?: string | null, name?: string | null, key?: string | null, type?: Types.ProductOptionType | null, required?: boolean | null, kind?: Types.ProductOptionKind | null, values?: Array<{ __typename?: 'ProductOptionValue', name?: string | null, value?: string | null, price?: { __typename?: 'Money', value?: number | null, text?: string | null, currency?: string | null } | null } | null> | null } | null> | null, variants?: Array<{ __typename?: 'ProductVariant', options?: Array<{ __typename?: 'ProductVariantOption', key?: string | null, value?: string | null } | null> | null, product?: { __typename?: 'Product', id?: string | null, sku?: string | null, name?: string | null, images?: Array<{ __typename?: 'ProductImage', id?: string | null, description?: string | null, url?: string | null } | null> | null, thumbnail?: { __typename?: 'ProductImage', id?: string | null, description?: string | null, url?: string | null } | null, price?: { __typename?: 'ProductPrice', discount?: number | null, isRange?: boolean | null, badges?: Array<{ __typename?: 'ProductPriceBadge', name?: string | null } | null> | null, current?: { __typename?: 'Money', value?: number | null, text?: string | null, currency?: string | null } | null, initial?: { __typename?: 'Money', value?: number | null, text?: string | null, currency?: string | null } | null } | null } | null } | null> | null };

export const ProductFragmentDoc = gql`
    fragment Product on Product {
  id
  name
  url
  breadcrumbs {
    id
    name
    url {
      id
      type
      to
    }
  }
  stock {
    name
    type
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
  variants {
    options {
      key
      value
    }
    product {
      id
      sku
      name
      images {
        ...ProductImage
      }
      thumbnail {
        ...ProductImage
      }
      price {
        ...ProductPrice
      }
    }
  }
}
    ${ProductVatFragmentDoc}
${ProductImageFragmentDoc}
${ProductPriceFragmentDoc}
${ProductOptionFragmentDoc}`;