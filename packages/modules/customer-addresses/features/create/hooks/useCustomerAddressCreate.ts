import { useCreateCustomerAddressMutation, CreateCustomerAddressMutationVariables } from '@pwa-concept/modules/customer-addresses/graphql/mutations/CreateCustomerAddress'

const useCustomerAddressCreate = () => {
    const [createCustomerAddress] = useCreateCustomerAddressMutation()

    return async (input: CreateCustomerAddressMutationVariables['input']) => {
        return await createCustomerAddress({
            variables: {
                input,
            },
            refetchQueries: [
                'CustomerAddresses',
            ],
            awaitRefetchQueries: true,
        })
    }
}

export default useCustomerAddressCreate
