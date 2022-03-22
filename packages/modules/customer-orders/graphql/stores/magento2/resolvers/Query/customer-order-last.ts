import api from '@pwa-concept/core/api'
import { QueryResolvers } from '@pwa-concept/modules/graphql'
import { gql } from 'graphql-tag'

const customerOrderLast: QueryResolvers['customerOrderLast'] = async () => {
    const { data: { customer = null } = {} } = await (
        api.graphql(
            gql`
                query {
                    customer {
                        orders(pageSize: 1, currentPage: 1) {
                            items {
                                ... CustomerOrder
                            }
                        }
                    }
                }
            `,
        ).query()
    )

    if (customer?.orders?.length < 1) return null

    return {
        __context: customer?.orders?.items?.[0],
        __typename: 'CustomerOrder',
    }
}

export default customerOrderLast
