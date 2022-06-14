import {
    ProductBreadcrumb,
    ProductImage,
    ProductOption,
    ProductOptionKind,
    ProductOptionType,
    ProductOptionValue,
    ProductResolvers,
    ProductStockType,
    ProductVatType,
    ProductBreadcrumbUrlType,
    ProductVariant,
    ProductVariantOption,
} from '@pwa-concept/modules/graphql'
import {
    Maybe,
    Magento2ConfigurableProductOptions,
    Magento2CustomizableOptionInterface,
    Magento2ConfigurableProductOptionsValues,
} from '@pwa-concept/stores/magento2/graphql'

const id = (context) => String(context?.id)

const Product: ProductResolvers = {
    id: (_, __, { context }) => id(context),
    sku: (_, __, { context }) => context?.sku || null,
    name: (_, __, { context }) => context?.name || null,
    url: (_, __, { context }) => context?.url_rewrites?.[0]?.url || null,
    description: (_, __, { context }) => context?.description?.html || null,
    stock: (_, __, { context }) => ({
        name: context?.stock_status === ProductStockType.InStock ? 'In stock' : 'Out of stock',
        type: context?.stock_status || null,
        __typename: 'ProductStock',
    }),

    variants: (product, __, { context }) => (
        context?.variants?.map?.((item): ProductVariant => ({
            product: {
                __context: item?.product,
                __typename: 'Product',
            },
            options: item?.attributes?.map?.((attribute): ProductVariantOption => ({
                key: attribute?.code || null,
                value: attribute?.uid || null,
                __typename: 'ProductVariantOption',
            })),
            __typename: 'ProductVariant',
        })) || product?.variants || []
    ),

    breadcrumbs: (_, __, { context }) => [
        ...(context?.categories?.slice(0, 1)?.map?.((category): ProductBreadcrumb => ({
            id: String(category?.id),
            name: category?.name || null,
            url: {
                id: String(category?.id),
                type: ProductBreadcrumbUrlType.Category,
                to: category?.url_path?.length > 0 ? `/${category.url_path}` : null,
                __typename: 'ProductBreadcrumbUrl',
            },
            __typename: 'ProductBreadcrumb',
        })) || []),
        {
            id: `product-${id(context)}`,
            name: context?.name || null,
            url: null,
            __typename: 'ProductBreadcrumb',
        },
    ],
    images: (_, __, { context }) => context?.media_gallery?.map?.((image, index): ProductImage => ({
        id: `${id(context)}_${index}`,
        url: image?.url || null,
        description: image?.label || null,
        __typename: 'ProductImage',
    })),
    vat: () => ({
        type: ProductVatType.Excluded,
        name: 'VAT excluded',
        __typename: 'ProductVat',
    }),
    price: (_, __, { context }) => {
        const priceRange = context?.price_range

        const maximumPrice = priceRange?.maximum_price
        const minimumPrice = priceRange?.minimum_price
        const isRange = minimumPrice?.final_price?.value !== maximumPrice?.final_price?.value

        const current = minimumPrice?.final_price
        const initial = minimumPrice?.regular_price

        return {
            badges: Math.ceil(maximumPrice?.discount?.percent_off || 0) > 0 ? (
                [
                    {
                        name: `-${Math.ceil(maximumPrice.discount.percent_off || 0)}%`,
                        __typename: 'ProductPriceBadge',
                    },
                ]
            ) : [],
            discount: maximumPrice?.discount?.percent_off || null,
            current: {
                currency: current?.currency || null,
                value: current?.value || null,
                __typename: 'Money',
            },
            initial: {
                currency: initial?.currency || null,
                value: initial?.value || null,
                __typename: 'Money',
            },
            isRange,
            __typename: 'ProductPrice',
        }
    },
    thumbnail: (_, __, { context }) => context?.image ? {
        id: id(context),
        url: context?.image?.url || null,
        description: context?.image?.label || null,
        __typename: 'ProductImage',
    } : null,
    options: (_, __, { context }) => {
        const result: ProductOption[] = []

        const TYPE_BY_TYPENAME = {
            CustomizableAreaOption: ProductOptionType.Area,
            CustomizableDateOption: ProductOptionType.Date,
            CustomizableCheckboxOption: ProductOptionType.Checkbox,
            CustomizableDropDownOption: ProductOptionType.DropDown,
            CustomizableFieldOption: ProductOptionType.Field,
            CustomizableFileOption: ProductOptionType.Field,
            CustomizableMultipleOption: ProductOptionType.Multiple,
            CustomizableRadioOption: ProductOptionType.Radio,
        }

        context?.configurable_options?.forEach?.((item: Magento2ConfigurableProductOptions & { __typename: string }) => {
            result.push({
                id: item?.uid,
                key: item?.attribute_code,
                name: item?.label,
                kind: ProductOptionKind.Configurable,
                type: ProductOptionType.Radio,
                required: true,
                values: (
                    item?.values?.map((child: Maybe<Magento2ConfigurableProductOptionsValues & { swatch_data: { value: any, __typename: string } }>): ProductOptionValue => ({
                        value: child?.uid,
                        name: (
                            child?.swatch_data?.__typename === 'TextSwatchData' && child?.swatch_data?.value
                        ) || child?.store_label || child?.label || child?.default_label,
                        price: null,
                        __typename: 'ProductOptionValue',
                    }))
                ) || [],
                __typename: 'ProductOption',
            })
        })

        context?.options?.forEach?.((item: Magento2CustomizableOptionInterface & { __typename: string, value: any[] }) => {
            result.push({
                id: item?.uid,
                key: item?.uid,
                name: item?.title,
                kind: ProductOptionKind.Customizable,
                type: TYPE_BY_TYPENAME?.[item?.__typename],
                required: item?.required,
                values: (
                    item
                        ?.value?.filter(({ price_type: priceType }) => priceType?.toLowerCase() === 'fixed')
                        ?.map((child): ProductOptionValue => ({
                            value: child?.uid,
                            name: child?.title,
                            price: {
                                value: child?.price,
                                __typename: 'Money',
                            },
                            __typename: 'ProductOptionValue',
                        }))
                ) || [],
                __typename: 'ProductOption',
            })
        })

        return result
    },
}

export default Product
