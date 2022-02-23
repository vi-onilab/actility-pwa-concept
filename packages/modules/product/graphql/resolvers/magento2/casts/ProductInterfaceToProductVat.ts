import { ProductVat, ProductVatType } from '~modules/graphql'

const ProductInterfaceToProductVat = (item): ProductVat => {
    return {
        type: ProductVatType.Excluded,
        name: 'VAT excluded',
        __typename: 'ProductVat',
    }
}

export default ProductInterfaceToProductVat
