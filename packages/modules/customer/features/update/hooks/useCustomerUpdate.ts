import { FeatureMutationHookReturnType } from '@pwa-concept/core'
import {
    UpdateCustomerMutationVariables,
    useUpdateCustomerMutation,
} from '@pwa-concept/modules/customer/graphql/mutations/UpdateCustomer'

const useCustomerUpdate = () => {
    const [updateCustomer] = useUpdateCustomerMutation()

    return async (input: UpdateCustomerMutationVariables['input']): FeatureMutationHookReturnType<typeof useUpdateCustomerMutation, 'updateCustomer'> => {
        const { data, errors } = await updateCustomer({
            variables: {
                input,
            },
        })

        return {
            data: data?.updateCustomer,
            errors,
        }
    }
}

export default useCustomerUpdate
