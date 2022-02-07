import { Category } from '~modules/graphql'
import useCategoryBanners from './useCategoryBanners'

const useCategoryBanner = (category: Category) => {
    const { data, loading } = useCategoryBanners(category)

    return {
        data: data?.[0],
        loading
    }
}

export default useCategoryBanner
