import cms from './cms'
import cmsRoute from './cmsRoute'
import { QueryResolvers } from '@pwa-concept/modules/graphql'

const Query: QueryResolvers = {
    cms,
    cmsRoute,
}

export default Query
