import { useLocation } from 'react-router-dom'
import { useCmsQuery } from '~modules/cms/graphql/queries/Cms'
import { useCmsRouteQuery } from '~modules/cms/graphql/queries/CmsRoute'

const useCms = ({ id = null }: { id: string }) => {
	const { pathname } = useLocation()
	const { data: { cmsRoute = null } = {}, loading: routeLoading } = useCmsRouteQuery({
		variables: {
			url: pathname,
		},
		skip: !!id,
	})
	const pageId = id || cmsRoute?.id

	const { data: { cms = null } = {}, loading: pageLoading } = useCmsQuery({
		variables: {
			id: pageId,
		},
		skip: !pageId,
	})

	const loading = routeLoading || pageLoading

	return {
		data: loading ? null : cms,
		loading,
	}
}

export default useCms
