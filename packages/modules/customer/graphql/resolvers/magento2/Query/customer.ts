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

    return {
        id: data?.email,
        firstName: data?.firstname,
        lastName: data?.lastname,
        email: data?.email,
        middleName: data?.middlename,
        dateOfBirth: data?.date_of_birth,
        gender: data?.gender,
        isSubscribed: data?.is_subscribed,
        __typename: 'Customer',
    }
}

export default customer
