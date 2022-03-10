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

    const { data: { productDetail: __context = {} } = {} } = (
        await api.graphql(
            gql`
                query($id: Int!) {
                    productDetail(
                        id: $id
                    ) {
                        ... ProductInterface
                    }
                }
            `,
        ).query({
            id,
        })
    )

    return {
        __context,
        __typename: 'Product',
    }
}

export default productSubscribeToPriceDrop
