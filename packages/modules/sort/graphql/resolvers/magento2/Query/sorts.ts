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
                          default
                          options {
                              label
                              value
                          }
                      }
                  }
              }
            `,
        ).query({})
    )

    return {
        default: data?.sort_fields?.default,
        items: data?.sort_fields?.options?.map(({ label, value }) => ({
            id: value,
            name: label,
            __typename: 'Sort',
        })),
        __typename: 'SortsQueryOutput',
    }
}

export default sorts
