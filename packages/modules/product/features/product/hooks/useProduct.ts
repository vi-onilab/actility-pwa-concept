import { ProductQueryInput } from '~modules/graphql'
import { useProductQuery } from '~modules/product/graphql/queries/Product'

const useProduct = (input: ProductQueryInput) => {
    const { data: { product: data } = {}, loading } = useProductQuery({
        variables: {
            input,
        },
        skip: !input?.id,
    })

    return {
        data,
        loading,
    }
}

export default useProduct
