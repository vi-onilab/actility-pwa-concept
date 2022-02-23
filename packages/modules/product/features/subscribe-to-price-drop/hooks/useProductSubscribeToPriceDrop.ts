import { Product } from '~modules/graphql'
import { useProductSubscribeToPriceDropMutation } from '~modules/product/graphql/mutations/ProductSubscribeToPriceDrop'

const useProductSubscribeToPriceDrop = (product: Product = null) => {
    const [productSubscribeToPriceDropMutation, { data, loading }] = useProductSubscribeToPriceDropMutation()

    return {
        async subscribeToPriceDrop (productInput?: Product): Promise<Product | null> {
            if ((productInput?.id || product?.id) && !loading) {
                const { data: { productSubscribeToPriceDrop = null } = {} } = await productSubscribeToPriceDropMutation({
                    variables: {
                        input: {
                            id: productInput?.id || product?.id,
                        },
                    },
                })

                return productSubscribeToPriceDrop
            }

            return null
        },
        data: data?.productSubscribeToPriceDrop,
        loading,
    }
}

export default useProductSubscribeToPriceDrop
