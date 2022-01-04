import { useApolloClient } from '@apollo/client';
import { $clean } from 'models';

export const useCustomerLogout = () => {
	const { cache } = useApolloClient();

	return async () => {
		$clean.logout();

		await cache.reset();
	};
};
