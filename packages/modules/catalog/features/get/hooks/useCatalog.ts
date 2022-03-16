import { useCatalogQuery } from '@pwa-concept/modules/catalog/graphql/queries/Catalog'
import { CatalogQueryInput } from '@pwa-concept/modules/graphql'

const useCatalog = (input?: CatalogQueryInput) => {
    const {
        data: { catalog: data } = {},
        loading,
        fetchMore,
    } = useCatalogQuery({
        variables: {
            input,
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
                    },
                },
                updateQuery,
            })
        ),
        loading,
    }
}

export default useCatalog
