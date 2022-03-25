import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'
import { QueryResolvers } from '@pwa-concept/modules/graphql'

const cmsRoute: QueryResolvers['cmsRoute'] = async (_, { url }) => {
    const { data: { urlResolver: data = {} } = {} } = await (
        api.graphql(
            gql`
                query($url: String!) {
                    urlResolver(url: $url) {
                        ... EntityUrl
                    }
                }
            `,
        ).query({ url })
    )

    if (!data) return null

    return {
        __context: data,
        __typename: 'CmsRoute',
    }
}

export default cmsRoute
