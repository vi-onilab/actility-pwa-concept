import api from '@pwa-concept/core/api'
import { gql } from 'graphql-tag'
import { MutationResolvers } from '@pwa-concept/modules/graphql'
import { $auth } from '@pwa-concept/core/models'

const register: MutationResolvers['register'] = async (_, input) => {
    const { data: { createCustomerV2: { customerToken = {} } = {} } = {} } = await (
        api.graphql(
            gql`
                mutation ($input: CustomerCreateInput!) {
                    createCustomerV2(input: $input) {
                        customerToken {
                            ... CustomerToken
                        }
                    }
                }
            `,
        ).mutation({ ...input })
    )

    if (customerToken?.token) {
        $auth.setToken(customerToken.token)
    }

    return {
        __context: {
            ...customerToken,
        },
        __typename: 'AccessToken',
    }
}

export default register
