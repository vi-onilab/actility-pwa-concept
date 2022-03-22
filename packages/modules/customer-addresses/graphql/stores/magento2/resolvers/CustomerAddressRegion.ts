import { Resolvers } from '@pwa-concept/modules/graphql'

const CustomerAddressRegion: Resolvers['CustomerAddressRegion'] = {
    region: (_, __, { context }) => context?.region?.region,
    regionCode: (_, __, { context }) => context?.region?.region_code,
    regionId: (_, __, { context }) => context?.region?.region_id,
}

export default CustomerAddressRegion
