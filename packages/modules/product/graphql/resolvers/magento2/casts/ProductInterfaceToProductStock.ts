import { ProductStock, ProductStockType } from '~modules/graphql'

const ProductInterfaceToProductStock = (item): ProductStock => {
    // TODO: Translate me
    return {
        name: item?.stock_status === ProductStockType.InStock ? 'In stock' : 'Out of stock',
        type: item?.stock_status,
        __typename: 'ProductStock',
    }
}

export default ProductInterfaceToProductStock
