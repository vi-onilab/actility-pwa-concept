import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'
import { MutationResolvers } from '~modules/graphql'

const cartGenerateId: MutationResolvers['cartGenerateId'] = async () => {
    const { data: { createEmptyCart = null } } = await (
        api.graphql(
            gql`
                mutation {
                    createEmptyCart
                }
            `,
        ).mutation()
    )

    return createEmptyCart
}

export default cartGenerateId
