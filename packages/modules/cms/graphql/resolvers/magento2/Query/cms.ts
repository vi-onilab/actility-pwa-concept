import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'
import { QueryResolvers } from '~modules/graphql'

const cms: QueryResolvers['cms'] = async (_, { id }) => {
    const { data: { cmsPage: data = {} } = {} } = await (
        api.graphql(
            gql`
                query($id: String) {
                    cmsPage(identifier: $id) {
                        identifier
                        title
                        content
                        meta_title
                        meta_keywords
                        meta_description
                    }
                }
            `,
        ).query({ id })
    )

    return {
        id: data?.identifier,
        title: data?.title,
        content: data?.content,
        metaTitle: data?.meta_title,
        metaKeywords: data?.meta_keywords,
        metaDescription: data?.meta_description,
        __typename: 'Cms',
    }
}

export default cms
