import { module } from '@pwa-concept/core'
import { BrowserRouter } from 'react-router-dom'
import { CurrencyProvider, MediaBreakpointProvider, StoreProvider } from 'providers'
import App from './App'

export const AppModule = module(() => ({
	entry: <App />,
	providers: [
		BrowserRouter,
		MediaBreakpointProvider,
		StoreProvider,
		CurrencyProvider,
	],
}))
