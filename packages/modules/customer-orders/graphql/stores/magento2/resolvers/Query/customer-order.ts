import api from '@pwa-concept/core/api'
import { QueryResolvers } from '@pwa-concept/modules/graphql'
import { gql } from 'graphql-tag'

const customerOrder: QueryResolvers['customerOrder'] = async (_, { id }) => {
    const { data: { customer = null } = {} } = await (
        api.graphql(
            gql`
                query($id: String) {
                    customer {
                        orders(pageSize: 1, currentPage: 1, filter: { number: { eq: $id } }) {
                            items {
                                ... CustomerOrder
                            }
                        }
                    }
                }
            `,
        ).query({ id })
    )

    if (customer?.orders?.length < 1) return null

    return {
        __context: customer?.orders?.items?.[0],
        __typename: 'CustomerOrder',
    }
}

export default customerOrder
