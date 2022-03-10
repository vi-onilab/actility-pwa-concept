import { $auth } from '@pwa-concept/core/models'
import { useCustomerAddressesQuery } from '@pwa-concept/modules/customer-addresses/graphql/queries/CustomerAddresses'

const useCustomerAddresses = () => {
    const { data, loading } = useCustomerAddressesQuery({
        skip: !$auth.getToken(),
    })

    return {
        addresses: loading && !data ? null : data,
        loading,
    }
}

export default useCustomerAddresses
