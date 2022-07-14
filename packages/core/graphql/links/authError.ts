import { onError } from "@apollo/client/link/error";
import {
    Provide,
    PROVIDE_GRAPHQL_CUSTOMER_OPERATIONS_GUARD,
    PROVIDE_GRAPHQL_CUSTOMER_OPERATIONS_GUARD_MIDDLEWARE
} from "@pwa-concept/core";
import { $auth, $clean } from "@pwa-concept/core/models";

const authErrorLink = onError((error) => {
    const { graphQLErrors } = error

    if (graphQLErrors) {
        const middlewareFn = Provide.first(PROVIDE_GRAPHQL_CUSTOMER_OPERATIONS_GUARD_MIDDLEWARE) || [];

        const next = () => {
            const pathsFromTheme = Provide.first(PROVIDE_GRAPHQL_CUSTOMER_OPERATIONS_GUARD) || [];

            const invalidTokenPaths = [
                'customer',
                'updateCustomerAddress',
                'createCustomerAddress',
                'deleteCustomerAddress',
                'changeCustomerPassword',
                'createWishlist',
                'deleteWishlist',
                'updateProductsInWishlist',
                'updateWishlist',
                'revokeCustomerToken',
                'updateCustomer',
                'updateCustomerEmail',
                'updateCustomerV2',
                ...pathsFromTheme,
            ]

            const authError = graphQLErrors.find(
                ({ extensions, path }) => (
                    extensions?.category === "graphql-authorization" && path.find((location: string) => invalidTokenPaths.includes(location))
                )
            )

            if (authError && $auth.isToken) {
                $clean.logout()
            }
        }

        if (middlewareFn) {
            middlewareFn?.(error, next)
        } else {
            next()
        }
    }
})

export default authErrorLink
