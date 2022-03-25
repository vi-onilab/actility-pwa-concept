import { Resolvers } from '@pwa-concept/modules/graphql'

const Customer: Resolvers['Customer'] = {
    id: (_, __, { context }) => context?.email,
    firstName: (_, __, { context }) => context?.firstname,
    middleName: (_, __, { context }) => context?.middlename,
    lastName: (_, __, { context }) => context?.lastname,
    fullName: (_, __, { context }) => `${context?.firstname} ${context?.lastname}`,
    email: (_, __, { context }) => context?.email,
    dateOfBirth: (_, __, { context }) => context?.date_of_birth,
    gender: (_, __, { context }) => context?.gender,
    isSubscribed: (_, __, { context }) => context?.is_subscribed,
}

export default Customer
