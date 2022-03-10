import { Category } from '@pwa-concept/modules/graphql'
import { useCategoryQuery } from '@pwa-concept/modules/category/graphql/queries/Category'

const useCategoryBreadcrumbs = ({ id = null, breadcrumbs = null }: Category) => {
    const { data, loading } = useCategoryQuery({
        variables: {
            input: {
                id,
            },
        },
        skip: !!breadcrumbs || !id,
    })

    return {
        data: data?.category?.breadcrumbs,
        loading: !id || loading,
    }
}

export default useCategoryBreadcrumbs
