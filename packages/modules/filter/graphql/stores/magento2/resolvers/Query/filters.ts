import api from '@pwa-concept/core/api'
import { QueryResolvers } from '@pwa-concept/modules/graphql'
import { gql } from 'graphql-tag'

const filters: QueryResolvers['filters'] = async (_, { input }) => {
    const { categoryId } = input

    const { data: { products = {} } = {} } = await (
        api.graphql(
            gql`
                query Products($filter: ProductAttributeFilterInput) {
                    products(
                        filter: $filter
                    ) {
                        aggregations {
                            ... Aggregation
                        }
                    }
                }
            `,
        ).variableIf(
            !!categoryId,
            () => ({
                filter: {
                    category_id: {
                        eq: categoryId,
                    },
                },
            }),
        ).query()
    )

    return [...products?.aggregations || []]
        ?.sort?.((a, b) => +a?.position > +b?.position ? 1 : -1)
        ?.map?.((__context) => ({
            __context,
            __typename: 'Filter',
        }))
}

export default filters
