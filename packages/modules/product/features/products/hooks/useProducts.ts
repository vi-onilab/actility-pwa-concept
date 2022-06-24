import { ProductsQueryInput } from '@pwa-concept/modules/graphql'
import { useProductsQuery } from '@pwa-concept/modules/product/graphql/queries/Products'

interface UseProductsInput extends Pick<ProductsQueryInput, 'external'> {
    id?: string | string[]
    page?: number
}

interface UseProductsOptions {
    skip?: boolean
}

const useProducts = (
    {
        page = undefined,
        id = null,
        external = null,
    }: UseProductsInput = {}, options?: UseProductsOptions,
) => {
    const { data, loading } = useProductsQuery({
        variables: {
            input: {
                id: (Array.isArray(id) ? id : [id]).filter(Boolean),
                page,
                external,
            },
        },
        skip: options?.skip,
    })

    return {
        data: data?.products,
        loading,
    }
}

export default useProducts
