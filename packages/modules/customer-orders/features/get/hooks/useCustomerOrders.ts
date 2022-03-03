import { $auth } from '~core/models'
import { useCustomerOrdersQuery } from '~modules/customer-orders/graphql/queries/CustomerOrders'

const useCustomerOrders = ({ page = 1, size = 20 }) => {
    const { data, loading } = useCustomerOrdersQuery({
        skip: !$auth.getToken(),
        variables: {
            input: {
                page,
                size,
            },
        },
    })

    return {
        customerOrders: loading && !data ? null : data?.customerOrders,
        loading,
    }
}

export default useCustomerOrders
