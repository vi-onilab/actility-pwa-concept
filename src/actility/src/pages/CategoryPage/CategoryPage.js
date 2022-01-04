import { memo, useMemo } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { CategoryNav } from 'modules/Category/Nav';
import { CategoryLayout } from 'modules/Category/Layout';
import { Filter, filterSearchStringToObject, getFiltersFromProductAggregations } from 'modules/Filters';
import { Container } from 'elements/Container';
import { CategoryListQuery, ProductsQuery } from 'schemas';
import { ProductFilter } from 'modules/Product';
import { useRouter, useUrlResolver } from 'hooks';
import { CategoryPageSkeleton } from './CategoryPage.skeleton';

const CategoryPage = () => {
	const urlResolver = useUrlResolver();
	const params = useParams();
	const id = urlResolver?.data?.id || params?.id;

	const { getEntityUrl } = useRouter();
	const { search } = useLocation();
	const initial = useMemo(() => filterSearchStringToObject(search), [search]);
	const { push } = useHistory();
	const {
		data: { categoryList = null } = {},
		loading: categoryLoading,
	} = useQuery(CategoryListQuery, {
		variables: {
			filters: {
				ids: {
					in: [id],
				},
			},
			isView: true,
		},
	});
	const category = categoryList?.[0];

	const { data, loading: productsLoading } = useQuery(ProductsQuery, {
		variables: {
			filter: {
				category_id: {
					eq: category?.id,
				},
			},
			withAggregations: true,
			withItems: false,
		},
		skip: !category?.id,
	});

	const filters = getFiltersFromProductAggregations({
		products: data?.products,
	});

	const { sortFields } = data?.products || {};

	const onFilterChangeHandler = (options) => {
		push(`${getEntityUrl(category)}?${options?.search}`);
	};

	if (categoryLoading || productsLoading) {
		return (
			<CategoryPageSkeleton />
		);
	}

	return (
		<CategoryLayout data={category}>
			<CategoryNav data={category} />
			<Container variant="wide">
				<Filter
					controls={{
						sort: sortFields,
					}}
					initial={initial}
					onChange={onFilterChangeHandler}
					data={filters}
				>
					<ProductFilter categoryId={category?.id || null} />
				</Filter>
			</Container>
		</CategoryLayout>
	);
};

export default memo(CategoryPage);
