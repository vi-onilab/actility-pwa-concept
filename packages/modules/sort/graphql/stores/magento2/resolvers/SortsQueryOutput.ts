import { Resolvers } from '@pwa-concept/modules/graphql'

const SortsQueryOutput: Resolvers['SortsQueryOutput'] = {
    default: (_, __, { context }) => context?.default,
    items: (_, __, { context }) => context?.options?.map((__context) => ({
        __context,
        __typename: 'Sort',
    })) || null,
}

export default SortsQueryOutput
