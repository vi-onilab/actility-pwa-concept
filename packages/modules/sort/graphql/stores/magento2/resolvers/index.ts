import { Resolvers } from '@pwa-concept/modules/graphql'
import Query from './Query'
import Sort from './Sort'
import SortsQueryOutput from './SortsQueryOutput'

const resolvers: Resolvers = {
    Query,
    Sort,
    SortsQueryOutput,
}

export default resolvers
