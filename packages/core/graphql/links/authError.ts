import { onError } from '@apollo/client/link/error';
import { Provide, PROVIDE_GRAPHQL_AUTHORIZATION_INVALID_TOKEN_EXCLUDE_PATHS } from '@pwa-concept/core';
import { $auth, $clean } from '@pwa-concept/core/models';

const authErrorLink = (
    onError(({ graphQLErrors }) => {
        if (graphQLErrors) {
            const pathsFromTheme = Provide.first(PROVIDE_GRAPHQL_AUTHORIZATION_INVALID_TOKEN_EXCLUDE_PATHS) || []

            const ignorePaths = [
                'cart',
                'compare',
                'wishlist',
                'assignCompareListToCustomer',
                'mergeCarts',
                ...pathsFromTheme,
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
