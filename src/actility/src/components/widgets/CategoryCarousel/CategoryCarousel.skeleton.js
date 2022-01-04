import { Container } from 'elements/Container';
import { Flex } from 'elements/Flex';
import PropTypes from 'prop-types';
import { Skeleton } from 'elements/Skeleton';
import { classNames } from 'helpers';

import css from './CategoryCarousel.module.scss';

const CategoryCarouselSkeleton = ({ className }) => (
	<Container className={classNames(css.wrapperSkeleton, className)}>
		<Flex direction="column" alignItems="center">
			<Skeleton className={css.titleSkeleton} />
			<Skeleton className={css.contentSkeleton} />
		</Flex>
	</Container>
);

CategoryCarouselSkeleton.propTypes = {
	className: PropTypes.string,
};

CategoryCarouselSkeleton.defaultProps = {
	className: null,
};

export { CategoryCarouselSkeleton };
