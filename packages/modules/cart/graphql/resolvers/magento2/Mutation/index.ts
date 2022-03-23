import { MutationResolvers } from '~modules/graphql'
import cartGenerateId from './cartGenerateId'
import cartAddItem from './cartAddItem'
import cartUpdateItem from './cartUpdateItem'
import cartRemoveItem from './cartRemoveItem'
import cartAssignToCustomer from './cartAssignToCustomer'

const Mutation: MutationResolvers = {
    cartGenerateId,
    cartAddItem,
    cartUpdateItem,
    cartRemoveItem,
    cartAssignToCustomer,
}

export default Mutation
