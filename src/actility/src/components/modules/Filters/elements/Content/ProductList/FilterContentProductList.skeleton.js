import { Skeleton } from 'elements/Skeleton';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './FilterContentProductList.module.scss';

const FilterContentProductListSkeleton = ({ className }) => (
	<Skeleton className={classNames(css.skeleton, className)} />
);

FilterContentProductListSkeleton.propTypes = {
	className: PropTypes.string,
};

FilterContentProductListSkeleton.defaultProps = {
	className: null,
};

export { FilterContentProductListSkeleton };
