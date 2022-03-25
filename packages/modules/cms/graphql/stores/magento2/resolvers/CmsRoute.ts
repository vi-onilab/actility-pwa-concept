import { Resolvers } from '@pwa-concept/modules/graphql'

const CmsRoute: Resolvers['CmsRoute'] = {
    id: (_, __, { context }) => context?.id,
    type: (_, __, { context }) => context?.type,
    url: (_, __, { context }) => context?.relative_url,
}

export default CmsRoute
