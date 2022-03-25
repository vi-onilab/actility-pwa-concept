import api from '@pwa-concept/core/api'
import { QueryResolvers } from '@pwa-concept/modules/graphql'
import { gql } from 'graphql-tag'

const customerOrders: QueryResolvers['customerOrders'] = async (_, { input }) => {
    const { page, size, number } = input
    const { data: { customer = null } = {} } = await (
        api.graphql(
            gql`
                query Customer ($pageSize: Int, $currentPage: Int, $id: String) {
                    customer {
                        orders(pageSize: $pageSize, currentPage: $currentPage, filter: { number: { eq: $id } } ) {
                            items {
                                ... CustomerOrder
                            }
                            page_info {
                                current_page
                                page_size
                                total_pages
                            }
                            total_count
                        }
                    }
                }
            `,
        ).variableIf(
            !!number,
            () => ({
                filter: {
                    number: {
                        eq: number,
                    },
                },
            }),
        ).query({ page, size })
    )

    if (!customer?.orders) return null

    return {
        items: customer?.orders?.map?.((__context) => ({ __context, __typename: 'CustomerOrder' })),
        pagination: {
            count: customer?.orders?.total_count,
            current: customer?.orders?.page_info?.current_page,
            limit: customer?.orders?.page_info?.page_size,
            total: customer?.orders?.page_info?.total_pages,
            __typename: 'Pagination',
        },
    }
}

export default customerOrders
