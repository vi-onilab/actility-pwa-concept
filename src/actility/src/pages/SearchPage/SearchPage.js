import { memo, useMemo } from 'react';
import {
	useHistory,
	useLocation,
} from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {
	Breadcrumb,
	Breadcrumbs,
} from 'elements/Breadcrumbs';
import { Container } from 'elements/Container';
import {
	Filter,
	FilterSearchHeader,
	filterSearchStringToObject,
	getFiltersFromProductAggregations,
} from 'modules/Filters';
import { ProductFilter } from 'modules/Product';
import { ProductsQuery } from 'schemas';
import { SearchPageSkeleton } from 'pages/SearchPage/SearchPage.skeleton';

const SearchPage = () => {
	const { search } = useLocation();
	const initial = useMemo(() => filterSearchStringToObject(search), [search]);
	const { push } = useHistory();

	const { data } = useQuery(ProductsQuery, {
		variables: {
			withAggregations: true,
			withItems: false,
		},
	});

	const filters = getFiltersFromProductAggregations({
		products: data?.products,
	});

	const { sortFields } = data?.products || {};

	const onFilterChangeHandler = (options) => {
		push(`/search?${options?.search}`);
	};

	if (data?.loading || !data) {
		return (
			<SearchPageSkeleton />
		);
	}

	return (
		<section>
			<Breadcrumbs isHome>
				<Breadcrumb>
					Search Results
				</Breadcrumb>
			</Breadcrumbs>
			<Container variant="wide">
				<Filter
					controls={{
						sort: sortFields,
					}}
					initial={initial}
					onChange={onFilterChangeHandler}
					data={filters}
				>
					<FilterSearchHeader />
					<ProductFilter />
				</Filter>
			</Container>
		</section>
	);
};

export default memo(SearchPage);
