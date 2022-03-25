import { QueryResolvers } from '@pwa-concept/modules/graphql'
import category from './category'
import categories from './categories'

const Query: QueryResolvers = {
    category,
    categories,
}

export default Query
