import { MutationResolvers } from '@pwa-concept/modules/graphql'
import createCustomerAddress from './createCustomerAddress'
import updateCustomerAddress from './updateCustomerAddress'
import deleteCustomerAddress from './deleteCustomerAddress'

const Mutation: MutationResolvers = {
    createCustomerAddress,
    updateCustomerAddress,
    deleteCustomerAddress,
}

export default Mutation
