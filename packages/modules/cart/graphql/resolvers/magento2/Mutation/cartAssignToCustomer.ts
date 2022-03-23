import api from '@pwa-concept/core/api'
import { MutationResolvers } from '~modules/graphql'
import { cartAssignToCustomerMutation } from '../gql/cartAssignToCustomer'
import { CartToCart } from '../casts'

const cartAssignToCustomer: MutationResolvers['cartAssignToCustomer'] = async (_, { input }) => {
    const { data: { mergeCarts = {} } = {} } = await (
        api.graphql(cartAssignToCustomerMutation).mutation({
            ...input,
        })
    )

    return CartToCart(mergeCarts)
}

export default cartAssignToCustomer
