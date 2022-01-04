import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { Skeleton } from 'elements/Skeleton';

import css from './ReviewCard.module.scss';

const ReviewCardSkeleton = (
	{
		className,
	},
) => (
	<Skeleton
		className={classNames(css.skeleton, className)}
	/>
);

ReviewCardSkeleton.propTypes = {
	className: PropTypes.string,
};

ReviewCardSkeleton.defaultProps = {
	className: null,
};

export { ReviewCardSkeleton };
