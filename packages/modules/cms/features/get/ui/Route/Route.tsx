import { FC, Suspense } from 'react'
import { useProvide } from '@pwa-concept/core'
import { RouteProvider } from '@pwa-concept/core/router/Route'
import { PROVIDE_CMS_MODULE_REPLACE } from '@pwa-concept/modules/cms'
import { CmsModuleReplaceProvide } from '../../../../types'
import { useCmsRoute } from '../../hooks'

const CmsGetRoute: FC = () => {
    const { data, loading } = useCmsRoute()
    const replace = useProvide<CmsModuleReplaceProvide>(PROVIDE_CMS_MODULE_REPLACE)

    if (loading) {
        return (
            <>
                Loading...
            </>
        )
    }

    if (replace?.routes?.[data?.type]) {
        const { fallback: Fallback, element: RenderElement } = replace.routes[data?.type]

        const renderedFallback = typeof Fallback === 'function' ? <Fallback /> : Fallback

        if (RenderElement) {
            return (
                <RouteProvider fallback={renderedFallback}>
                    <Suspense fallback={renderedFallback}>
                        <RenderElement />
                    </Suspense>
                </RouteProvider>
            )
        }
    }

    if (replace?.errors?.['404']) {
        const Error404Element = replace?.errors?.['404']

        return (
            <Error404Element />
        )
    }

    return (
        <>
            404 Not Found
        </>
    )
}

export default CmsGetRoute
