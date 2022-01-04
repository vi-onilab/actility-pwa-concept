import { Skeleton } from 'elements/Skeleton';

import css from './PaginationProgress.module.scss';

const PaginationProgressSkeleton = () => (
	<Skeleton className={css.skeleton} />
);

export { PaginationProgressSkeleton };
