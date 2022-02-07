import { QueryResolvers } from '~modules/graphql'
import api from '@pwa-concept/core/api'
import categoryListQuery from '../gql/categoryListQuery'
import { CategoryTreeToCategory } from '../casts'

const category: QueryResolvers['category'] = async (_, { input }) => {
    const { id } = input

    const { data: { categoryList = [] } = {} } = await (
        api.graphql(categoryListQuery).query({
            filters: {
                ids: {
                    eq: id
                }
            }
        })
    )

    return CategoryTreeToCategory(categoryList?.[0])
}

export default category
