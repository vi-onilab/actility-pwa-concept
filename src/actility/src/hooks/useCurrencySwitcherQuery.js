import { $language } from 'models';
import { useQuery } from '@apollo/client';
import { CurrencySwitcherQuery } from 'schemas';

export const useCurrencySwitcherQuery = () => {
	const [selectedLanguage] = $language.useCurrent();
	const { data, loading } = useQuery(CurrencySwitcherQuery, {
		variables: {
			lang: selectedLanguage,
		},
	});

	return {
		data,
		loading,
	};
};
