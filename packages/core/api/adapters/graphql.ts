import { ApolloClient, from, InMemoryCache } from '@apollo/client'
import { PROVIDE_GRAPHQL_STORE_FRAGMENTS, PROVIDE_GRAPHQL_STORE_POSSIBLE_TYPES, PROVIDE_GRAPHQL_LINKS } from '@pwa-concept/core/graphql'
import { authErrorLink, authLink, errorLink, httpLink, queueLink, retryLink } from '@pwa-concept/core/graphql/links'
import { Provide } from '@pwa-concept/core/provide'

import { env, injectFragments } from '../../utils'

const cache = new InMemoryCache({
    possibleTypes: {},
})

const inject = (document) => injectFragments(document, Provide.first(PROVIDE_GRAPHQL_STORE_FRAGMENTS))

const makeLink = (newLinks: any[] = []) => (
    from([
        retryLink,
        queueLink,
        authLink,
        ...(newLinks || []),
        errorLink,
        authErrorLink,
        httpLink,
    ])
)

const apollo = new ApolloClient({
    uri: env('APP_GRAPHQL_URL'),
    cache,
    defaultOptions: {
        query: {
            errorPolicy: 'all',
        },
    },
    link: makeLink(),
})

const addedPossibleTypes = new Set()
const addedLinks = new Set()

const graphql = (
    document: Parameters<typeof apollo.mutate>[0]['mutation'] | Parameters<typeof apollo.query>[0]['query'],
) => {
    const possibleTypes = Provide.first(PROVIDE_GRAPHQL_STORE_POSSIBLE_TYPES)
    const links = Provide.first(PROVIDE_GRAPHQL_LINKS)

    if (possibleTypes) {
        if (!addedPossibleTypes.has(possibleTypes)) {
            addedPossibleTypes.add(possibleTypes)
            cache.policies.addPossibleTypes(possibleTypes)
        }
    }

    if (links) {
        if (!addedLinks.has(links)) {
            addedLinks.add(links)
            apollo.setLink(makeLink(links))
        }
    } else if (!addedLinks.size) {
        apollo.setLink(makeLink())
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
                query: inject(document),
                variables: applyVariableDecorators(variables),
                fetchPolicy: 'network-only',
            })
        },
        async mutation(variables = {}) {
            return await apollo.mutate<any>({
                mutation: inject(document),
                variables: applyVariableDecorators(variables),
            })
        },
    } as const
}

export default graphql
