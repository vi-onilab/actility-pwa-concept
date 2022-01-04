import { Skeleton } from 'elements/Skeleton';

import css from './FilterSearchHeader.module.scss';

const FilterSearchHeaderSkeleton = () => (
	<Skeleton className={css.skeleton} />
);

export { FilterSearchHeaderSkeleton };
