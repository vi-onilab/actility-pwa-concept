import { useQuery } from '@apollo/client';
import { CountriesQuery } from 'schemas';

export const useCountriesQuery = () => {
	const { data: { countries = null } = {}, loading } = useQuery(CountriesQuery);

	return {
		countries,
		loading,
	};
};
