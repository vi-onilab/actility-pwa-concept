import { MutationResolvers } from '@pwa-concept/modules/graphql'
import createCustomerAddress from './create-customer-address'
import updateCustomerAddress from './update-customer-address'
import deleteCustomerAddress from './delete-customer-address'

const Mutation: MutationResolvers = {
    createCustomerAddress,
    updateCustomerAddress,
    deleteCustomerAddress,
}

export default Mutation
