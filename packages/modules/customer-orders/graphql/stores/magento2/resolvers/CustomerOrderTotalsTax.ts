import { Resolvers } from '@pwa-concept/modules/graphql'

const CustomerOrderTotalsTax: Resolvers['CustomerOrderTotalsTax'] = {
    rate: (_, __, { context }) => context?.rate,
    title: (_, __, { context }) => context?.title,
    tax: (_, __, { context }) => context?.amount.value,
}

export default CustomerOrderTotalsTax
