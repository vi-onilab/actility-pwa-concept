import { Resolvers } from '@pwa-concept/modules/graphql'

const CustomerOrderDiscount: Resolvers['CustomerOrderDiscount'] = {
    label: (_, __, { context }) => context?.label,
    value: (_, __, { context }) => context?.amount?.value,
}

export default CustomerOrderDiscount
