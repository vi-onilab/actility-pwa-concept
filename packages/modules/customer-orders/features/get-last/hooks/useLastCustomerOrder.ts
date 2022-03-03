import { $auth } from '~core/models'
import { useCustomerOrdersQuery } from '~modules/customer-orders/graphql/queries/CustomerOrders'

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
