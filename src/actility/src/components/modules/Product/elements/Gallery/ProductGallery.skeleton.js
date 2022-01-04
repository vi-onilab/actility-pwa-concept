import PropTypes from 'prop-types';
import { Skeleton } from 'elements/Skeleton';
import { MediaBreakpointUp } from 'providers';
import { classNames } from 'helpers';

import css from './ProductGallery.module.scss';

const VARIANTS = {
	default: css.variantDefault,
	quickView: css.variantQuickView,
};

const ProductGallerySkeleton = ({ className, variant }) => (
	<div className={classNames(css.wrapperSkeleton, className, variant && VARIANTS?.[variant])}>
		<MediaBreakpointUp name="lg">
			<Skeleton className={css.thumbsSkeleton} />
		</MediaBreakpointUp>
		<Skeleton className={css.sliderSkeleton} />
	</div>
);

ProductGallerySkeleton.propTypes = {
	className: PropTypes.string,
	variant: PropTypes.oneOf(['default', 'quickView']),
};

ProductGallerySkeleton.defaultProps = {
	className: null,
	variant: 'default',
};

export { ProductGallerySkeleton };
