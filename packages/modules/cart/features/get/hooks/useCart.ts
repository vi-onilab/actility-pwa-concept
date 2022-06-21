import { ErrorPolicy } from '@apollo/client'
import { $cart } from '@pwa-concept/core/models'
import { CartQueryVariables, useCartQuery } from '@pwa-concept/modules/cart/graphql/queries/Cart'

interface UseCartOptions {
    errorPolicy: ErrorPolicy
}

interface UseCartVariables extends Pick<CartQueryVariables, 'isFull'> {
}

const useCart = (input: Partial<UseCartVariables> = {}, options: Partial<UseCartOptions> = {}) => {
    const [cartId] = $cart.useId()

    const { data: { cart = {} } = {}, loading } = useCartQuery({
        ...options,
        variables: {
            ...input,
            cartId,
        },
    })

    return {
        data: cart,
        loading,
    }
}

export default useCart
