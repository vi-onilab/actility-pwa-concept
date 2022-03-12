import { ProductQueryInput, Product } from '@pwa-concept/modules/graphql'
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
        onCompleted(...args) {
            console.log('complete', args)
        },
        onError(error) {
            console.error(error)
        },
        skip: !input?.id || options?.skip,
    })

    return {
        data: data as Product,
        loading,
    }
}

export default useProduct
