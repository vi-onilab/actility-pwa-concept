import {
    useDeleteCustomerAddressMutation,
    DeleteCustomerAddressMutationVariables,
} from '~modules/customer-addresses/graphql/mutations/DeleteCustomerAddress'

const useCustomerAddressDelete = () => {
    const [deleteCustomerAddress] = useDeleteCustomerAddressMutation()

    return async (id: DeleteCustomerAddressMutationVariables['id']) => {
        return await deleteCustomerAddress({
            variables: {
                id,
            },
            ignoreResults: true,
        })
    }
}

export default useCustomerAddressDelete
