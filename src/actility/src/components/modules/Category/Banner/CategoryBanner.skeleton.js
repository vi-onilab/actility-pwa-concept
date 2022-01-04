import { Skeleton } from 'elements/Skeleton';
import { classNames } from 'helpers';
import PropTypes from 'prop-types';

import css from './CategoryBanner.module.scss';

const CategoryBannerSkeleton = ({ className }) => (
	<Skeleton className={classNames(css.skeleton, className)} />
);

CategoryBannerSkeleton.propTypes = {
	className: PropTypes.string,
};

CategoryBannerSkeleton.defaultProps = {
	className: null,
};

export { CategoryBannerSkeleton };
