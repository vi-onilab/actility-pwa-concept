import PropTypes from 'prop-types';
import { Skeleton } from 'elements/Skeleton';
import { classNames } from 'helpers';

import css from './ProductSearchCard.module.scss';

const ProductSearchCardSkeleton = ({ className }) => (
	<Skeleton className={classNames(css.skeleton, className)} />
);

ProductSearchCardSkeleton.defaultProps = {
	className: null,
};

ProductSearchCardSkeleton.propTypes = {
	className: PropTypes.string,
};

export { ProductSearchCardSkeleton };
