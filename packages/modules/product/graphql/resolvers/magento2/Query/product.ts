import { QueryResolvers } from '~modules/graphql'
import { gql } from 'graphql-tag'
import api from '~core/api'
import { ProductInterfaceToProduct } from '../casts'
import ProductInterfaceBody from '../gql/ProductInterfaceBody'

const product: QueryResolvers['product'] = async (_, { input }) => {
    const {
        id,
    } = input || {}

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

export default product
