import { Resolvers } from '@pwa-concept/modules/graphql'

const id = (context) => String(context.id)

const Category: Resolvers['Category'] = {
    id: (_, __, { context }) => id(context),
    name: (_, __, { context }) => context?.name,
    description: (_, __, { context }) => context?.description,
    icon: (_, __, { context }) => context?.category_widget_svg_icon,
    level: (_, __, { context }) => context?.level ? Number(context?.level) : 0,
    parent: (_, __, { context }) => context?.parent_category ? ({
        __context: context?.parent_category,
        __typename: 'Category',
    }) : null,
    images: (_, __, { context }) => ({
        thumbnail: context?.image_url ? {
            id: `${id(context)}_thumbnail`,
            url: context.image_url,
            __typename: 'CategoryImage',
        } : null,
        main: (context?.category_widget_thumbnail || context?.image_url) ? {
            id: `${id(context)}_main`,
            url: context?.category_widget_thumbnail || context?.image_url,
            __typename: 'CategoryImage',
        } : null,
        __typename: 'CategoryImages',
    }),
    banners: (_, __, { context }) => ([
        {
            id: id(context),
            title: context?.name,
            description: context?.description,
            image: {
                id: `${id(context)}_0`,
                url: context?.top_banner,
                sources: [
                    {
                        id: `${id(context)}_0`,
                        url: context?.top_banner_mobile,
                        media: '(max-width: 768px)',
                        __typename: 'CategoryBannerImageSource',
                    },
                ],
                __typename: 'CategoryBannerImage',
            },
            __typename: 'CategoryBanner',
        },
    ]),
    breadcrumbs: (_, __, { context }) => ([
        ...(context?.breadcrumbs || [])?.map?.((breadcrumb) => ({
            id: !breadcrumb?.category_id ? null : String(breadcrumb?.category_id),
            name: breadcrumb?.category_name,
            level: +breadcrumb?.category_level || null,
            __typename: 'CategoryBreadcrumb',
        })),
        {
            id: id(context),
            level: 0,
            name: context?.name,
            __typename: 'CategoryBreadcrumb',
        },
    ]),
}

export default Category
