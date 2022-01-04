import { Skeleton } from 'elements/Skeleton';

import css from './GreetBanner.module.scss';

const GreetBannerSkeleton = () => (
	<Skeleton className={css.skeleton} />
);

export { GreetBannerSkeleton };
