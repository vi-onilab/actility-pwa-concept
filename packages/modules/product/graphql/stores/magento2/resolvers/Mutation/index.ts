import { MutationResolvers } from '~modules/graphql'
import productSubscribeToPriceDrop from './productSubscribeToPriceDrop'

const Mutation: MutationResolvers = {
    productSubscribeToPriceDrop,
}

export default Mutation
