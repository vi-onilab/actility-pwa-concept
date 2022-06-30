import api from '@pwa-concept/core/api'
import { QueryResolvers } from '@pwa-concept/modules/graphql'
import { gql } from 'graphql-tag'

const products: QueryResolvers['products'] = async (_, { input }) => {
    const {
        id,
        page = 1,
        external = null,
        limit = 20,
    } = input || {}

    const { data: { products = {} } = {} } = (
        await api.graphql(
            gql`
                query(
                    $page: Int = 1
                    $limit: Int = 20
                    $filter: ProductAttributeFilterInput
                ) {
                    products(
                        pageSize: $limit
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
        ).variableIf(external?.length > 0, (prev) => ({
            ...prev,
            filter: {
                ...(prev?.filter || {}),
                ...external.reduce((result, { key, value }) => {
                    result[key] = value

                    return result
                }, {}),
            },
        })).variableIf(
            id?.length > 0,
            (prev) => ({
                ...prev,
                filter: {
                    id: {
                        in: id,
                    },
                },
            }),
        ).query({
            page,
            limit,
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
