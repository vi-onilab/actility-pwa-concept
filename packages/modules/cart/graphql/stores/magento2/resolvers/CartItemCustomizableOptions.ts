import { Resolvers } from '@pwa-concept/modules/graphql'

const CartItemCustomizableOptions: Resolvers['CartItemCustomizableOptions'] = {
    id: (_, __, { context }) => context?.id || null,
    label: (_, __, { context }) => context?.label || null,
    isRequired: (_, __, { context }) => context?.is_required || null,
    changedLabel: (_, __, { context }) => context?.changedLabel || null,
    type: (_, __, { context }) => context?.type || null,
    values: (_, __, { context }) => (context?.values?.length > 0 ? context?.values.map((__context) => ({
        __context,
        __typename: 'CartCustomizableOptionsValue',
    })) : null),
}

export default CartItemCustomizableOptions
