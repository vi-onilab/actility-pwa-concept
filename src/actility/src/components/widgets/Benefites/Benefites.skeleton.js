import { Container } from 'elements/Container';
import { Skeleton } from 'elements/Skeleton';

import css from './Benefites.scss';

const BenefitesSkeleton = () => (
	<Container>
		<Skeleton className={css.benefitesSkeleton} />
	</Container>
);

export { BenefitesSkeleton };
