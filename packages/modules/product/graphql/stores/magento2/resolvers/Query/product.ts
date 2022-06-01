import { QueryResolvers } from '@pwa-concept/modules/graphql'
import { gql } from '@apollo/client'
import api from '@pwa-concept/core/api'

const product: QueryResolvers['product'] = async (_, { input }) => {
    const {
        id = null,
        url = null,
        sku = null,
    } = input || {}

    const { data: { products = null } = {} } = (
        await api.graphql(
            gql`
                query($filter: ProductAttributeFilterInput!) {
                    products(
                        filter: $filter
                    ) {
                        items {
                            ... ProductInterface
                        }
                    }
                }
            `,
        ).variableIf(!!id, (prev) => ({
            ...prev,
            filter: {
                ...(prev?.filter || {}),
                entity_id: {
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

    if (products?.items?.length < 1) return null

    return {
        __context: products?.items?.[0],
        __typename: 'Product',
    }
}

export default product
