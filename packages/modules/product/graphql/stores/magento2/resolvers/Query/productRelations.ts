import { QueryResolvers, ProductRelationType } from '@pwa-concept/modules/graphql'
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

    // TODO: Handle errors
    const { data: { productDetail = {} } = {} } = (
        await api.graphql(
            gql`
                query($id: Int!) {
                    productDetail(
                        id: $id
                    ) {
                        id
                        ${resolvedType} {
                            ... ProductInterface
                        }
                    }
                }
            `,
        ).query({
            id,
        })
    )

    return productDetail?.[resolvedType]?.map?.((__context) => ({ __context, __typename: 'Product' }))
}

export default productRelations
