import { FC, useMemo } from 'react'
import {
    ApolloClient,
    ApolloProvider,
    from,
    InMemoryCache,
} from '@apollo/client'
import { TypeSource } from '@graphql-tools/utils/Interfaces'
import {
    authErrorLink,
    authLink,
    errorLink,
    httpLink,
    queueLink,
    retryLink,
} from './links'
import resolver from './resolver'
import { useProvide } from '../provide'
import {
    PROVIDE_GRAPHQL_STORE_FRAGMENTS,
    PROVIDE_GRAPHQL_POLICY,
    PROVIDE_GRAPHQL_RESOLVERS,
    PROVIDE_GRAPHQL_SCHEMAS,
} from './tokens'
import { env } from '../utils'
import { DocumentNode } from 'graphql/language/ast'
import parseStoreFragments from './parseStoreFragments'
import { useEffect } from 'react'

const GraphQLProvider: FC = ({ children }) => {
    const typePolicies = useProvide(PROVIDE_GRAPHQL_POLICY, {})
    const typeDefs = useProvide<TypeSource[], any>(PROVIDE_GRAPHQL_SCHEMAS, null, (value) => (
        value?.length > 0 ? value : undefined
    ))

    const resolvers = useProvide<any>(PROVIDE_GRAPHQL_RESOLVERS, [], (value) => {
        if (!value?.length) return undefined

        value.forEach((group) => {
            Object.keys(group).forEach((rootGroup) => {
                Object.entries(group[rootGroup]).forEach(([key, fn]) => {
                    group[rootGroup][key] = resolver(fn)
                })
            })
        })

        return value
    })

    const client = useMemo(() => (
        new ApolloClient({
            cache: new InMemoryCache({
                typePolicies,
            }),
            typeDefs,
            resolvers,
            uri: env('APP_GRAPHQL_URL'),
            link: from([
                retryLink,
                queueLink,
                authLink,
                errorLink,
                authErrorLink,
                httpLink,
            ]),
            connectToDevTools: process.env.NODE_ENV === 'development',
        })
    ), [typeDefs, resolvers, typePolicies])

    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}

export default GraphQLProvider
