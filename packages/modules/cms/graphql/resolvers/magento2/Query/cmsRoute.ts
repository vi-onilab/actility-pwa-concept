import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'
import { QueryResolvers } from '~modules/graphql'

const cmsRoute: QueryResolvers['cmsRoute'] = async (_, { url }) => {
    const { data: { urlResolver: data = {} } = {} } = await (
        api.graphql(
            gql`
                query($url: String!) {
                    urlResolver(url: $url) {
                        id
                        type
                        relative_url
                    }
                }
            `
        ).query({ url })
    )

    return {
        id: data?.id,
        type: data?.type,
        url: data?.relative_url,
        __typename: 'CmsRoute'
    }
}

export default cmsRoute
