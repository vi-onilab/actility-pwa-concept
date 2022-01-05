import { ApolloClient } from '@apollo/client';

const createClient = ({ cache, link }) => (
	new ApolloClient({
		cache,
		link,
		connectToDevTools: process.env.NODE_ENV === 'development',
	})
);

export { createClient };
