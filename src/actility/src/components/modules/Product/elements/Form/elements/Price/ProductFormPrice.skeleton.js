import { Skeleton } from 'elements/Skeleton';
import { classNames } from 'helpers';
import PropTypes from 'prop-types';

import css from './ProductFormPrice.module.scss';

const ProductFormPriceSkeleton = ({ className }) => (
	<Skeleton className={classNames(css.skeleton, className)} />
);

ProductFormPriceSkeleton.propTypes = {
	className: PropTypes.string,
};

ProductFormPriceSkeleton.defaultProps = {
	className: null,
};

export { ProductFormPriceSkeleton };
