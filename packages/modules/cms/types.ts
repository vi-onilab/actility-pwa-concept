import { FC } from 'react'
import { CmsRouteType } from '@pwa-concept/modules/graphql'

export interface CmsModuleReplaceProvide {
    routes?: Record<CmsRouteType, {
        element: FC
        fallback?: FC | string
    }>
    errors?: Record<404, FC>
}
