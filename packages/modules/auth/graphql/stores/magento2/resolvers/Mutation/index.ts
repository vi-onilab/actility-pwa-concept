import register from './register'
import login from './login'
import resetRequest from './resetRequest'
import reset from './reset'
import { MutationResolvers } from '@pwa-concept/modules/graphql'

const Mutation: MutationResolvers = {
    register,
    login,
    resetRequest,
    reset,
}

export default Mutation
