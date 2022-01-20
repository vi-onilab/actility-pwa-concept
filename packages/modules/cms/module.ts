import { module } from '@pwa-concept/core'
import { PROVIDE_CMS_MODULE_REPLACE } from './tokens'
import { CmsGetRoute } from './features'
import { CmsModuleReplaceProvide } from './types'

interface CMSModuleConfigureOptions {
	replace?: CmsModuleReplaceProvide
}

const CMSModule = module(() => ({
	routes: [
		{
			path: '*',
			element: CmsGetRoute,
		},
	],
	configure({ replace = {} }: CMSModuleConfigureOptions) {
		return {
			provides: [
				...(this.provides || []),
				{
					use: PROVIDE_CMS_MODULE_REPLACE,
					value: replace,
				},
			],
		}
	},
}))

export default CMSModule
