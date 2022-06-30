import { ProductsQueryInput } from '@pwa-concept/modules/graphql'
import { useProductsQuery } from '@pwa-concept/modules/product/graphql/queries/Products'

interface UseProductsInput extends Omit<ProductsQueryInput, 'id'> {
    id?: Array<ProductsQueryInput['id']> | ProductsQueryInput['id']
}

interface UseProductsOptions {
    skip?: boolean
}

const useProducts = (
    {
        id = null,
        ...args
    }: UseProductsInput = {}, options?: UseProductsOptions,
) => {
    const { data, loading } = useProductsQuery({
        variables: {
            input: {
                ...args,
                ...(id && { id: (Array.isArray(id) ? id || [] : [id]).filter?.(Boolean) }),
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
