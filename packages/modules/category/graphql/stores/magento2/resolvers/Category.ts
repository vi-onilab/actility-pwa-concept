import { Resolvers } from '@pwa-concept/modules/graphql'

const id = (context) => String(context.id)

const Category: Resolvers['Category'] = {
    id: (_, __, { context }) => id(context),
    name: (_, __, { context }) => context?.name,
    description: (_, __, { context }) => context?.description,
    level: (_, __, { context }) => context?.level ? Number(context?.level) : 0,
    parent: (_, __, { context }) => context?.parent_category ? ({
        __context: context?.parent_category,
        __typename: 'Category',
    }) : null,
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
