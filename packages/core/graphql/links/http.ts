import { HttpLink } from '@apollo/client'
import { env } from '../../utils'

const httpLink = (
	new HttpLink({ uri: env('APP_GRAPHQL_URL'), credentials: 'same-origin' })
)

export default httpLink
