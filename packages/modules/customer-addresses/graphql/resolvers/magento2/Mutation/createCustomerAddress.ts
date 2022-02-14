import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'
import { MutationResolvers } from '~modules/graphql'
import { CustomerAddressesToAddress } from '../casts'

const createCustomerAddress: MutationResolvers['createCustomerAddress'] = async (_, input) => {
    const { data: { createCustomerAddress: data = {} } = {} } = await (
        api.graphql(
            gql`
                mutation($input: CustomerAddressInput!) {
                    createCustomerAddress(input: $input) {
                        id
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
                    }
                }
            `,
        ).mutation({ ...input })
    )

    return CustomerAddressesToAddress(data)
}

export default createCustomerAddress
