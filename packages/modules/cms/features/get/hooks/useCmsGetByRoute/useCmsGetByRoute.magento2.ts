import { gql } from 'graphql-tag'
import { useQuery } from '@apollo/client'
import { useLocation } from 'react-router-dom'

const UrlResolverQuery = gql`
	query UrlResolver($url: String!) {
		urlResolver(url: $url) {
			id
			type
			redirectCode
			relative_url
		}
	}
`

const useCmsGetByRoute = () => {
	const { pathname } = useLocation()
	const { data: { urlResolver = null } = {}, loading } = useQuery(UrlResolverQuery, {
		variables: {
			url: pathname,
		},
	})

	return {
		data: urlResolver,
		loading,
	}
}

export default useCmsGetByRoute
