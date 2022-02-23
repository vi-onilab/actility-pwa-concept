import { QueryResolvers, ProductRelationType } from '~modules/graphql'
import { gql } from 'graphql-tag'
import api from '~core/api'
import { ProductInterfaceToProduct } from '../casts'
import ProductInterfaceBody from '../gql/ProductInterfaceBody'

const TYPE_MAP: Record<ProductRelationType, string> = {
    [ProductRelationType.CrossSell]: 'crosssel_products',
    [ProductRelationType.Related]: 'related_products',
    [ProductRelationType.Similar]: 'similar_products',
    [ProductRelationType.UpSell]: 'upsell_products',
}

const productRelations: QueryResolvers['productRelations'] = async (_, { input }) => {
    const { id, type } = input || {}

    const resolvedType = TYPE_MAP?.[type]

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
                            ${ProductInterfaceBody}
                        }
                    }
                }
            `,
        ).query({
            id,
        })
    )

    return productDetail?.[resolvedType]?.map?.(ProductInterfaceToProduct)
}

export default productRelations
