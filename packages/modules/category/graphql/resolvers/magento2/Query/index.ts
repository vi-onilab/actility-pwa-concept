import { QueryResolvers } from '~modules/graphql'
import category from './category'
import categories from './categories'

const Query: QueryResolvers = {
    category,
    categories,
}

export default Query
