import { gql } from 'graphql-tag'

const categoryTreeFragment = gql`
    fragment CategoryTreeFragment on CategoryTree {
        id
        name
        description
        image_url
        breadcrumbs {
            category_id
            category_level
            category_name
        }

        # Custom ?
        top_banner
        top_banner_mobile
        category_widget_svg_icon
        category_widget_thumbnail
    }
`

const categoryListQuery = gql`
    query($filters: CategoryFilterInput!) {
        categoryList(filters: $filters) {
            ... CategoryTreeFragment

            parent_category {
                ... CategoryTreeFragment
            }
        }
    }

    ${categoryTreeFragment}
`

export default categoryListQuery
