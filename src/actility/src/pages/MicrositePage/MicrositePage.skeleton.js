import { BreadcrumbsSkeleton } from 'elements/Breadcrumbs';
import { Container } from 'elements/Container';
import { MicrositeSectionInfoSkeleton } from 'modules/Microsite/elements/Section/Info/MicrositeSectionInfo.skeleton';
import { MicrositeSectionBusinessProfileSkeleton } from 'modules/Microsite/elements/Section/BusinessProfile/MicrositeSectionBusinessProfile.skeleton';
import { MediaBreakpointUp } from 'providers';

import css from './MicrositePage.module.scss';

const MicrositePageSkeleton = () => (
	<div className={css.microsite}>
		<MediaBreakpointUp name="lg">
			<Container>
				<BreadcrumbsSkeleton />
			</Container>
		</MediaBreakpointUp>
		<MicrositeSectionInfoSkeleton />
		<MicrositeSectionBusinessProfileSkeleton />
		<MicrositeSectionBusinessProfileSkeleton />
		<MicrositeSectionBusinessProfileSkeleton />
		<MicrositeSectionBusinessProfileSkeleton />
		<MicrositeSectionBusinessProfileSkeleton />
		<MicrositeSectionBusinessProfileSkeleton />
	</div>
);

export { MicrositePageSkeleton };
