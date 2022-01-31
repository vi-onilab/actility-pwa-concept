import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'
import { MutationResolvers } from '~modules/graphql'

const createCustomer: MutationResolvers['createCustomer'] = async (_, { input }) => {
    const { data: { createCustomer: data = {} } = {} } = await (
        api.graphql(
            gql`
                mutation($input: CustomerCreateInput) {
                    createCustomer(input: $input) {
                        customer {
                            lastname
                            firstname
                            email
                        }
                    }
                }
            `,
        ).mutation({ input })
    )

    return {
        firstName: data?.customer?.firstname,
        lastName: data?.customer?.lastname,
        email: data?.customer?.email,
    }
}

export default createCustomer
