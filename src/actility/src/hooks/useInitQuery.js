import { useQuery } from '@apollo/client';
import { InitQuery } from 'schemas';

export const useInitQuery = () => (
	useQuery(InitQuery)
);

export const useInitQueryField = (name) => {
	const { data, loading } = useInitQuery();

	return {
		data: data?.[name],
		loading,
	};
};
