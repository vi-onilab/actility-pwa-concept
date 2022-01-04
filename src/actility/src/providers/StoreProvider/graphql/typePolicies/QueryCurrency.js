import { $currency } from 'models';
import { CURRENCIES } from 'constants/currencies';

export const QueryCurrencyTypePolicy = {
	merge: (existing, incoming) => {
		$currency.fillFromCurrencyQuery(incoming);

		return {
			...existing,
			...incoming,

			currenciesList: (
				incoming?.available_currency_codes
					?.map?.((code) => ({
						...(CURRENCIES?.[code] || {}),
						value: code,
					}))
					?.filter(Boolean)
			),
		};
	},
};
