import { gql } from 'graphql-tag'
import { useQuery } from '@apollo/client'
import { useLocation } from 'react-router-dom'
import { GetCmsRouteQuery } from '../../../graphql/queries'

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
const isTest = true

const QueryKey = (isTest ? 'getCmsRoute' : 'urlResolver')
const Query = (isTest ? GetCmsRouteQuery : UrlResolverQuery)

const useCmsGetRoute = () => {
	const { pathname } = useLocation()
	const { data: { [QueryKey]: urlResolver = null } = {}, loading } = useQuery(Query, {
		variables: {
			url: pathname,
		},
	})

	return {
		data: loading && !urlResolver ? null : {
			id: urlResolver?.id,
			type: urlResolver?.type?.toLowerCase?.(),
			redirectCode: urlResolver?.redirectCode,
			url: urlResolver?.relative_url,
		},
		loading,
	}
}

export default useCmsGetRoute
