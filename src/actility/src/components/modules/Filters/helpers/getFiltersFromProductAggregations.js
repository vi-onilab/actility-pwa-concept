import { PRODUCT_AGGREGATIONS_RESOLVERS } from '../constants';

export const getFiltersFromProductAggregations = ({ products, isAddPrice = false }) => {
	if (!products) {
		return [];
	}

	const aggregations = [...(products?.aggregations || [])];

	// Adds a filter by price if there is no such filter in the aggregation
	if (isAddPrice && aggregations && products?.maxPrice > 0 && products?.minPrice !== products?.maxPrice) {
		if (!aggregations?.findIndex?.(({ attributeCode }) => attributeCode === 'price')) {
			aggregations?.push?.({
				attributeCode: 'price',
			});
		}
	}

	return (
		aggregations?.reduce?.((response, aggregation) => {
			const resolver = (
				aggregation?.attributeCode in PRODUCT_AGGREGATIONS_RESOLVERS ? (
					PRODUCT_AGGREGATIONS_RESOLVERS?.[aggregation?.attributeCode]
				) : (
					PRODUCT_AGGREGATIONS_RESOLVERS.ALL
				)
			);

			if (resolver) {
				const resolve = resolver({ payload: products, aggregation });
				if (resolve) {
					response.push(resolve);
				}
			}

			return response;
		}, []) || []
	);
};
