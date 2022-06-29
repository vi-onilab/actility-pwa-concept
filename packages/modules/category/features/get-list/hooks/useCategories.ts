import { useCategoriesQuery } from '@pwa-concept/modules/category/graphql/queries/Categories'
import { Category } from '@pwa-concept/modules/graphql'

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
                ...(!!parent?.id && { parent: parent?.id?.toString?.() }),
                ...(!!id && { id: (Array.isArray(id) ? id : [id]).filter(Boolean)?.map?.((item) => item?.toString?.()) }),
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
