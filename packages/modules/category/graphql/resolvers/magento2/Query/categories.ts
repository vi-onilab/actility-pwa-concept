import api from '@pwa-concept/core/api'
import { QueryResolvers } from '@pwa-concept/modules/graphql'
import categoryListQuery from '../gql/categoryListQuery'
import { CategoryTreeToCategory } from '../casts'

const categories: QueryResolvers['categories'] = async (_, { input }) => {
    const { parent, id } = input

    const { data: { categoryList = [] } = {} } = await (
        api.graphql(categoryListQuery)
            .variableIf(
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
            )
            .variableIf(
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
            )
            .query()
    )

    return categoryList?.map?.(CategoryTreeToCategory)?.filter?.(Boolean) || null
}

export default categories
