import createCustomer from './createCustomer'
import getAccessToken from './getAccessToken'
import recoverByEmail from './recoverByEmail'
import renewAccessToken from './renewAccessToken'
import { MutationResolvers } from '~modules/graphql'

const Mutation: MutationResolvers = {
	createCustomer,
	getAccessToken,
	recoverByEmail,
	renewAccessToken
}

export default Mutation
