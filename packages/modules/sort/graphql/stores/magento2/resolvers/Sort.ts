import { Resolvers } from '@pwa-concept/modules/graphql'

const Sort: Resolvers['Sort'] = {
    id: (_, __, { context }) => context?.value,
    name: (_, __, { context }) => context?.label,
}

export default Sort
