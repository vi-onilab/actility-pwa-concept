import { $auth } from '@pwa-concept/core/models'
import { useCustomerQuery } from '@pwa-concept/modules/customer/graphql/queries/Customer'

const useCustomer = () => {
    const { data, loading } = useCustomerQuery({
        skip: !$auth.getToken(),
    })

    return {
        customer: loading && !data?.customer ? null : data?.customer,
        loading,
    }
}

export default useCustomer
