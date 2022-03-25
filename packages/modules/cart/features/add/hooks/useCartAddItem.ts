import { useCartAddItemMutation } from '@pwa-concept/modules/cart/graphql/mutations/CartAddItem'
import { $cart } from '@pwa-concept/core/models'
import { CartItem } from '@pwa-concept/modules/@types/modules/graphql'

interface UseCartAddItems {
    cartItems: [CartItem]
}

const useCartAddItem = () => {
    const [addCartItem] = useCartAddItemMutation()

    return async ({ cartItems }: UseCartAddItems) => {
        return await addCartItem({
            variables: {
                cartId: $cart.id,
                cartItems,
            },
            ignoreResults: true,
        })
    }
}

export default useCartAddItem
