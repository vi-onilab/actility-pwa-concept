import { Container } from 'elements/Container';
import { MicrositeSectionLayout } from 'modules/Microsite';
import { Skeleton } from 'elements/Skeleton';
import { Flex } from 'elements/Flex';

import css from './MicrositeSectionBusinessProfile.module.scss';

const MicrositeSectionBusinessProfileSkeleton = () => (
	<MicrositeSectionLayout>
		<Container variant="small">
			<Flex flex="auto" direction="column">
				<Skeleton className={css.headerSkeleton} />
				<Skeleton className={css.contentSkeleton} />
			</Flex>
		</Container>
	</MicrositeSectionLayout>
);

export { MicrositeSectionBusinessProfileSkeleton };
