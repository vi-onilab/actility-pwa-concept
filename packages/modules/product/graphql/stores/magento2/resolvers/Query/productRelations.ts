import { ProductRelationType, QueryResolvers } from '@pwa-concept/modules/graphql'
import { gql } from 'graphql-tag'
import api from '@pwa-concept/core/api'

const TYPE_MAP: Record<ProductRelationType, string> = {
    [ProductRelationType.CrossSell]: 'crosssel_products',
    [ProductRelationType.Related]: 'related_products',
    [ProductRelationType.Similar]: 'similar_products',
    [ProductRelationType.UpSell]: 'upsell_products',
}

const productRelations: QueryResolvers['productRelations'] = async (_, { input }) => {
    const { id, type } = input || {}

    const resolvedType = TYPE_MAP?.[type]

    if (!resolvedType) return null

    const typeGql = `
        ${resolvedType} {
            ... ProductInterface
        }
    `

    // TODO: Handle errors
    const { data: { products } = {} } = (
        await api.graphql(
            gql`
                query($filter: ProductAttributeFilterInput!) {
                    products(
                        filter: $filter
                    ) {
                        items {
                            id
                            ${typeGql}
                        }
                    }
                }
            `,
        ).query({
            filter: {
                entity_id: {
                    eq: id,
                },
            },
        })
    )

    if (!products) return null

    return products?.items?.[0]?.[resolvedType]?.map?.((__context) => ({ __context, __typename: 'Product' })) || []
}

export default productRelations
