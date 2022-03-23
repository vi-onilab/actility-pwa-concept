import { useCartGenerateIdMutation } from '~modules/cart/graphql/mutations/CartGenerateId'
import { $cart } from '~core/models'

const useCartGenerateId = ({ force: rootForce = false } = {}) => {
    const [generateId] = useCartGenerateIdMutation()

    return async () => {
        if (!$cart.isId) {
            const oldId = $cart.id

            const { data: { cartGenerateId = null } = {} } = await generateId()

            if (cartGenerateId) {
                $cart.id = cartGenerateId
            }

            return {
                oldId,
                newId: cartGenerateId,
            }
        }

        return {}
    }
}

export default useCartGenerateId
