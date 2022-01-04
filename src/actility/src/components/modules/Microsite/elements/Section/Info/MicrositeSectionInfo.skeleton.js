import { Container } from 'elements/Container';
import { MicrositeSectionLayout } from 'modules/Microsite';
import { Flex } from 'elements/Flex';
import { Skeleton, SkeletonText } from 'elements/Skeleton';
import { MediaBreakpointDown, MediaBreakpointUp } from 'providers';

import css from './MicrositeSectionInfo.module.scss';

const MicrositeSectionInfoSkeleton = () => (
	<MicrositeSectionLayout className={css.paddingBottom}>
		<Container variant="small" className={css.wrapperSkeleton}>
			<Flex direction="column">
				<Skeleton className={css.logoSkeleton} />
				<MediaBreakpointDown name="lg">
					<Skeleton className={css.infoHeaderSkeleton} />
					<SkeletonText
						repeat={4}
						containerClassName={css.infoContentContainerSkeleton}
						className={css.infoContentSkeleton}
					/>
				</MediaBreakpointDown>
				<Skeleton className={css.controlSkeleton} />
				<Skeleton className={css.subscribeSkeleton} />
			</Flex>
			<MediaBreakpointUp name="lg">
				<Flex direction="column" alignItems="start" className={css.infoSkeleton}>
					<Skeleton className={css.infoHeaderSkeleton} />
					<SkeletonText
						repeat={10}
						containerClassName={css.infoContentContainerSkeleton}
						className={css.infoContentSkeleton}
					/>
				</Flex>
			</MediaBreakpointUp>
		</Container>
	</MicrositeSectionLayout>
);

export { MicrositeSectionInfoSkeleton };
