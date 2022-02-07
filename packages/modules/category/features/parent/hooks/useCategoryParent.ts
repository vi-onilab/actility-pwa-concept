import { Category } from '~modules/graphql'
import { useCategoryQuery } from '~modules/category/graphql/queries/Category'

const useCategoryParent = ({ id = null, parent = null }: Category) => {
    const { data, loading } = useCategoryQuery({
        variables: {
            input: {
                id
            }
        },
        returnPartialData: true,
        skip: !!parent || !id
    })

    return {
        data: parent || data?.category?.parent,
        loading: !id || loading
    }
}

export default useCategoryParent
