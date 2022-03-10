import {
    useQuery as useQueryOrigin,
    useLazyQuery as useLazyQueryOrigin,
    useMutation as useMutationOrigin,
} from '@apollo/client'
import { Provide, PROVIDE_GRAPHQL_FRAGMENTS } from '~core'
import { injectFragments } from '~core/utils'

const inject = (document) => injectFragments(document, Provide.first(PROVIDE_GRAPHQL_FRAGMENTS))

export const useQuery: typeof useQueryOrigin = (query, options) => (
    useQueryOrigin(
        inject(query),
        options,
    )
)

export const useLazyQuery: typeof useLazyQueryOrigin = (query, options) => (
    useLazyQueryOrigin(
        inject(query),
        options,
    )
)

export const useMutation: typeof useMutationOrigin = (mutation, options) => (
    useMutationOrigin(
        inject(mutation),
        options,
    )
)

export type {
    QueryHookOptions,
    LazyQueryHookOptions,
    MutationHookOptions,
} from '@apollo/client'
