import { QueryResolvers } from '@pwa-concept/modules/graphql'
import { gql } from '@apollo/client'
import api from '@pwa-concept/core/api'

const product: QueryResolvers['product'] = async (_, { input }) => {
    const {
        id,
    } = input || {}

    try {
        const { data: { productDetail: __context = {} } = {} } = (
            await api.graphql(
                gql`
                    query($id: Int!) {
                        productDetail(id: $id) {
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
    } catch (e) {
        console.error(e)
        throw e
    }


}

export default product
