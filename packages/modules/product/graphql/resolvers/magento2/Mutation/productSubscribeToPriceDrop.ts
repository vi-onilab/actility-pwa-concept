import { MutationResolvers } from '~modules/graphql'
import api from '~core/api'
import { gql } from 'graphql-tag'
import ProductInterfaceBody from '../gql/ProductInterfaceBody'
import { ProductInterfaceToProduct } from '../casts'

const productSubscribeToPriceDrop: MutationResolvers['productSubscribeToPriceDrop'] = async (_, { input }) => {
    const {
        id,
    } = input || {}

    const { data: { productAlertPriceDropSubscribe } = {} } = (
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
    )

    const { data: { productDetail = {} } = {} } = (
        await api.graphql(
            gql`
                query($id: Int!) {
                    productDetail(
                        id: $id
                    ) {
                        ${ProductInterfaceBody}
                    }
                }
            `,
        ).query({
            id,
        })
    )

    return ProductInterfaceToProduct(productDetail)
}

export default productSubscribeToPriceDrop
