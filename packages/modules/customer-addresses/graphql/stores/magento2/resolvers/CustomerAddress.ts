import { Resolvers } from '@pwa-concept/modules/graphql'

const CustomerAddress: Resolvers['CustomerAddress'] = {
    id: (_, __, { context }) => context?.id,
    defaultBilling: (_, __, { context }) => context?.default_billing,
    defaultShipping: (_, __, { context }) => context?.default_shipping,
    city: (_, __, { context }) => context?.city,
    company: (_, __, { context }) => context?.company,
    countryId: (_, __, { context }) => context?.country_id,
    firstName: (_, __, { context }) => context?.firstname,
    lastName: (_, __, { context }) => context?.lastname,
    telephone: (_, __, { context }) => context?.telephone,
    postcode: (_, __, { context }) => context?.postcode,
    street: (_, __, { context }) => context?.street,
    region: (_, __, { context }) => ({
        __context: context,
        __typename: 'CustomerAddressRegion',
    }),
}

export default CustomerAddress
