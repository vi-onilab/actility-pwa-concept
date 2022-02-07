import { Category } from '~modules/graphql'

const CategoryTreeToCategory = (category): Category => {
    if (!category) return null

    const categoryId = !category?.id ? null : String(category.id)

    return {
        id: categoryId,
        name: category?.name,
        description: category?.description,
        icon: category?.category_widget_svg_icon,
        images: {
            thumbnail: category?.image_url ? {
                id: `${categoryId}_thumbnail`,
                url: category.image_url,
                __typename: 'CategoryImage'
            } : null,
            main: (category?.category_widget_thumbnail || category?.image_url) ? {
                id: `${categoryId}_main`,
                url: category?.category_widget_thumbnail || category?.image_url,
                __typename: 'CategoryImage'
            } : null,
            __typename: 'CategoryImages'
        },
        level: category?.level ? Number(category?.level) : 0,
        parent: category?.parent_category ? CategoryTreeToCategory(category.parent_category) : null,
        banners: [
            {
                id: categoryId,
                title: category?.name,
                description: category?.description,
                image: {
                    id: `${categoryId}_0`,
                    url: category?.top_banner,
                    sources: [
                        {
                            id: `${categoryId}_0`,
                            url: category?.top_banner_mobile,
                            media: '(max-width: 768px)',
                            __typename: 'CategoryBannerImageSource'
                        }
                    ],
                    __typename: 'CategoryBannerImage'
                },
                __typename: 'CategoryBanner'
            }
        ],
        breadcrumbs: [
            ...(category?.breadcrumbs || [])?.map?.((breadcrumb) => ({
                id: !breadcrumb?.category_id ? null : String(breadcrumb?.category_id),
                name: breadcrumb?.category_name,
                level: +breadcrumb?.category_level || null
            })),
            {
                id: category?.id,
                level: 0,
                name: category?.name
            }
        ],
        __typename: 'Category'
    }
}

export default CategoryTreeToCategory
