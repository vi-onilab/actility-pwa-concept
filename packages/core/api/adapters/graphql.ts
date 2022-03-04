import { ApolloClient, InMemoryCache, from } from '@apollo/client'
import { env } from '../../utils'
import {
    authErrorLink,
    authLink,
    errorLink,
    httpLink,
    queueLink,
    retryLink,
    fragmentsInjectorFromProvide,
} from '~core/graphql/links'
import { Provide } from '~core/provide'
import { PROVIDE_GRAPHQL_STORE_POSSIBLE_TYPES, PROVIDE_GRAPHQL_STORE_FRAGMENTS } from '~core/graphql'

const cache = new InMemoryCache({
    possibleTypes: {},
})

const apollo = new ApolloClient({
    uri: env('APP_GRAPHQL_URL'),
    cache,
    link: from([
        fragmentsInjectorFromProvide(PROVIDE_GRAPHQL_STORE_FRAGMENTS),
        retryLink,
        queueLink,
        authLink,
        errorLink,
        authErrorLink,
        httpLink,
    ]),
})

const addedPossibleTypes = new Set()

const graphql = (
    document: Parameters<typeof apollo.mutate>[0]['mutation'] | Parameters<typeof apollo.query>[0]['query'],
) => {
    const possibleTypes = Provide.first(PROVIDE_GRAPHQL_STORE_POSSIBLE_TYPES)

    if (possibleTypes) {
        if (!addedPossibleTypes.has(possibleTypes)) {
            addedPossibleTypes.add(possibleTypes)
            cache.policies.addPossibleTypes(possibleTypes)
        }
    }

    const variableDecorators: Array<(variables: object) => object> = []

    const applyVariableDecorators = (variables) => (
        variableDecorators.reduce(
            (result, decorator) => decorator(result),
            variables,
        )
    )

    return {
        variableIf(state, decorator: (variables) => object) {
            if (state) variableDecorators.push(decorator)

            return this
        },
        async query(variables = {}) {
            return await apollo.query<any>({
                query: document,
                variables: applyVariableDecorators(variables),
                fetchPolicy: 'network-only',
            })
        },
        async mutation(variables = {}) {
            return await apollo.mutate<any>({
                mutation: document,
                variables: applyVariableDecorators(variables),
            })
        },
    } as const
}

export default graphql
