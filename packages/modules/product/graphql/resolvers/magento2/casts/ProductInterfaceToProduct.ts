import { Product, ProductBadge, ProductImage } from '~modules/graphql'

const ProductInterfaceToProduct = (item): Product => {
    const id = String(item?.id)

    return {
        id,
        name: item?.name,
        images: item?.media_gallery?.map?.((image, index): ProductImage => ({
            id: `${id}_${index}`,
            url: image?.url,
            description: image?.label,
            __typename: 'ProductImage',
        })),
        badges: item?.categories?.slice?.(0, 1)?.map?.((category): ProductBadge => ({
            id: category?.id,
            name: category?.name,
            icon: category?.category_widget_svg_icon,
            __typename: 'ProductBadge',
        })) || [],
        price: {
            name: '',
            format: '',
            value: 1,
        },
        thumbnail: {
            id,
            url: item?.image?.url,
            description: item?.image?.label,
            __typename: 'ProductImage',
        },
        __typename: 'Product',
    }
}

export default ProductInterfaceToProduct
