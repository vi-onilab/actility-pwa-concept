import { QueryResolvers } from '~modules/graphql'
import cart from './cart'

const Query: QueryResolvers = {
    cart,
}

export default Query
