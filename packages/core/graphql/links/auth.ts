import { setContext } from '@apollo/client/link/context'

const authLink = setContext((_, { headers }) => {
	// TODO: Сюда засунуть токен при мердже бранчей моделей и аполло
	const token = null

	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	}
})

export default authLink
