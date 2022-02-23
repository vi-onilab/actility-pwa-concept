import { Product, ProductImage, ProductBreadcrumb } from '~modules/graphql'
import ProductInterfaceToProductPrice from './ProductInterfaceToProductPrice'
import ProductInterfaceToProductBadges from './ProductInterfaceToProductBadges'
import ProductInterfaceToProductStock from './ProductInterfaceToProductStock'

const ProductInterfaceToProduct = (item): Product => {
    const id = String(item?.id)

    return {
        id,
        name: item?.name,
        stock: ProductInterfaceToProductStock(item),
        breadcrumbs: [
            ...(item?.categories?.slice(0, 1)?.map?.((category): ProductBreadcrumb => ({
                id: String(category?.id),
                name: category?.name,
                __typename: 'ProductBreadcrumb',
            })) || []),
            {
                id: `product-${id}`,
                name: item?.name,
                __typename: 'ProductBreadcrumb',
            },
        ],
        manufacturer: {
            name: item?.manufacturer_name,
            __typename: 'ProductManufacturer',
        },
        images: item?.media_gallery?.map?.((image, index): ProductImage => ({
            id: `${id}_${index}`,
            url: image?.url,
            description: image?.label,
            __typename: 'ProductImage',
        })),
        badges: ProductInterfaceToProductBadges(item),
        price: ProductInterfaceToProductPrice(item),
        thumbnail: item?.image ? {
            id,
            url: item?.image?.url,
            description: item?.image?.label,
            __typename: 'ProductImage',
        } : null,
        __typename: 'Product',
    }
}

export default ProductInterfaceToProduct
