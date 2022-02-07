import { Category } from '~modules/graphql'
import { useCategoryQuery } from '~modules/category/graphql/queries/Category'

const useCategoryImages = ({ id = null, images = null }: Category) => {
    const { data, loading } = useCategoryQuery({
        variables: {
            input: {
                id
            }
        },
        skip: !!images || !id
    })

    return {
        data: images || data?.category?.images,
        loading: !id || loading
    }
}

export default useCategoryImages
