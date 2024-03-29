import {
    useDeleteCustomerAddressMutation,
    DeleteCustomerAddressMutationVariables,
} from '@pwa-concept/modules/customer-addresses/graphql/mutations/DeleteCustomerAddress'

const useCustomerAddressDelete = () => {
    const [deleteCustomerAddress] = useDeleteCustomerAddressMutation()

    return async (id: DeleteCustomerAddressMutationVariables['id']) => {
        return await deleteCustomerAddress({
            variables: {
                id,
            },
            ignoreResults: true,
            refetchQueries: [
                'CustomerAddresses',
            ],
            awaitRefetchQueries: true,
        })
    }
}

export default useCustomerAddressDelete
