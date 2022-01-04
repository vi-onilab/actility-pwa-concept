import { ProductCardSkeleton } from 'modules/Product';
import { classNames } from 'helpers';
import PropTypes from 'prop-types';

import css from './ProductSlider.module.scss';

const ProductSliderSkeleton = ({ className }) => (
	<div className={classNames(css.skeleton, className)}>
		<ProductCardSkeleton />
		<ProductCardSkeleton />
		<ProductCardSkeleton />
		<ProductCardSkeleton />
		<ProductCardSkeleton />
	</div>
);

ProductSliderSkeleton.propTypes = {
	className: PropTypes.string,
};

ProductSliderSkeleton.defaultProps = {
	className: null,
};

export { ProductSliderSkeleton };
