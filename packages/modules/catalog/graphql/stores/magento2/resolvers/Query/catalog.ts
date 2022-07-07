import api from '@pwa-concept/core/api'
import { QueryResolvers } from '@pwa-concept/modules/graphql'
import { gql } from 'graphql-tag'

const catalog: QueryResolvers['catalog'] = async (_, { input } = {}) => {
    const {
        search,
        filters = [],
        categoryId,
        sort,
        page = 1,
        limit = 20,
    } = input || {}

    const { data: { products = {} } = {} } = (
        await api.graphql(
            gql`
                query(
                    $search: String = ""
                    $limit: Int = 20
                    $filter: ProductAttributeFilterInput
                    $sort: ProductAttributeSortInput
                    $page: Int = 1
                ) {
                    products(
                        search: $search
                        filter: $filter
                        sort: $sort
                        pageSize: $limit
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
            filters?.length > 0,
            (prev) => ({
                ...prev,
                filter: {
                    ...(prev?.filter || {}),
                    ...(filters || [])?.reduce?.((result, { key, value }) => {
                        if (Array.isArray(value)) {
                            if (value?.length) {
                                if (key === 'price') {
                                    result[key] = {
                                        from: value?.[0] || 0,
                                        ...(value?.length > 1 ? { to: value?.[1] } : {}),
                                    }
                                } else if (key === 'category_id') {
                                    result[key] = {
                                        in: [...(prev?.filter?.category_id?.in || []), ...value],
                                    }
                                } else {
                                    result[key] = {
                                        in: value,
                                    }
                                }
                            }
                        }

                        return result
                    }, {}),
                },
            }),
        ).variableIf(
            sort?.length > 0,
            (prev) => ({
                ...prev,
                sort: sort?.reduce?.((result, { name, order }) => {
                    result[name] = order

                    return result
                }, {}),
            }),
        ).variableIf(
            !!categoryId,
            (prev) => ({
                ...prev,
                filter: {
                    ...(prev?.filter || {}),
                    category_id: {
                        in: [...(prev?.filter?.category_id?.in || []), categoryId],
                    },
                },
            }),
        ).query({
            search,
            page,
            limit,
        })
    )

    return {
        items: products?.items?.map?.((__context) => ({ __context, __typename: 'Product' })),
        pagination: {
            count: products?.total_count,
            current: products?.page_info?.current_page,
            limit: products?.page_info?.page_size,
            total: products?.page_info?.total_pages,
            __typename: 'Pagination',
        },
        __typename: 'CatalogQueryOutput',
    }
}

export default catalog
