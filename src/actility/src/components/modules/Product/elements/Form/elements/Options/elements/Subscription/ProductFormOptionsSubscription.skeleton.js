import { Skeleton } from 'elements/Skeleton';
import { classNames } from 'helpers';
import PropTypes from 'prop-types';

import css from './ProductFormOptionsSubscription.module.scss';

const ProductFormOptionsSubscriptionSkeleton = ({ className }) => (
	<Skeleton className={classNames(css.skeleton, className)} />
);

ProductFormOptionsSubscriptionSkeleton.propTypes = {
	className: PropTypes.string,
};

ProductFormOptionsSubscriptionSkeleton.defaultProps = {
	className: null,
};

export { ProductFormOptionsSubscriptionSkeleton };
