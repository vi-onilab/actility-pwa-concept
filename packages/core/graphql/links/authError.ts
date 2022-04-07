import { onError } from '@apollo/client/link/error'
import { $auth, $clean } from '@pwa-concept/core/models'

const authErrorLink = (
    onError(({ graphQLErrors }) => {
        if (graphQLErrors) {
            const ignorePaths = [
                'cart',
                'compare',
                'wishlist',
            ]
            const authError = graphQLErrors.find(({ extensions, path }) => (
                extensions?.category === 'graphql-authorization' &&
                !path.find((location: string) => ignorePaths.includes(location))
            ))

            if (authError && $auth.isToken) {
                $clean.logout()
            }
        }
    })
)

export default authErrorLink
