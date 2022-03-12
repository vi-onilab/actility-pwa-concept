import { ProductResolvers, ProductBreadcrumb, ProductStockType, ProductImage, ProductVatType, ProductBadge } from '@pwa-concept/modules/graphql'

const id = (context) => String(context?.id)

const Product: ProductResolvers = {
    id: (_, __, { context }) => id(context),
    sku: (_, __, { context }) => context?.sku,
    name: (_, __, { context }) => context?.name,
    stock: (_, __, { context }) => ({
        name: context?.stock_status === ProductStockType.InStock ? 'In stock' : 'Out of stock',
        type: context?.stock_status,
        __typename: 'ProductStock',
    }),
    breadcrumbs: (_, __, { context }) => [
        ...(context?.categories?.slice(0, 1)?.map?.((category): ProductBreadcrumb => ({
            id: String(category?.id),
            name: category?.name,
            __typename: 'ProductBreadcrumb',
        })) || []),
        {
            id: `product-${id(context)}`,
            name: context?.name,
            __typename: 'ProductBreadcrumb',
        },
    ],
    images: (_, __, { context }) => context?.media_gallery?.map?.((image, index): ProductImage => ({
        id: `${id(context)}_${index}`,
        url: image?.url,
        description: image?.label,
        __typename: 'ProductImage',
    })),
    vat: (_, __, { context }) => ({
        type: ProductVatType.Excluded,
        name: 'VAT excluded',
        __typename: 'ProductVat',
    }),
    badges: (_, __, { context }) => context?.categories?.slice?.(0, 1)?.map?.((category) => ({
        id: category?.id,
        name: category?.name,
        icon: category?.category_widget_svg_icon,
        __typename: 'ProductBadge',
    })),
    price: (_, __, { context }) => {
        const priceRange = context?.price_range

        const maximumPrice = priceRange?.maximum_price
        const minimumPrice = priceRange?.minimum_price
        const isRange = minimumPrice?.final_price?.value !== maximumPrice?.final_price?.value

        const current = minimumPrice?.final_price
        const initial = minimumPrice?.final_price

        return {
            badges: [],
            current: {
                currency: current?.currency,
                value: current?.value,
                __typename: 'Money',
            },
            initial: {
                currency: initial?.currency,
                value: initial?.value,
                __typename: 'Money',
            },
            isRange,
            __typename: 'ProductPrice',
        }
    },
    thumbnail: (_, __, { context }) => context?.image ? {
        id: id(context),
        url: context?.image?.url,
        description: context?.image?.label,
        __typename: 'ProductImage',
    } : null,
}

export default Product
