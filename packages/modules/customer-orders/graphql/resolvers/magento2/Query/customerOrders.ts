import api from '@pwa-concept/core/api'
import { QueryResolvers } from '@pwa-concept/modules/graphql'
import { CustomerOrdersToOrders } from '../casts'
import customerOrdersQuery from '../gql/customerOrdersQuery'

const customerOrders: QueryResolvers['customerOrders'] = async (_, input) => {
    // @ts-expect-error
    const { page, size, number } = input
    const { data: { customer: { orders = [] } = {} } = {} } = await (
        api.graphql(customerOrdersQuery)
            .variableIf(
                !!number,
                () => ({
                    filter: {
                        number: {
                            eq: number,
                        },
                    },
                }),
            )
            .query({ page, size })
    )

    return CustomerOrdersToOrders(orders)
}

export default customerOrders
