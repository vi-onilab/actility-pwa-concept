import { $auth } from '@pwa-concept/core/models'
import { useCustomerAddressesQuery } from '@pwa-concept/modules/customer-addresses/graphql/queries/CustomerAddresses'

const useCustomerAddresses = () => {
    const { data, loading } = useCustomerAddressesQuery({
        skip: !$auth.getToken(),
    })

    return {
        data: loading && !data ? null : data?.customerAddresses,
        loading,
    }
}

export default useCustomerAddresses
