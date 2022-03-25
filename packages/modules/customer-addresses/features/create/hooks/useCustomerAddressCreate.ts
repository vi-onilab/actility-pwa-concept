import {
    CreateCustomerAddressMutationVariables,
    useCreateCustomerAddressMutation,
} from '@pwa-concept/modules/customer-addresses/graphql/mutations/CreateCustomerAddress'
import { FeatureMutationHookReturnType } from '@pwa-concept/core'

const useCustomerAddressCreate = () => {
    const [createCustomerAddress] = useCreateCustomerAddressMutation()

    return async (
        input: CreateCustomerAddressMutationVariables['input'],
    ): FeatureMutationHookReturnType<typeof useCreateCustomerAddressMutation, 'createCustomerAddress'> => {
        const { data, errors } = await createCustomerAddress({
            variables: {
                input,
            },
            refetchQueries: [
                'CustomerAddresses',
            ],
            awaitRefetchQueries: true,
        })

        return {
            data: data?.createCustomerAddress,
            errors,
        }
    }
}

export default useCustomerAddressCreate
