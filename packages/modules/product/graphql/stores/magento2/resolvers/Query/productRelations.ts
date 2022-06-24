import api from '@pwa-concept/core/api'
import { ProductRelationType, QueryResolvers } from '@pwa-concept/modules/graphql'
import { gql } from 'graphql-tag'

const TYPE_MAP: Record<ProductRelationType, string> = {
    [ProductRelationType.CrossSell]: 'crosssel_products',
    [ProductRelationType.Related]: 'related_products',
    [ProductRelationType.Similar]: 'similar_products',
    [ProductRelationType.UpSell]: 'upsell_products',
}

const productRelations: QueryResolvers['productRelations'] = async (_, { input }) => {
    const {
        id = null,
        url = null,
        sku = null,
        type,
        external = null,
    } = input || {}

    const resolvedType = TYPE_MAP?.[type]

    if (!resolvedType) return null

    const typeGql = `
        ${resolvedType} {
            ... ProductInterface
        }
    `

    // TODO: Handle errors
    const { data: { products = null } = {} } = (
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
        ).variableIf(external?.length > 0, (prev) => ({
            ...prev,
            filter: {
                ...(prev?.filter || {}),
                ...external.reduce((result, { key, value }) => {
                    result[key] = value

                    return result
                }, {}),
            },
        })).variableIf(!!id, (prev) => ({
            ...prev,
            filter: {
                ...(prev?.filter || {}),
                id: {
                    eq: id,
                },
            },
        })).variableIf(!!sku, (prev) => ({
            ...prev,
            filter: {
                ...(prev?.filter || {}),
                sku: {
                    eq: sku,
                },
            },
        })).variableIf(!!url, (prev) => ({
            ...prev,
            filter: {
                ...(prev?.filter || {}),
                url_key: {
                    eq: url,
                },
            },
        })).query()
    )

    if (!products) return null

    return products?.items?.[0]?.[resolvedType]?.map?.((__context) => ({ __context, __typename: 'Product' })) || []
}

export default productRelations
