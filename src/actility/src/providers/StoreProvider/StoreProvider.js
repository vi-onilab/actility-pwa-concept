import PropTypes from 'prop-types';
import { ApolloProvider } from '@apollo/client';

import { createCache, createClient, createLinks } from './graphql';
import { StoreProviderInternalError } from './elements';

const store = createClient({
	cache: createCache(),
	link: createLinks(),
});

const StoreProvider = (
	{
		children,
	},
) => (
	<ApolloProvider client={store}>
		{children}

		<StoreProviderInternalError />
	</ApolloProvider>
);

StoreProvider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
};

StoreProvider.defaultProps = {
	children: null,
};

export { StoreProvider };
