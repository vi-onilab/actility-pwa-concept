import { useLocation } from 'react-router-dom'
import { useCmsRouteQuery } from '@pwa-concept/modules/cms/graphql/queries/CmsRoute'

const useCmsRoute = () => {
    const { pathname, state = null } = useLocation()
    const { data, loading } = useCmsRouteQuery({
        variables: {
            url: pathname,
        },
    })

    return {
        data: data?.cmsRoute ?? (state as any)?.cms,
        loading,
    }
}

export default useCmsRoute
