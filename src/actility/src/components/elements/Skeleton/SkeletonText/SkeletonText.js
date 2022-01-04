import PropTypes from 'prop-types';
import { Flex } from 'elements/Flex';

import { Skeleton } from '../Skeleton';

const SkeletonText = (
	{
		repeat,
		gap,
		containerClassName,
		...props
	},
) => (
	<Flex direction="column" className={containerClassName}>
		{Array.from({ length: repeat }).map((_, index) => (
			<Skeleton
				key={index}
				{...props}
			>
				&nbsp;
			</Skeleton>
		))}
	</Flex>
);

SkeletonText.propTypes = {
	...Skeleton.propTypes,
	repeat: PropTypes.number,
	containerClassName: PropTypes.string,
};

SkeletonText.defaultProps = {
	...Skeleton.defaultProps,
	repeat: 1,
	containerClassName: null,
};

export { SkeletonText };
