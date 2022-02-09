import { useFiltersQuery } from '~modules/filter/graphql/queries/Filters'
import { Category } from '~modules/graphql'

interface UseFiltersInput {
    category?: Category
}

interface UseFiltersOptions {
    skip?: boolean
}

const useFilters = (input?: UseFiltersInput, options?: UseFiltersOptions) => {
    const {
        data: { filters: data = [] } = {},
        loading,
    } = useFiltersQuery({
        variables: {
            input: {
                categoryId: input?.category?.id,
            },
        },
        skip: options?.skip,
    })

    return {
        data,
        loading,
    }
}

export default useFilters
