import { Resolvers } from '~modules/graphql'
import Query from './Query'
import Mutation from './Mutation'
import Product from './Product'

const resolvers: Resolvers = {
    Query,
    Mutation,
    Product,
}

export default resolvers
