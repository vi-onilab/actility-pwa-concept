import { ReactElement } from 'react'
import { Container, render as reactRender } from 'react-dom'

export default function render(app: ReactElement, container?: Container | HTMLElement | null) {
	if (container) {
		reactRender(app, container)
	}
}
