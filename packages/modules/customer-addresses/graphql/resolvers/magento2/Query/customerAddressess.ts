import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'
import { QueryResolvers } from '@pwa-concept/modules/graphql'
import { CustomerAddressesToAddress } from '../casts'

const customerAddresses: QueryResolvers['customerAddresses'] = async () => {
    const { data: { customer: { addresses: data = [] } } = {} } = await (
        api.graphql(
            gql`
                query {
                    customer {
                        addresses {
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
                }
            `,
        ).query()
    )

    return data?.map?.(CustomerAddressesToAddress)?.filter?.(Boolean) || null
}

export default customerAddresses
