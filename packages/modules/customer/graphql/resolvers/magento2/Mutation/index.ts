import updateEmail from './updateEmail'
import changePassword from './changePassword'
import updateCustomer from './updateCustomer'
import { MutationResolvers } from '@pwa-concept/modules/graphql'

const Mutation: MutationResolvers = {
    updateEmail,
    changePassword,
    updateCustomer,
}

export default Mutation
