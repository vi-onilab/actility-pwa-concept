import { Product, ProductQueryInput } from '@pwa-concept/modules/graphql'
import { useProductQuery } from '@pwa-concept/modules/product/graphql/queries/Product'

interface UseProductOptions {
    skip?: boolean
}

const useProduct = (input: ProductQueryInput, options?: UseProductOptions): {
    data: Product
    loading: boolean
} => {
    const { data: { product: data } = {}, loading } = useProductQuery({
        variables: {
            input,
        },
        skip: !input?.id || options?.skip,
    })

    return {
        data: data as Product,
        loading,
    }
}

export default useProduct
