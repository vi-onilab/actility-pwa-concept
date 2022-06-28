import { CategoryBreadcrumbUrlType, Resolvers } from '@pwa-concept/modules/graphql'

const id = (context) => String(context.id)

const Category: Resolvers['Category'] = {
    id: (_, __, { context }) => id(context),
    name: (_, __, { context }) => context?.name,
    description: (_, __, { context }) => context?.description,
    level: (_, __, { context }) => context?.level ? Number(context?.level) : 0,
    breadcrumbs: (category, __, { context }) => ([
        ...(context?.breadcrumbs || [])?.map?.((breadcrumb) => ({
            name: breadcrumb?.category_name,
            level: +breadcrumb?.category_level || null,
            url: {
                id: String(breadcrumb?.category_id),
                type: CategoryBreadcrumbUrlType.Category,
                to: breadcrumb?.category_url_path?.length > 0 ? `/${breadcrumb.category_url_path}` : null,
                __typename: 'CategoryBreadcrumbUrl',
            },
            __typename: 'CategoryBreadcrumb',
        })),
        {
            level: 0,
            name: context?.name,
            url: null,
            __typename: 'CategoryBreadcrumb',
        },
    ]),
}

export default Category
