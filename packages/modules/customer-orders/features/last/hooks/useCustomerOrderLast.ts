import { $auth } from '@pwa-concept/core/models'
import { useCustomerOrderLastQuery } from '@pwa-concept/modules/customer-orders/graphql/queries/CustomerOrderLast'

const useCustomerOrderLast = () => {
    const { data, loading } = useCustomerOrderLastQuery({
        skip: !$auth.getToken(),
    })

    return {
        data: loading && !data ? null : data?.customerOrderLast,
        loading,
    }
}

export default useCustomerOrderLast
