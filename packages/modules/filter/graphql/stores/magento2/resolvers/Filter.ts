import { FilterType, Resolvers } from '@pwa-concept/modules/graphql'

const getMinMax = (context) => [context?.options?.[0], context?.options?.[context?.options.length - 1]]
const isPrice = (context) => context?.attribute_code === 'price'

const Filter: Resolvers['Filter'] = {
    id: (_, __, { context }) => {
        if (isPrice(context)) {
            const [min, max] = getMinMax(context)

            return `price-${min?.value}_${max?.value}`
        }

        return context?.attribute_code
    },
    key: (_, __, { context }) => context?.attribute_code,
    type: (_, __, { context }) => {
        if (isPrice(context)) return FilterType.Price

        return FilterType.Checkbox
    },
    name: (_, __, { context }) => context?.label,
    items: (_, __, { context }) => {
        if (isPrice(context)) {
            const [min, max] = getMinMax(context)

            if (min?.value !== max?.value && ![min?.value, max?.value].includes(undefined)) {
                return [
                    {
                        __context: {
                            ...min,
                            parent: context,
                        },
                        __typename: 'FilterItem',
                    },
                    {
                        __context: {
                            ...max,
                            parent: context,
                        },
                        __typename: 'FilterItem',
                    },
                ]
            }

            return null
        }

        return context?.options?.map?.((child) => ({
            __context: {
                ...child,
                parent: context,
            },
            __typename: 'FilterItem',
        })) || null
    },
}

export default Filter
