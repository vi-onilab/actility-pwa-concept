import { Resolvers } from '@pwa-concept/modules/graphql'

const CartShippingAddressRegion: Resolvers['CartShippingAddressRegion'] = {
    regionId: (_, __, { context }) => context?.region.region_id || null,
    code: (_, __, { context }) => context?.region?.code || null,
    label: (_, __, { context }) => context?.region.label || null,
}

export default CartShippingAddressRegion
