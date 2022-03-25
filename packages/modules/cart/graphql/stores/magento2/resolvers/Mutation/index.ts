import { MutationResolvers } from '@pwa-concept/modules/graphql'
import cartGenerateId from './cart-generate-id'
import cartAddItem from './cart-add-item'
import cartUpdateItem from './cart-update-item'
import cartRemoveItem from './cart-remove-item'
import cartAssignToCustomer from './cart-assign-to-customer'

const Mutation: MutationResolvers = {
    cartGenerateId,
    cartAddItem,
    cartUpdateItem,
    cartRemoveItem,
    cartAssignToCustomer,
}

export default Mutation
