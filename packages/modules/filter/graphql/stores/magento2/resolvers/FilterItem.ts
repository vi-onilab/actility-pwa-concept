import { Resolvers } from '@pwa-concept/modules/graphql'

const isPrice = (context) => context?.parent?.attribute_code === 'price'

const Filter: Resolvers['FilterItem'] = {
    id: (_, __, { context }) => {
        if (isPrice(context)) return `price-${context?.value}`

        return String(context?.value)
    },
    key: (_, __, { context }) => context?.parent?.attribute_code,
    name: (_, __, { context }) => {
        if (isPrice(context)) {
            if (context?.parent?.options?.[0].value === context?.value) return 'From'

            return 'To'
        }

        return context?.label
    },
    value: (_, __, { context }) => String(context?.value),
}

export default Filter
