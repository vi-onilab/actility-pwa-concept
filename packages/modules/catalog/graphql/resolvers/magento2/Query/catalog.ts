import { QueryResolvers } from '~modules/graphql'
import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'

const catalog: QueryResolvers['catalog'] = async (_, { input }) => {
    const { categoriesId } = input

    const { data: { products = {} } = {} } = (
        await api.graphql(
            gql`

            `,
        ).variableIf(
            categoriesId?.length > 0,
            () => ({}),
        ).query()
    )

    return {
        items: [],
        __typename: 'CatalogQueryOutput',
    }
}

export default catalog
