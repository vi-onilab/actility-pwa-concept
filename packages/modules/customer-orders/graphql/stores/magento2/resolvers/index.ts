import { Resolvers } from '@pwa-concept/modules/graphql'
import Query from './Query'
import CustomerOrder from './CustomerOrder'
import CustomerOrderAddress from './CustomerOrderAddress'
import CustomerOrderDiscount from './CustomerOrderDiscount'
import CustomerOrderProduct from './CustomerOrderProduct'
import CustomerOrderProductOption from './CustomerOrderProductOption'
import CustomerOrderTotals from './CustomerOrderTotals'
import CustomerOrderTotalsTax from './CustomerOrderTotalsTax'

const resolvers: Resolvers = {
    Query,
    CustomerOrder,
    CustomerOrderAddress,
    CustomerOrderDiscount,
    CustomerOrderProduct,
    CustomerOrderProductOption,
    CustomerOrderTotals,
    CustomerOrderTotalsTax,
}

export default resolvers
