import PropTypes from 'prop-types';
import { Skeleton } from 'elements/Skeleton';
import { Flex } from 'elements/Flex';
import { classNames } from 'helpers';

import css from './SplitBox.module.scss';

const SplitBoxSkeleton = ({ className }) => (
	<Flex direction="row" alignItems="start" className={classNames(css.skeleton, className)}>
		<Skeleton className={css.skeletonHeader} />
		<Skeleton className={css.skeletonContent} />
	</Flex>
);

SplitBoxSkeleton.propTypes = {
	className: PropTypes.string,
};

SplitBoxSkeleton.defaultProps = {
	className: null,
};

export { SplitBoxSkeleton };
