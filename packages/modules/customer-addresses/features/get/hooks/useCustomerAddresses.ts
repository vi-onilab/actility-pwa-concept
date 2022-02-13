import { $auth } from '~core/models'
import { useCustomerAddressesQuery } from '~modules/customer-addresses/graphql/queries/CustomerAddresses'

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
