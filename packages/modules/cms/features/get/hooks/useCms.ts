import { useLocation } from 'react-router-dom'
import { useCmsQuery } from '@pwa-concept/modules/cms/graphql/queries/Cms'
import { useCmsRouteQuery } from '@pwa-concept/modules/cms/graphql/queries/CmsRoute'

const useCms = ({ id = null }: { id: string }) => {
    const { pathname, state = null } = useLocation()
    const { data: { cmsRoute = (state as any)?.cms } = {}, loading: routeLoading } = useCmsRouteQuery({
        variables: {
            url: pathname,
        },
        skip: !!id,
    })
    const pageId = id || cmsRoute?.url || (state as any)?.cms?.id

    const { data: { cms = null } = {}, loading: pageLoading } = useCmsQuery({
        variables: {
            id: pageId,
        },
        skip: !pageId,
        returnPartialData: true,
    })

    const loading: boolean = routeLoading || pageLoading

    return {
        data: cms,
        loading,
    }
}

export default useCms
