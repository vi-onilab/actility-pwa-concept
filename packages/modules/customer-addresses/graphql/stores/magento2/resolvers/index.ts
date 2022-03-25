import { Resolvers } from '@pwa-concept/modules/graphql'
import Query from './Query'
import Mutation from './Mutation'
import CustomerAddress from './CustomerAddress'
import CustomerAddressRegion from './CustomerAddressRegion'

const resolvers: Resolvers = {
    Query,
    Mutation,
    CustomerAddress,
    CustomerAddressRegion,
}

export default resolvers
