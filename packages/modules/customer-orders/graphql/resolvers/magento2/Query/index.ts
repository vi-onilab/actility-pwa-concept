import customerOrders from './customerOrders'
import { QueryResolvers } from '~modules/graphql'

const Query: QueryResolvers = {
    customerOrders,
}

export default Query
