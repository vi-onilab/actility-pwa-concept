import { MutationResolvers } from '@pwa-concept/modules/graphql'
import productSubscribeToPriceDrop from './productSubscribeToPriceDrop'

const Mutation: MutationResolvers = {
    productSubscribeToPriceDrop,
}

export default Mutation
