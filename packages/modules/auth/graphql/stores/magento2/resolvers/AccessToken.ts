import { Resolvers } from '@pwa-concept/modules/graphql'

const AccessToken: Resolvers['AccessToken'] = {
    token: (_, __, { context }) => context?.token,
}

export default AccessToken
