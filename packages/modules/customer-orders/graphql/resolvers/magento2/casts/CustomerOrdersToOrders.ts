import { CustomerOrders } from '@pwa-concept/modules/graphql'
import CustomerOrdersToOrder from './CustomerOrdersToOrder'

const CustomerOrdersToOrders = (orders): CustomerOrders => {
    if (!orders) return null

    return {
        customerOrders: [...(orders.items?.map?.(CustomerOrdersToOrder)?.filter?.(Boolean) || null)],
        pageInfo: {
            page: orders.page_info.current_page,
            size: orders.page_info.page_size,
            total: orders.page_info.total_pages,
        },
        totalOrders: orders.total_count,
        __typename: 'CustomerOrders',
    }
}

export default CustomerOrdersToOrders
