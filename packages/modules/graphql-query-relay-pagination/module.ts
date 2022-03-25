import { module, Module } from '@pwa-concept/core'
import { QueryResolvers } from '@pwa-concept/modules/graphql'
import { FieldPolicy } from '@apollo/client/cache/inmemory/policies'
import { graphqlQueryRelayPaginationFieldPolicy } from './utils'

type GetResolver<T extends keyof QueryResolvers> = QueryResolvers[T]
type GetParameters<T> = T extends (...args: infer P) => any ? P : never
type QueryResolverField<T extends keyof QueryResolvers> = GetParameters<GetResolver<T>>[1]
type QueryResolverFieldTransform<T> = (T extends any[] ? boolean : T extends object ? {
    [key in keyof T]: QueryResolverFieldTransform<T[key] | boolean>
} : boolean)

interface GraphQLQueryRelayPaginationModuleConfigureInput {
    queries: {
        [T in keyof QueryResolvers]: {
            by?: QueryResolverFieldTransform<QueryResolverField<T>>
            fn?: () => FieldPolicy
        }
    }
}

const GraphQLQueryRelayPaginationModule = module(() => ({
    configure({ queries }: GraphQLQueryRelayPaginationModuleConfigureInput): Module {
        const QueryFields: Record<string, FieldPolicy> = {}

        const keyArgs = (root) => {
            const response = []

            if (!Array.isArray(root) && typeof root === 'object') {
                Object.entries(root).forEach(([childKey, childValue]) => {
                    response.push(childKey)

                    const responseCandidate = keyArgs(childValue)

                    if (responseCandidate?.length > 0) response.push(responseCandidate)
                })
            }

            return response
        }

        if (queries) {
            Object.entries(queries).forEach(([key, value]) => {
                if ('by' in value) {
                    QueryFields[key] = value?.fn?.() ?? graphqlQueryRelayPaginationFieldPolicy({
                        keyArgs: keyArgs(value),
                    })
                } else if ('fn' in value) {
                    QueryFields[key] = value?.fn()
                }
            })
        }

        if (Object.keys(QueryFields).length === 0) return {}

        return {
            graphqlPolicies: {
                Query: {
                    fields: QueryFields,
                },
            },
        }
    },
}))

export default GraphQLQueryRelayPaginationModule
