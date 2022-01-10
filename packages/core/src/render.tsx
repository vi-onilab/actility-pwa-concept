import { ReactElement } from 'react'
import { Container, render as reactRender } from 'react-dom'
import { CoreProvider } from './providers'

export default function render(app: ReactElement, container?: Container | HTMLElement | null) {
	if (container) {
		reactRender(
			(
				<CoreProvider>
					{app}
				</CoreProvider>
			), container,
		)
	}
}
