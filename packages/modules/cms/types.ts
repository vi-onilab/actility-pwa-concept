import { FC } from 'react'

export type CmsModuleRouteType = 'category' | 'cms_page' | 'product' | 'brands' | Lowercase<string>

export interface CmsModuleReplaceProvide {
	routes?: Record<CmsModuleRouteType, {
		element: FC
		fallback?: FC | string
	}>
	errors?: Record<404, FC>
}
