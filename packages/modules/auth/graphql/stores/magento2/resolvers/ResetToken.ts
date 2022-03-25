import { Resolvers } from '@pwa-concept/modules/graphql'

const ResetToken: Resolvers['ResetToken'] = {
    attempts: (_, __, { context }) => context?.attempts_left || 1,
    token: (_, __, { context }) => context?.token,
}

export default ResetToken
