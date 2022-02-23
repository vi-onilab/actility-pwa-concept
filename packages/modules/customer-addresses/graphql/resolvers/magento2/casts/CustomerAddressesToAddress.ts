import { CustomerAddress } from '~modules/graphql'

const CustomerAddressesToAddress = (address): CustomerAddress => {
    if (!address) return null

    const addressId = !address?.id ? null : String(address.id)

    return {
        id: addressId,
        defaultBilling: address?.default_billing,
        defaultShipping: address?.default_shipping,
        city: address?.city,
        company: address?.company,
        countryId: address?.country_id,
        firstName: address?.firstname,
        lastName: address?.lastname,
        telephone: address?.telephone,
        postcode: address?.postcode,
        region: {
            region: address?.region?.region,
            regionCode: address?.region?.region_code,
            regionId: address?.region?.region_id,
            __typename: 'CustomerAddressesRegion',
        },
        street: address?.street,
        __typename: 'CustomerAddress',
    }
}

export default CustomerAddressesToAddress
