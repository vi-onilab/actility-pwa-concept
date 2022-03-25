import { useCartRemoveItemMutation } from '@pwa-concept/modules/cart/graphql/mutations/CartRemoveItem'

const useCartRemoveItem = () => {
    const [removeCartItem] = useCartRemoveItemMutation()

    return async ({ id, uid }: { id: string, uid: string }) => {
        return await removeCartItem({
            variables: {
                input: {
                    cartId: id,
                    cartItemUid: uid,
                },
            },
            ignoreResults: true,
        })
    }
}

export default useCartRemoveItem
