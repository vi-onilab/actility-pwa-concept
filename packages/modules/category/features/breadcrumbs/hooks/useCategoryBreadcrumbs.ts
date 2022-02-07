import { Category } from '~modules/graphql'
import { useCategoryQuery } from '~modules/category/graphql/queries/Category'

const useCategoryBreadcrumbs = ({ id = null, breadcrumbs = null }: Category) => {
    const { data, loading } = useCategoryQuery({
        variables: {
            input: {
                id
            }
        },
        skip: !!breadcrumbs || !id
    })

    return {
        data: data?.category?.breadcrumbs,
        loading: !id || loading
    }
}

export default useCategoryBreadcrumbs
