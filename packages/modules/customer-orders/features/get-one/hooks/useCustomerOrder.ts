import { $auth } from '@pwa-concept/core/models'
import { useCustomerOrdersQuery } from '@pwa-concept/modules/customer-orders/graphql/queries/CustomerOrders'

const useCustomerOrder = (number: string) => {
    const { data, loading } = useCustomerOrdersQuery({
        skip: !$auth.getToken(),
        variables: {
            input: {
                number,
            },
        },
    })

    return {
        customerOrder: loading && !data ? null : data?.customerOrders?.customerOrders[0],
        loading,
    }
}

export default useCustomerOrder
