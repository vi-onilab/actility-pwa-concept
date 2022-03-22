import { Resolvers } from '@pwa-concept/modules/graphql'
import Query from './Query'
import Mutation from './Mutation'
import Customer from './Customer'

const resolvers: Resolvers = {
    Query,
    Mutation,
    Customer,
}

export default resolvers
