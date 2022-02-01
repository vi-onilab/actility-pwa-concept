import { onError } from '@apollo/client/link/error'

const authErrorLink = (
    onError(({ graphQLErrors }) => {
        if (graphQLErrors) {
            const authError = graphQLErrors.find(({ extensions }) => extensions?.category === 'graphql-authorization')

            if (authError) {
                // TODO: Сюда засунуть логаут с проверкой на существование токена
            }
        }
    })
)

export default authErrorLink
