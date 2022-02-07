import { Category } from '~modules/graphql'
import { useCategoryQuery } from '~modules/category/graphql/queries/Category'

const useCategoryBanners = ({ id = null, banners = null }: Category) => {
    const { data, loading } = useCategoryQuery({
        variables: {
            input: {
                id,
            },
        },
        skip: !!banners?.length,
    })

    return {
        data: banners || data?.category?.banners,
        loading: !id || loading,
    }
}

export default useCategoryBanners
