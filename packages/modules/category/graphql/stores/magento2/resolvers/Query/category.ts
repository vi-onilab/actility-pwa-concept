import { QueryResolvers } from '@pwa-concept/modules/graphql'
import api from '@pwa-concept/core/api'
import { gql } from '@apollo/client'

const category: QueryResolvers['category'] = async (_, { input }) => {
    const { id } = input

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
        `).query({
            filters: {
                ids: {
                    eq: id,
                },
            },
        })
    )

    if (categoryList?.length < 1) return null

    return {
        __context: categoryList?.[0],
        __typename: 'Category',
    }
}

export default category
