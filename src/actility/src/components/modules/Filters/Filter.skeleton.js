import { Skeleton } from 'elements/Skeleton';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './Filter.module.scss';

const FilterSkeleton = ({ className }) => (
	<Skeleton className={classNames(css.skeleton, className)} />
);

FilterSkeleton.propTypes = {
	className: PropTypes.string,
};

FilterSkeleton.defaultProps = {
	className: null,
};

export { FilterSkeleton };
