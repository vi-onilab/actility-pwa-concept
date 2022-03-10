import { $auth } from '@pwa-concept/core/models'
import { useCustomerOrdersQuery } from '@pwa-concept/modules/customer-orders/graphql/queries/CustomerOrders'

const useLastCustomerOrder = () => {
    const { data, loading } = useCustomerOrdersQuery({
        skip: !$auth.getToken(),
        variables: {
            input: {
                page: 1,
                size: 1,
            },
        },
    })

    return {
        lastOrderNumber: loading && !data ? null : data?.customerOrders?.customerOrders[0].number,
        loading,
    }
}

export default useLastCustomerOrder
