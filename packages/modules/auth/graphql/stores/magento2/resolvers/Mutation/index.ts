import { MutationResolvers } from '@pwa-concept/modules/graphql'
import register from './register'
import login from './login'
import resetRequest from './reset-request'
import reset from './reset'

const Mutation: MutationResolvers = {
    register,
    login,
    resetRequest,
    reset,
}

export default Mutation
