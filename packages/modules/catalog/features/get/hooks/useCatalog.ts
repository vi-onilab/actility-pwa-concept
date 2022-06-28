import { useCatalogQuery } from '@pwa-concept/modules/catalog/graphql/queries/Catalog'
import { CatalogQueryInput } from '@pwa-concept/modules/graphql'

const useCatalog = (input?: CatalogQueryInput) => {
    const {
        data: { catalog: data } = {},
        loading,
        fetchMore,
    } = useCatalogQuery({
        variables: {
            input: {
                ...input,
                page: +input?.page || 1,
                categoryId: input?.categoryId?.toString?.(),
            },
        },
        notifyOnNetworkStatusChange: true,
    })

    return {
        data,
        fetchMore: async (variables: CatalogQueryInput, updateQuery: Parameters<typeof fetchMore>[0]['updateQuery']) => (
            await fetchMore({
                variables: {
                    input: {
                        ...input,
                        ...variables,
                        ...(variables?.page && { page: +variables?.page || 1 }),
                        ...(variables?.categoryId && { categoryId: variables?.categoryId?.toString?.() }),
                    },
                },
                updateQuery,
            })
        ),
        loading,
    }
}

export default useCatalog
