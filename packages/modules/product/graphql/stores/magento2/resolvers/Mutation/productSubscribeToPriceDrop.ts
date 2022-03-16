import { MutationResolvers } from '@pwa-concept/modules/graphql'
import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'

const productSubscribeToPriceDrop: MutationResolvers['productSubscribeToPriceDrop'] = async (_, { input }) => {
    const {
        id,
    } = input || {}

    await api.graphql(
        gql`
            mutation(
                $id: ID!
            ) {
                productAlertPriceDropSubscribe(
                    product_id: $id
                )
            }
        `,
    ).mutation({
        id,
    })

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

export default productSubscribeToPriceDrop
