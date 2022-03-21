import api from '@pwa-concept/core/api'
import { QueryResolvers } from '@pwa-concept/modules/graphql'
import { gql } from '@apollo/client'

const categories: QueryResolvers['categories'] = async (_, { input }) => {
    const { parent, id } = input

    const { data: { categoryList = [] } = {} } = await (
        api.graphql(gql`
            query($filters: CategoryFilterInput!) {
                categoryList(filters: $filters) {
                    ... CategoryTree

                    parent_category {
                        ... CategoryTree
                    }
                }
            }
        `).variableIf(
            parent,
            (prev) => ({
                ...prev,
                filters: {
                    ...prev?.filters,
                    parent_id: {
                        eq: parent,
                    },
                },
            }),
        ).variableIf(
            Array.isArray(id) && id?.length > 0,
            (prev) => ({
                ...prev,
                filters: {
                    ...prev?.filters,
                    ids: {
                        in: id.map((value) => value),
                    },
                },
            }),
        ).query()
    )

    if (categoryList?.length < 1) return null

    return categoryList?.map?.((__context) => ({ __context, __typename: 'Category' }))?.filter?.(Boolean) || null
}

export default categories
