import { useCreateCustomerMutation } from '~modules/auth/graphql/mutations/CreateCustomer'

const useAuthCreateCustomer = () => {
    const [createCustomer, { loading }] = useCreateCustomerMutation()

    return {
        createCustomer,
        loading
    }
};

export default useAuthCreateCustomer
