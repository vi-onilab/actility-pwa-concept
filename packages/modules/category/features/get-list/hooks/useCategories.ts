import { useCategoriesQuery } from '~modules/category/graphql/queries/Categories'
import { Category } from '~modules/graphql'

interface UseCategoriesFilters {
    parent?: Category
    id?: string | string[]
}

interface UseCategoriesOptions {
    skip?: boolean
}

const useCategories = ({ parent = null, id = null }: UseCategoriesFilters, options?: UseCategoriesOptions) => {
    const { data, loading } = useCategoriesQuery({
        variables: {
            input: {
                parent: parent?.id,
                id: (Array.isArray(id) ? id : [id]).filter(Boolean),
            },
        },
        skip: options?.skip || false,
    })

    return {
        data: data?.categories,
        loading,
    }
}

export default useCategories
