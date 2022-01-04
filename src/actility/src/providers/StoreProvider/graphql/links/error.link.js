import { onError } from '@apollo/client/link/error';

import { $storeInternalError } from '../../models';

const errorLink = (
	onError(({ graphQLErrors, networkError }) => {
		if (graphQLErrors) {
			graphQLErrors.map(
				({ message, locations, path }) => (
					console.log(
						`[GQL]: Message: ${message}, Location: ${JSON.stringify(locations)}, Path: ${path}`,
					)),
			);
		}
		if (networkError) {
			console.log(`[GQL]: Network: ${networkError}`);

			$storeInternalError('Internet connection is unstable. Try again.');
		}
	})
);

export { errorLink };
