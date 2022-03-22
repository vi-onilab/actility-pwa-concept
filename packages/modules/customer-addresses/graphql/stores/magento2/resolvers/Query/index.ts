import { QueryResolvers } from '@pwa-concept/modules/graphql'
import customerAddresses from './customer-addressess'

const Query: QueryResolvers = {
    customerAddresses,
}

export default Query
