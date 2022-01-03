import { useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { UrlResolverQuery } from 'schemas';

export const useUrlResolver = () => {
	const { pathname } = useLocation();
	const { data: { urlResolver = null } = {}, loading } = useQuery(UrlResolverQuery, {
		variables: {
			url: pathname,
		},
	});

	return {
		data: urlResolver,
		loading,
	};
};
