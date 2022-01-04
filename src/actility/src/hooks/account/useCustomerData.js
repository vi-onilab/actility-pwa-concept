import { useQuery } from '@apollo/client';
import { CustomerQuery } from 'schemas';

const useCustomerData = () => {
	const { data: { customer } = {}, loading } = useQuery(CustomerQuery);

	return {
		customer,
		loading,
	};
};

export { useCustomerData };
