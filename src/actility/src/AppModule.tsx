import { module, PROVIDE_GRAPHQL_POLICY_TOKEN } from '@pwa-concept/core'
import { BrowserRouter } from 'react-router-dom'
import { CurrencyProvider, MediaBreakpointProvider } from 'providers'
import { createTypePolicies } from 'providers/StoreProvider/graphql/createTypePolicies'
import App from './App'

export const AppModule = module(() => ({
	entry: <App />,
	provides: [
		{ use: PROVIDE_GRAPHQL_POLICY_TOKEN, value: createTypePolicies() },
	],
	providers: [
		BrowserRouter,
		MediaBreakpointProvider,
		CurrencyProvider,
	],
}))
