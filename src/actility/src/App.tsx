import { BrowserRouter } from 'react-router-dom';
import {
	RootProvider,
	CurrencyProvider,
	MediaBreakpointProvider,
	StoreProvider,
} from 'providers';
import moduleProviders from 'modules/providers';

import { Router } from './Router';
import './global.scss';

const PROVIDERS = [
	BrowserRouter,
	MediaBreakpointProvider,
	StoreProvider,
	CurrencyProvider,

	...moduleProviders,
];

const App = () => (
	<RootProvider providers={PROVIDERS}>
		<Router />
	</RootProvider>
);

export default App;
