import { useCartAddItemMutation } from '~modules/cart/graphql/mutations/CartAddItem'
import { $cart } from '~core/models'
import { CartItem } from '~modules/@types/modules/graphql'

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
