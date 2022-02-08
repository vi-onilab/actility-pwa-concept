import { useCustomerQuery } from '~modules/customer/graphql/queries/Customer'

const useCustomer = ({ token = null }: { token?: string } = {}) => {
    const { data: customer, loading } = useCustomerQuery({
        variables: {
            token,
        }
    })

    return {
        customer,
        loading,
    }
}

export default useCustomer
