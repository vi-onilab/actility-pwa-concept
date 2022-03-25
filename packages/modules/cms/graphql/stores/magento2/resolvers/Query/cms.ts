import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'
import { QueryResolvers } from '@pwa-concept/modules/graphql'

const cms: QueryResolvers['cms'] = async (_, { id }) => {
    const { data: { cmsPage: data = {} } = {} } = await (
        api.graphql(
            gql`
                query($id: String) {
                    cmsPage(identifier: $id) {
                        ... CmsPage
                    }
                }
            `,
        ).query({ id })
    )

    if (!data) return null

    return {
        __context: data,
        __typename: 'Cms',
    }
}

export default cms
