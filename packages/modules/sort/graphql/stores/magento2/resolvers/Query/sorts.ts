import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'
import { QueryResolvers } from '@pwa-concept/modules/graphql'

const sorts: QueryResolvers['sorts'] = async () => {
    const { data: { products: data = {} } = {} } = await (
        api.graphql(
            gql`
                query {
                    products {
                        sort_fields {
                            ... SortFields
                        }
                    }
                }
            `,
        ).query({})
    )

    return {
        __context: data?.sort_fields,
        __typename: 'SortsQueryOutput',
    }
}

export default sorts
