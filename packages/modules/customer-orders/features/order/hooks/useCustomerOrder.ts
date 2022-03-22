import { $auth } from '@pwa-concept/core/models'
import { Scalars } from '@pwa-concept/modules/graphql'
import { useCustomerOrderQuery } from '@pwa-concept/modules/customer-orders/graphql/queries/CustomerOrder'

const useCustomerOrder = (id: Scalars['ID']) => {
    const { data, loading } = useCustomerOrderQuery({
        skip: !$auth.getToken() || !id,
        variables: {
            id,
        },
    })

    return {
        data: loading && !data ? null : data?.customerOrder,
        loading,
    }
}

export default useCustomerOrder
