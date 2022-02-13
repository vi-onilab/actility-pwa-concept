import { QueryResolvers } from '~modules/graphql'
import customerAddresses from './customerAddressess'

const Query: QueryResolvers = {
    customerAddresses,
}

export default Query
