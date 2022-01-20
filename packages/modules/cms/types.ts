import { FC } from 'react'

export interface CmsModuleReplaceProvide {
	routes?: Record<'category' | 'cms_page' | 'product' | 'brands' | Lowercase<string>, {
		element: FC
		fallback?: FC | string
	}>
	errors?: Record<404, FC>
}
