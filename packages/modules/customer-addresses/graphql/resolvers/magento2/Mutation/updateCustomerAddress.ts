import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'
import { MutationResolvers } from '~modules/graphql'
import { CustomerAddressesToAddress } from '../casts'

const updateCustomerAddress: MutationResolvers['updateCustomerAddress'] = async (_, input) => {
    const { id, input: address } = input

    const { data: { updateCustomerAddress: data } = {} } = await (
        api.graphql(
            gql`
                mutation($id: Int, $input: CustomerAddressInput!) {
                    updateCustomerAddress {
                        city
                        company
                        country_id
                        firstname
                        lastname
                        telephone
                        postcode
                        region {
                            region
                            region_code
                            region_id
                        }
                        street
                        default_billing
                        default_shipping
                        id
                    }
                }
            `,
        ).mutation({ id: Number(id), input: { ...address } })
    )

    return CustomerAddressesToAddress(data)
}

export default updateCustomerAddress
