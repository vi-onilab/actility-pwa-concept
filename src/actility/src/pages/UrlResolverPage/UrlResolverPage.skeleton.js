import { Container } from 'elements/Container';
import { Skeleton } from 'elements/Skeleton';

import css from './UrlResolverPage.module.scss';

const UrlResolverPageSkeleton = () => (
	<Container variant="wide">
		<Skeleton className={css.wrapper} />
	</Container>
);

export { UrlResolverPageSkeleton };
