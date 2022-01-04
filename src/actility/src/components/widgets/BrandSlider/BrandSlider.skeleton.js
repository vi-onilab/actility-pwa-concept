import { Skeleton } from 'elements/Skeleton';
import { Container } from 'elements/Container';

import css from './BrandSlider.scss';

const BrandSliderSkeleton = () => (
	<Container>
		<Skeleton className={css.brandSkeleton} />
	</Container>
);

export { BrandSliderSkeleton };
