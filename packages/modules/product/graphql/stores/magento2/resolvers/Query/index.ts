import { QueryResolvers } from '@pwa-concept/modules/graphql'
import product from './product'
import productRelations from './productRelations'
import products from './products'

const Query: QueryResolvers = {
    product,
    productRelations,
    products,
}

export default Query
