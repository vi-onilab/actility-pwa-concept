import api from '@pwa-concept/core/api'
import { QueryResolvers } from '@pwa-concept/modules/graphql'
import { gql } from 'graphql-tag'

const cmsRoute: QueryResolvers['cmsRoute'] = async (_, { url }) => {
    const { data: { route: data = {} } = {} } = await (
        api.graphql(
            gql`
                query($url: String!) {
                    route(url: $url) {
                        ... RoutableInterface

                        ... on BundleProduct {
                            id
                        }

                        ... on CategoryTree {
                            id
                        }

                        ... on CmsPage {
                            identifier
                        }

                        ... on ConfigurableProduct {
                            id
                        }

                        ... on DownloadableProduct {
                            id
                        }

                        ... on GroupedProduct {
                            id
                        }

                        ... on SimpleProduct {
                            id
                        }

                        ... on VirtualProduct {
                            id
                        }
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
