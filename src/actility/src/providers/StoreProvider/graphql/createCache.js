import { InMemoryCache } from '@apollo/client';

import { createTypePolicies } from './createTypePolicies';

const createCache = () => (
	new InMemoryCache({
		typePolicies: createTypePolicies(),
	})
);

export { createCache };
