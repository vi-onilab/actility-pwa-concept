import PropTypes from 'prop-types';
import { Skeleton } from 'elements/Skeleton';
import { classNames } from 'helpers';

import css from './SplitBoxHeader.module.scss';

const SplitBoxHeaderSkeleton = ({ className }) => (
	<Skeleton className={classNames(css.skeleton, className)} />
);

SplitBoxHeaderSkeleton.propTypes = {
	className: PropTypes.string,
};

SplitBoxHeaderSkeleton.defaultProps = {
	className: null,
};

export { SplitBoxHeaderSkeleton };
