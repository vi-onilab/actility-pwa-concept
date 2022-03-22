import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'
import { QueryResolvers } from '@pwa-concept/modules/graphql'

const customerAddresses: QueryResolvers['customerAddresses'] = async () => {
    const { data: { customer: { addresses: data = [] } } = {} } = await (
        api.graphql(
            gql`
                query {
                    customer {
                        addresses {
                            ...CustomerAddress
                        }
                    }
                }
            `,
        ).query()
    )

    return data?.map?.((__context) => ({
        __context,
        __typename: 'CustomerAddress',
    })) || null
}

export default customerAddresses
