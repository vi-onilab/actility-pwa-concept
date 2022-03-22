import { QueryResolvers } from '@pwa-concept/modules/graphql'
import customerOrder from './customer-order'
import customerOrderLast from './customer-order-last'
import customerOrders from './customer-orders'

const Query: QueryResolvers = {
    customerOrder,
    customerOrderLast,
    customerOrders,
}

export default Query
