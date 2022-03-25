import { Resolvers } from '@pwa-concept/modules/graphql'

const CustomerOrderProduct: Resolvers['CustomerOrderProduct'] = {
    id: (_, __, { context }) => context?.id,
    url: (_, __, { context }) => context?.product_url_key,
    name: (_, __, { context }) => context?.product_name,
    discounts: (_, __, { context }) => context?.discounts ? context?.discounts?.map?.((__context) => ({
        __context,
        __typename: 'CustomerOrderDiscount',
    })) : null,
    status: (_, __, { context }) => context?.status,
    options: (_, __, { context }) => context?.selected_options ? context?.selected_options?.map?.((__context) => ({
        __context,
        __typename: 'CustomerOrderProductOption',
    })) : null,
}

export default CustomerOrderProduct
