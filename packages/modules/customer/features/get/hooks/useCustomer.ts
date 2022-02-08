import { useCustomerQuery } from '~modules/customer/graphql/queries/Customer'

const useCustomer = ({ token = null }: { token?: string } = {}) => {
    const { data, loading } = useCustomerQuery({
        variables: {
            token,
        }
    })

    return {
        customer: loading ? null : data.customer,
        loading,
    }
}

export default useCustomer
