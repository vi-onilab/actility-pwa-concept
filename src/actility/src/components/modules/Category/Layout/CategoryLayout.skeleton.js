import { Skeleton } from 'elements/Skeleton';

import css from './CategoryLayout.module.scss';

const CategoryLayoutSkeleton = () => (
	<>
		<Skeleton className={css.header} />
		<Skeleton className={css.content} />
	</>
);

export { CategoryLayoutSkeleton };
