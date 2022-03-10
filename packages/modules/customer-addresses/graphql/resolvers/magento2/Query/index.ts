import { QueryResolvers } from '@pwa-concept/modules/graphql'
import customerAddresses from './customerAddressess'

const Query: QueryResolvers = {
    customerAddresses,
}

export default Query
