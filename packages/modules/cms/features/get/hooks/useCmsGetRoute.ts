import { useLocation } from 'react-router-dom'
import { useGetCmsRouteQuery } from '../../../graphql/queries/GetCmsRoute'

const useCmsGetRoute = () => {
	const { pathname } = useLocation()
	const { data: { getCmsRoute: data } = {}, loading } = useGetCmsRouteQuery({
		variables: {
			url: pathname,
		},
	})

	return {
		data,
		loading,
	}
}

export default useCmsGetRoute
