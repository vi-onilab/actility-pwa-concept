import { Resolvers } from '@pwa-concept/modules/graphql'

const CustomerOrderAddress: Resolvers['CustomerOrderAddress'] = {
    firstName: (_, __, { context }) => context?.firstname,
    lastName: (_, __, { context }) => context?.lastname,
    telephone: (_, __, { context }) => context?.telephone,
    city: (_, __, { context }) => context?.city,
    company: (_, __, { context }) => context?.company,
    street: (_, __, { context }) => context?.street,
    countryCode: (_, __, { context }) => context?.country_code,
    postcode: (_, __, { context }) => context?.postcode,
}

export default CustomerOrderAddress
