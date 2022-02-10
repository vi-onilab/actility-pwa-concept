import { QueryResolvers } from '~modules/graphql'
import catalog from './catalog'

const Query: QueryResolvers = {
    catalog,
}

export default Query
