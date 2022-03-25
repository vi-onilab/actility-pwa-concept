import { Resolvers } from '@pwa-concept/modules/graphql'

const CustomerOrderProductOption: Resolvers['CustomerOrderProductOption'] = {
    label: (_, __, { context }) => context?.label,
    value: (_, __, { context }) => context?.value,
}

export default CustomerOrderProductOption
