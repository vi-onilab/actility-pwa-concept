import { QueryResolvers } from '@pwa-concept/modules/graphql'
import { gql } from '@apollo/client'
import api from '@pwa-concept/core/api'

const product: QueryResolvers['product'] = async (_, { input }) => {
    const {
        id,
    } = input || {}

    const { data: { products } = {} } = (
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
        ).query({
            filter: {
                entity_id: {
                    eq: id,
                },
            },
        })
    )

    if (products?.items?.length < 1) return null

    return {
        __context: products?.items?.[0],
        __typename: 'Product',
    }
}

export default product
