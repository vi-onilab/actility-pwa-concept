import { QueryResolvers } from '@pwa-concept/modules/graphql'
import { gql } from 'graphql-tag'
import api from '@pwa-concept/core/api'

const products: QueryResolvers['products'] = async (_, { input }) => {
    const {
        id,
        page = 1,
    } = input || {}

    const { data: { products = {} } = {} } = (
        await api.graphql(
            gql`
                query(
                    $page: Int = 1
                    $filter: ProductAttributeFilterInput
                ) {
                    products(
                        filter: $filter
                        currentPage: $page
                    ) {
                        page_info {
                            current_page
                            page_size
                            total_pages
                        }

                        total_count

                        items {
                            ... ProductInterface
                        }
                    }
                }
            `,
        ).variableIf(
            id?.length > 0,
            (prev) => ({
                ...prev,
                filter: {
                    entity_id: {
                        in: id,
                    },
                },
            }),
        ).query({
            page,
        })
    )

    if (!products) return null

    return {
        items: products?.items?.map?.((__context) => ({ __context, __typename: 'Product' })) || [],
        pagination: {
            count: products?.total_count,
            current: products?.page_info?.current_page,
            limit: products?.page_info?.page_size,
            total: products?.page_info?.total_pages,
            __typename: 'Pagination',
        },
        __typename: 'ProductsQueryOutput',
    }
}

export default products
