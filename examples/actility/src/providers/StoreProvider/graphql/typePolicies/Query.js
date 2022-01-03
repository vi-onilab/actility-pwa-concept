import { fetchMorePagination } from 'providers/StoreProvider/helpers';

import { QueryCurrencySwitcherTypePolicy } from './QueryCurrencySwitcher';
import { QueryCurrencyTypePolicy } from './QueryCurrency';

const QueryTypePolicy = {
	fields: {
		products: fetchMorePagination({
			keyArgs: ['search', 'filter', 'withAggregations', 'withItems', 'sort'],
		}),
		currencySwitcher: QueryCurrencySwitcherTypePolicy,
		currency: QueryCurrencyTypePolicy,
	},
};

export { QueryTypePolicy };
