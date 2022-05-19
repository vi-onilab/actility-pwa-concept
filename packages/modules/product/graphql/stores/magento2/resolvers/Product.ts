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
} from '@pwa-concept/modules/graphql'
import {
    Magento2ConfigurableProductOptions,
    Magento2CustomizableOptionInterface,
} from '@pwa-concept/stores/magento2/graphql'
import { Maybe } from '@pwa-concept/stores/magento2/graphql'
import { Magento2ConfigurableProductOptionsValues } from '@pwa-concept/stores/magento2/graphql'
import { ProductBreadcrumbUrlType } from '@pwa-concept/modules/graphql'

const id = (context) => String(context?.id)

const Product: ProductResolvers = {
    id: (_, __, { context }) => id(context),
    sku: (_, __, { context }) => context?.sku,
    name: (_, __, { context }) => context?.name,
    description: (_, __, { context }) => context?.description?.html,
    stock: (_, __, { context }) => ({
        name: context?.stock_status === ProductStockType.InStock ? 'In stock' : 'Out of stock',
        type: context?.stock_status,
        __typename: 'ProductStock',
    }),
    breadcrumbs: (_, __, { context }) => [
        ...(context?.categories?.slice(0, 1)?.map?.((category): ProductBreadcrumb => ({
            id: String(category?.id),
            name: category?.name,
            url: {
                id: String(category?.id),
                type: ProductBreadcrumbUrlType.Category,
                to: category?.url_path,
                __typename: 'ProductBreadcrumbUrl',
            },
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
    vat: () => ({
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
