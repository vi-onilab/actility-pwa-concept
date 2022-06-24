import { Resolvers } from '@pwa-concept/modules/graphql'

const CmsRoute: Resolvers['CmsRoute'] = {
    id: (_, __, { context }) => context?.id || context?.identifier || null,
    type: (_, __, { context }) => context?.type || null,
    url: (_, __, { context }) => context?.relative_url || null,
}

export default CmsRoute
