import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { Skeleton } from 'elements/Skeleton';

import css from './SeoBox.module.scss';

const SeoBoxSkeleton = ({ className }) => (
	<Skeleton className={classNames(css.skeleton, className)} />
);

SeoBoxSkeleton.propTypes = {
	className: PropTypes.string,
};

SeoBoxSkeleton.defaultProps = {
	className: null,
};

export { SeoBoxSkeleton };
