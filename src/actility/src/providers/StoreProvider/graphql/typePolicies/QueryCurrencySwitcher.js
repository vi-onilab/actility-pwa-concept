import { getCountryIcon } from 'helpers';
import { $country, $currency, $language } from 'models';

export const QueryCurrencySwitcherTypePolicy = {
	merge: (existing, incoming) => {
		$country.fillFromCurrencySwitcherQuery(incoming, existing);
		$language.fillFromCurrencySwitcherQuery(incoming, existing);
		$currency.fillFromCurrencySwitcherQuery(incoming, existing);

		return {
			...existing,
			...incoming,

			countriesList: (incoming?.countries || existing?.countries)?.map?.((country) => ({
				value: country?.value,
				icon: getCountryIcon(country?.value),
				label: `${country?.value} - ${country?.label}`,
			})).filter((country) => country?.value?.length) || existing?.countriesList || [],

			languagesList: (incoming?.languages || existing?.languages)?.map?.((language) => ({
				value: language?.locale,
				icon: getCountryIcon(language?.code),
				label: language?.name,
			})) || existing?.languagesList || [],
		};
	},
};
