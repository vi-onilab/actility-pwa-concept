import cms from './cms'
import cmsRoute from './cmsRoute'
import { QueryResolvers } from '~modules/graphql'

const Query: QueryResolvers = {
	cms,
	cmsRoute,
}

export default Query
