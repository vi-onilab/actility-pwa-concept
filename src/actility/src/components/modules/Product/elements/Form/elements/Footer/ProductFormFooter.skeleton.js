import { Skeleton } from 'elements/Skeleton';
import { classNames } from 'helpers';
import PropTypes from 'prop-types';

import css from './ProductFormFooter.module.scss';

const ProductFormFooterSkeleton = ({ className }) => (
	<Skeleton className={classNames(css.skeleton, className)} />
);

ProductFormFooterSkeleton.propTypes = {
	className: PropTypes.string,
};

ProductFormFooterSkeleton.defaultProps = {
	className: null,
};

export { ProductFormFooterSkeleton };
