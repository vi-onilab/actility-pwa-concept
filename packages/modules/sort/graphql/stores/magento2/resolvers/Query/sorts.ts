import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'
import { QueryResolvers } from '@pwa-concept/modules/graphql'

const sorts: QueryResolvers['sorts'] = async () => {
    // TODO: hack with filter need for fix "'search' or 'filter' input argument is required." (filter: { price: { from: "0" } })
    const { data: { products: data = {} } = {} } = await (
        api.graphql(
            gql`
                query {
                    products(
                        filter: {
                            price: {
                                from: "0"
                            }
                        }
                    ) {
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
