import { useProductsQuery } from '@pwa-concept/modules/product/graphql/queries/Products'

interface UseProductsInput {
    id?: string | string[]
    page?: number
}

interface UseProductsOptions {
    skip?: boolean
}

const useProducts = ({ page = undefined, id = null }: UseProductsInput = {}, options?: UseProductsOptions) => {
    const { data, loading } = useProductsQuery({
        variables: {
            input: {
                id: (Array.isArray(id) ? id : [id]).filter(Boolean),
                page,
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
