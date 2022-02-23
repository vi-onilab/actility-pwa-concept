import { ProductBadge } from '~modules/graphql'

const ProductInterfaceToProductBadges = (item): ProductBadge[] => {
    return item?.categories?.slice?.(0, 1)?.map?.((category): ProductBadge => ({
        id: category?.id,
        name: category?.name,
        icon: category?.category_widget_svg_icon,
        __typename: 'ProductBadge',
    }))
}

export default ProductInterfaceToProductBadges
