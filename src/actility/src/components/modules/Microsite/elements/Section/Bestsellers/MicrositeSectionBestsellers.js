import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { MediaBreakpointDown, MediaBreakpointUp } from 'providers';
import { LinkArrow } from 'elements/LinkArrow';
import { ProductSlider } from 'modules/Product';
import { Container } from 'elements/Container';
import { MicrositeSectionLayout } from 'modules/Microsite';
import { useQuery } from '@apollo/client';
import { ProductsQuery } from 'schemas';

import css from './MicrositeSectionBestsellers.module.scss';

const MicrositeSectionBestsellers = (
	forwardRef((
		{ vendor },
		ref,
	) => {
		const {
			data: dataBestsellers,
			loading: dataBestsellersLoading,
		} = useQuery(ProductsQuery, {
			variables: {
				withItems: true,
			},
		});

		if (!vendor) {
			return null;
		}

		return (
			<MicrositeSectionLayout
				id="bestsellers"
				ref={ref}
				variant="largePaddingTop"
			>
				<Container variant="small">
					<div className={css.containerHeader}>
						<h2 className={css.containerHeaderTitle}>Bestsellers</h2>
						<MediaBreakpointUp name="lg">
							<LinkArrow>
								See all products
							</LinkArrow>
						</MediaBreakpointUp>
						<MediaBreakpointDown name="lg">
							<LinkArrow>
								Go to all products
							</LinkArrow>
						</MediaBreakpointDown>
					</div>

					<ProductSlider
						className={css.micrositeSlider}
						data={dataBestsellers?.products?.items}
						variant="microsite"
						viewCount={4}
						isLoading={dataBestsellersLoading}
					/>
				</Container>
			</MicrositeSectionLayout>
		);
	}));

MicrositeSectionBestsellers.propTypes = {
	vendor: PropTypes.oneOfType([PropTypes.object]),
};

MicrositeSectionBestsellers.defaultProps = {
	vendor: null,
};

export { MicrositeSectionBestsellers };
