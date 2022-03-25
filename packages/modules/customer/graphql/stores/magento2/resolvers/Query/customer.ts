import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'
import { QueryResolvers } from '@pwa-concept/modules/graphql'

const customer: QueryResolvers['customer'] = async () => {
    const { data: { customer: __context = {} } = {} } = await (
        api.graphql(
            gql`
                query {
                    customer {
                        ... Customer
                    }
                }
            `,
        ).query()
    )

    return {
        __context,
        __typename: 'Customer',
    }
}

export default customer
