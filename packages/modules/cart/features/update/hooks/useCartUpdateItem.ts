import { useCartUpdateItemMutation } from '~modules/cart/graphql/mutations/CartUpdateItem'

interface UseCartUpdate {
    cartItems: [UseCartUpdateItem]
    cartId: string
}

interface UseCartUpdateItem {
    cartItemId: string
    quantity: number
}

const useCartUpdateItem = () => {
    const [updateCartItem] = useCartUpdateItemMutation()

    return async ({ cartId, cartItems }: UseCartUpdate) => {
        return await updateCartItem({
            variables: {
                input: {
                    cartId,
                    cartItems,
                },
            },
            ignoreResults: true,
        })
    }
}

export default useCartUpdateItem
