import customerOrders from './customerOrders'
import { QueryResolvers } from '@pwa-concept/modules/graphql'

const Query: QueryResolvers = {
    customerOrders,
}

export default Query
