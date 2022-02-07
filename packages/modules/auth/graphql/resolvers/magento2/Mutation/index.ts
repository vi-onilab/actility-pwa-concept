import register from './register'
import login from './login'
import resetRequest from './resetRequest'
import reset from './reset'
import { MutationResolvers } from '~modules/graphql'

const Mutation: MutationResolvers = {
    register,
    login,
    resetRequest,
    reset,
}

export default Mutation
