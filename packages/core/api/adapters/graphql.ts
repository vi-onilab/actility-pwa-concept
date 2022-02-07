import { ApolloClient, InMemoryCache } from '@apollo/client'
import { env } from '../../utils'

const apollo = new ApolloClient({
    uri: env('APP_GRAPHQL_URL'),
    cache: new InMemoryCache()
})

const graphql = (
    document: Parameters<typeof apollo.mutate>[0]['mutation'] | Parameters<typeof apollo.query>[0]['query']
) => {
    const variableDecorators: Array<(variables: object) => object> = []

    const applyVariableDecorators = (variables) => (
        variableDecorators.reduce(
            (result, decorator) => decorator(result),
            variables
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
                variables: applyVariableDecorators(variables)
            })
        },
        async mutation (variables = {}) {
            return await apollo.mutate<any>({
                mutation: document,
                variables: applyVariableDecorators(variables)
            })
        }
    } as const
}

export default graphql
