import { Category } from '@pwa-concept/modules/graphql'
import { useCategoryQuery } from '@pwa-concept/modules/category/graphql/queries/Category'

const useCategoryImages = ({ id = null, images = null }: Category) => {
    const { data, loading } = useCategoryQuery({
        variables: {
            input: {
                id,
            },
        },
        skip: !!images || !id,
    })

    return {
        data: images || data?.category?.images,
        loading: !id || loading,
    }
}

export default useCategoryImages
