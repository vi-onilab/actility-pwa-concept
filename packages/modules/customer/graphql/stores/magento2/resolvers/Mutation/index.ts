import { MutationResolvers } from '@pwa-concept/modules/graphql'
import changePassword from './change-password'
import updateCustomer from './update-customer'
import updateEmail from './update-email'

const Mutation: MutationResolvers = {
    updateEmail,
    changePassword,
    updateCustomer,
}

export default Mutation
