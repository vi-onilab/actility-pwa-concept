import { Resolvers } from '@pwa-concept/modules/graphql'

const Cms: Resolvers['Cms'] = {
    id: (_, __, { context }) => context?.identifier,
    title: (_, __, { context }) => context?.title,
    content: (_, __, { context }) => context?.content,
    metaTitle: (_, __, { context }) => context?.meta_title,
    metaKeywords: (_, __, { context }) => context?.meta_keywords,
    metaDescription: (_, __, { context }) => context?.meta_description,
    layout: (_, __, { context }) => context?.page_layout,
}

export default Cms
