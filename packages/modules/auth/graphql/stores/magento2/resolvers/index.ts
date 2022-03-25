import { Resolvers } from '@pwa-concept/modules/graphql'
import Mutation from './Mutation'
import AccessToken from './AccessToken'
import ResetToken from './ResetToken'

const resolvers: Resolvers = {
    Mutation,
    AccessToken,
    ResetToken,
}

export default resolvers
