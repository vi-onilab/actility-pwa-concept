import {
    useUpdateCustomerAddressMutation,
    UpdateCustomerAddressMutationVariables,
} from '@pwa-concept/modules/customer-addresses/graphql/mutations/UpdateCustomerAddress'

const useCustomerAddressUpdate = () => {
    const [updateCustomerAddress] = useUpdateCustomerAddressMutation()

    return async (id: UpdateCustomerAddressMutationVariables['id'], input: UpdateCustomerAddressMutationVariables['input']) => {
        return await updateCustomerAddress({
            variables: {
                id,
                input,
            },
            ignoreResults: true,
            refetchQueries: [
                'CustomerAddresses',
            ],
            awaitRefetchQueries: true,
        })
    }
}

export default useCustomerAddressUpdate
