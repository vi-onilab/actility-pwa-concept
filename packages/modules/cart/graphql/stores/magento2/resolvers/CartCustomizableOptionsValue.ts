import { Resolvers } from '@pwa-concept/modules/graphql'

const CartCustomizableOptionsValue: Resolvers['CartCustomizableOptionsValue'] = {
    id: (_, __, { context }) => context?.id || null,
    value: (_, __, { context }) => context?.label || null,
    label: (_, __, { context }) => context?.value || null,
}

export default CartCustomizableOptionsValue
