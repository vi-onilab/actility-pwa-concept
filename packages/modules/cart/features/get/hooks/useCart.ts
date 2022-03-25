import { useCartQuery } from '@pwa-concept/modules/cart/graphql/queries/Cart'
import { $cart } from '@pwa-concept/core/models'

const useCart = ({ isFull = false }: { isFull?: boolean }) => {
    const [cartId] = $cart.useId()

    const { data: { cart = {} } = {}, loading } = useCartQuery({
        variables: {
            cartId,
            isFull,
        },
    })

    return {
        data: cart,
        loading,
    }
}

export default useCart