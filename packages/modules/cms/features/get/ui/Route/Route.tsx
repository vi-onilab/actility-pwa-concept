import { FC, Suspense } from 'react'
import { useProvide } from '@pwa-concept/core'
import { PROVIDE_CMS_MODULE_REPLACE } from '~modules/cms'
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

	const type = data?.type?.toLowerCase()

	if (replace?.routes?.[type]) {
		const { fallback = null, element: RenderElement = null } = replace.routes[type]

		if (RenderElement) {
			return (
				<Suspense fallback={fallback}>
					<RenderElement />
				</Suspense>
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
