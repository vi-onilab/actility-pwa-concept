import { Product, ProductRelationType } from '@pwa-concept/modules/graphql'
import { useProductRelationsQuery } from '@pwa-concept/modules/product/graphql/queries/ProductRelations'

const useProductRelations = (product: Product, type: ProductRelationType) => {
    const { data: { productRelations: data } = {}, loading } = useProductRelationsQuery({
        variables: {
            input: {
                id: product?.id,
                type,
            },
        },
        skip: !product?.id || !type,
    })

    return {
        data,
        loading,
    }
}

export default useProductRelations
