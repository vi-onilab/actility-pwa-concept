import PropTypes from 'prop-types';
import { Skeleton } from 'elements/Skeleton';
import { classNames } from 'helpers';

import css from './LinkArrow.module.scss';

const LinkArrowSkeleton = ({ className }) => (
	<Skeleton className={classNames(css.skeleton, className)} />
);

LinkArrowSkeleton.propTypes = {
	className: PropTypes.string,
};

LinkArrowSkeleton.defaultProps = {
	className: null,
};

export { LinkArrowSkeleton };
