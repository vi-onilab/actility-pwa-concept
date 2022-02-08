import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'
import { QueryResolvers } from '~modules/graphql'

const customer: QueryResolvers['customer'] = async () => {
    const { data: { customer: data = {} } = {} } = await (
        api.graphql(
            gql`
                query {
                    customer {
                        email
                        firstname
                        lastname
                        is_subscribed
                        middlename
                        date_of_birth
                        gender
                    }
                }
            `,
        ).query()
    )
    console.log(data)
    return null
}

export default customer
