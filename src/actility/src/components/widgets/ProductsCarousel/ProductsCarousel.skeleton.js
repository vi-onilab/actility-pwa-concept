import PropTypes from 'prop-types';
import { Container } from 'elements/Container';
import { Flex } from 'elements/Flex';
import { Skeleton } from 'elements/Skeleton';
import { classNames } from 'helpers';
import { ProductCardSkeleton } from 'modules/Product';
import { MediaBreakpointUp } from 'providers';

import css from './ProductsCarousel.module.scss';

const ProductsCarouselSkeleton = ({ className, control }) => (
	<Container className={classNames(css.wrapperSkeleton, className)}>
		<Flex direction="column">
			<Skeleton className={css.titleSkeleton} />
			{control && <Skeleton className={css.controlSkeleton} />}
			<Flex direction="row" justifyContent="spaceBetween" className={css.productListWrapper}>
				<ProductCardSkeleton variant="large" />
				<MediaBreakpointUp name="lg">
					<ProductCardSkeleton variant="large" />
					<ProductCardSkeleton variant="large" />
					<ProductCardSkeleton variant="large" />
				</MediaBreakpointUp>
			</Flex>
		</Flex>
	</Container>
);

ProductsCarouselSkeleton.propTypes = {
	className: PropTypes.string,
	control: PropTypes.bool,
};

ProductsCarouselSkeleton.defaultProps = {
	className: null,
	control: false,
};

export { ProductsCarouselSkeleton };
