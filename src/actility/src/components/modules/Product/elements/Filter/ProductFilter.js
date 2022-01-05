import { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';

import { ProductsQuery } from 'schemas';
import {
	FilterContentProductList,
	FilterControls,
	FilterSidebar,
	useFilterContext,
} from 'components/modules/Filters';

const ProductFilter = memo(({ categoryId, vendorId }) => {
	const {
		toQuery,
		values,
		onChangeShared,
		shared,
	} = useFilterContext();

	const { search = null, ...filters } = toQuery();

	const activeSort = values?.sort;

	const productsQuery = useQuery(ProductsQuery, {
		variables: {
			...(
				search ? { search } : {}
			),
			filter: {
				...filters,
				...(categoryId !== null ? ({
					category_id: {
						in: [categoryId, ...(filters?.category_id?.in || [])],
					},
				}) : {}),
				...(vendorId !== null ? ({
					vendor_id: {
						in: [String(vendorId)],
					},
				}) : {}),
			},
			...(activeSort ? {
				sort: (
					Object
						.keys(activeSort)
						.reduce((response, currentKey) => ({
							...response,
							[currentKey]: activeSort[currentKey]?.[0],
						}), {})
				),
			} : {}),
		},
		skip: categoryId !== null ? !categoryId : false,
		notifyOnNetworkStatusChange: true,
	});

	const itemsCount = productsQuery?.data?.products?.totalCount || 0;

	useEffect(() => {
		if (!productsQuery?.loading && shared?.itemsCount !== itemsCount) {
			onChangeShared((prev) => ({
				...prev,
				itemsCount,
			}));
		}
	}, [onChangeShared, itemsCount, shared?.itemsCount, productsQuery?.loading]);

	return (
		<>
			<FilterSidebar />
			<FilterContentProductList
				query={productsQuery}
				header={(
					<FilterControls />
				)}
			/>
		</>
	);
});

ProductFilter.propTypes = {
	categoryId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	vendorId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ProductFilter.defaultProps = {
	categoryId: null,
	vendorId: null,
};

export { ProductFilter };
