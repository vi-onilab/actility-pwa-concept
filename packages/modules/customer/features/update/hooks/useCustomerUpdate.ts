import { useUpdateCustomerMutation, UpdateCustomerMutationVariables } from '@pwa-concept/modules/customer/graphql/mutations/UpdateCustomer'

const useCustomerUpdate = () => {
    const [updateCustomer] = useUpdateCustomerMutation()

    return async (input: UpdateCustomerMutationVariables['input']) => {
        return await updateCustomer({
            variables: {
                input,
            },
        })
    }
}

export default useCustomerUpdate
