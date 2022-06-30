import { FieldPolicy } from '@apollo/client/cache/inmemory/policies'

interface GraphqlQueryRelayPaginationTypePolicyInput {
    keyArgs?: FieldPolicy['keyArgs']
    pageFieldName?: string
    itemsFieldName?: string
    currentPageVariableName?: string
    validator?: (() => boolean) | null | undefined
}

const findByDotParts = (values, name: string) => {
    const handle = (value, names: string[]) => {
        if (names?.length) {
            const [key, ...parts] = names
            return handle(value?.[key], parts)
        }

        return value
    }

    return handle(values, name.split('.'))
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
        if ((validator && !validator?.()) || (+findByDotParts(variables, currentPageVariableName) === 1 || +findByDotParts(args, currentPageVariableName) === 1)) {
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
