import { ApolloClient, InMemoryCache, from } from '@apollo/client'
import { env } from '../../utils'
import {
    authErrorLink,
    authLink,
    errorLink,
    httpLink,
    queueLink,
    retryLink,
} from '~core/graphql/links'

const apollo = new ApolloClient({
    uri: env('APP_GRAPHQL_URL'),
    cache: new InMemoryCache(),
    link: from([
        retryLink,
        queueLink,
        authLink,
        errorLink,
        authErrorLink,
        httpLink,
    ]),
})

const graphql = (
    document: Parameters<typeof apollo.mutate>[0]['mutation'] | Parameters<typeof apollo.query>[0]['query'],
) => {
    const variableDecorators: Array<(variables: object) => object> = []

    const applyVariableDecorators = (variables) => (
        variableDecorators.reduce(
            (result, decorator) => decorator(result),
            variables,
        )
    )

    return {
        variableIf (state, decorator: (variables) => object) {
            if (state) variableDecorators.push(decorator)

            return this
        },
        async query (variables = {}) {
            return await apollo.query<any>({
                query: document,
                variables: applyVariableDecorators(variables),
            })
        },
        async mutation (variables = {}) {
            return await apollo.mutate<any>({
                mutation: document,
                variables: applyVariableDecorators(variables),
            })
        },
    } as const
}

export default graphql