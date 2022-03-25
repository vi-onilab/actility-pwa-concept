import { FieldPolicy } from '@apollo/client/cache/inmemory/policies'

interface GraphqlQueryRelayPaginationTypePolicyInput {
    keyArgs?: FieldPolicy['keyArgs']
    pageFieldName?: string
    itemsFieldName?: string
    currentPageVariableName?: string
    validator?: (() => boolean) | null | undefined
}

const graphqlQueryRelayPaginationFieldPolicy = (
    {
        keyArgs = false,
        pageFieldName = 'pagination',
        itemsFieldName = 'items',
        currentPageVariableName = 'page',
        validator = () => true,
    }: GraphqlQueryRelayPaginationTypePolicyInput,
): FieldPolicy => ({
    keyArgs,
    merge(existing, incoming, { args, variables }) {
        if ((validator && !validator?.()) || (variables?.[currentPageVariableName] === 1 || args?.[currentPageVariableName] === 1)) {
            return incoming
        }

        return {
            ...existing,
            ...incoming,
            [itemsFieldName]: [
                ...(existing?.[itemsFieldName] || []),
                ...(incoming?.[itemsFieldName] || []),
            ],
            [pageFieldName]: (incoming?.[pageFieldName] || existing?.[pageFieldName] || {}),
        }
    },
})

export default graphqlQueryRelayPaginationFieldPolicy
