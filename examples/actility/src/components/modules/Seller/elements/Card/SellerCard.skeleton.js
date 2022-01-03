import { Skeleton } from 'elements/Skeleton';
import { classNames } from 'helpers';
import PropTypes from 'prop-types';

import css from './SellerCard.module.scss';

const SellerCardSkeleton = ({ className }) => (
	<Skeleton className={classNames(css.skeleton, className)} />
);

SellerCardSkeleton.propTypes = {
	className: PropTypes.string,
};

SellerCardSkeleton.defaultProps = {
	className: null,
};

export { SellerCardSkeleton };
