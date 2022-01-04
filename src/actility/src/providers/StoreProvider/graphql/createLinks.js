import { from } from '@apollo/client';

import {
	errorLink, httpLink, authLink, retryLink, queueLink, authErrorLink,
} from './links';

const createLinks = () => (
	from([
		retryLink,
		queueLink,
		authLink,
		errorLink,
		authErrorLink,
		httpLink,
	])
);

export { createLinks };
