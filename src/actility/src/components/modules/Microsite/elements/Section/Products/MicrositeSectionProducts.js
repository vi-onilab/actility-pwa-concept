import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { Filter, getFiltersFromProductAggregations } from 'modules/Filters';
import { ProductFilter } from 'modules/Product';
import { Container } from 'elements/Container';
import { useQuery } from '@apollo/client';
import { ProductsQuery } from 'schemas';
import { useMediaBreakpoint } from 'providers';
import { MicrositeSectionLayout } from 'modules/Microsite';

import css from './MicrositeSectionProducts.module.scss';

const MicrositeSectionProducts = (
	forwardRef((
		{
			vendor,
		},
		ref,
	) => {
		const { isBreakpointUp } = useMediaBreakpoint();

		const { data, loading } = useQuery(ProductsQuery, {
			variables: {
				filter: {
					vendor_id: {
						in: [String(vendor?.id)],
					},
				},
				withAggregations: true,
				withItems: false,
			},
			skip: !vendor?.id,
		});

		if (!vendor?.id || (!loading && data?.products?.totalCount < 1)) {
			return null;
		}

		const filters = getFiltersFromProductAggregations({
			products: data?.products,
		});

		const { sortFields } = data?.products || {};

		return (
			<MicrositeSectionLayout
				ref={ref}
				id="brands"
				variant={isBreakpointUp('lg') && 'primary'}
				className={
					classNames(
						isBreakpointUp('lg') && css.paddingBottom, css.disablePadding,
					)
				}
			>
				<Container>
					<h2 className={css.containerHeader}>
						Brand’s products
					</h2>
					<Filter
						controls={{
							sort: sortFields,
						}}
						data={filters}
					>
						<ProductFilter
							vendorId={vendor?.id || null}
						/>
					</Filter>
				</Container>
			</MicrositeSectionLayout>
		);
	}));

MicrositeSectionProducts.propTypes = {
	vendor: PropTypes.oneOfType([PropTypes.object]),
};

MicrositeSectionProducts.defaultProps = {
	vendor: null,
};

export { MicrositeSectionProducts };
