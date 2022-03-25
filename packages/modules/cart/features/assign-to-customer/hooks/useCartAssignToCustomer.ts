import { useCartAssignToCustomerMutation } from '@pwa-concept/modules/cart/graphql/mutations/CartAssignToCustomer'
import { CartAssignToCustomerInput } from '@pwa-concept/modules/graphql'

const useCartAssignToCustomer = () => {
    const [mergeCarts] = useCartAssignToCustomerMutation()

    return async ({ sourceCartId, destinationCartId = null }: CartAssignToCustomerInput) => {
        return await mergeCarts({
            variables: {
                input: {
                    sourceCartId,
                    destinationCartId,
                },
            },
        })
    }
}

export default useCartAssignToCustomer
