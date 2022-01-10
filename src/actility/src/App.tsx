import { RootProvider } from 'providers'
import moduleProviders from 'modules/providers'

import { Router } from './Router'
import './global.scss'

const PROVIDERS = [
	...moduleProviders,
]

const App = () => (
	<RootProvider providers={PROVIDERS}>
		<Router />
	</RootProvider>
)

export default App
