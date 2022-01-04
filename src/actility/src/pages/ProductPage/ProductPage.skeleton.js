import { MediaBreakpointDown, MediaBreakpointUp } from 'providers';
import { Container } from 'elements/Container';
import { BreadcrumbsSkeleton } from 'elements/Breadcrumbs';
import { Skeleton } from 'elements/Skeleton';
import { Flex } from 'elements/Flex';
import { ProductGallerySkeleton } from 'modules/Product/elements/Gallery/ProductGallery.skeleton';
import { ProductFormPriceSkeleton } from 'modules/Product/elements/Form/elements/Price/ProductFormPrice.skeleton';
import { ProductFormOptionsSubscriptionSkeleton } from 'modules/Product/elements/Form/elements/Options/elements/Subscription/ProductFormOptionsSubscription.skeleton';
import { ProductFormFooterSkeleton } from 'modules/Product/elements/Form/elements/Footer/ProductFormFooter.skeleton';
import { SpecSkeleton } from 'elements/Spec/Spec.skeleton';
import { LinkArrowSkeleton } from 'elements/LinkArrow/LinkArrow.skeleton';
import { SellerCardSkeleton } from 'modules/Seller/elements/Card/SellerCard.skeleton';
import { SplitBoxSkeleton } from 'elements/SplitBox/SplitBox.skeleton';
import { SplitBoxHeaderSkeleton } from 'elements/SplitBox/elements/Header/SplitBoxHeader.skeleton';
import { ProductDeliveryInformationBoxSkeleton } from 'modules/Product/elements/DeliveryInformationBox/ProductDeliveryInformationBox.skeleton';
import { ProductSliderSkeleton } from 'modules/Product/elements/Slider/ProductSlider.skeleton';

import css from './ProductPage.module.scss';

const ProductPageSkeleton = () => (
	<>
		<MediaBreakpointUp name="lg">
			<Container>
				<BreadcrumbsSkeleton />
			</Container>
		</MediaBreakpointUp>
		<Container>
			<main>
				<MediaBreakpointUp name="lg">
					<Flex flex="auto" direction="column">
						<Skeleton className={css.cardHeaderSkeleton} />
						<Skeleton className={css.cardHeaderBottomSkeleton} />
					</Flex>
				</MediaBreakpointUp>
				<Flex flex="auto" alignItems="start" className={css.cardContentContainerSkeleton}>
					<Flex direction="column" className={css.cardContentGallery}>
						<ProductGallerySkeleton />
						<MediaBreakpointUp name="lg">
							<ProductDeliveryInformationBoxSkeleton />
						</MediaBreakpointUp>
					</Flex>
					<MediaBreakpointDown name="lg">
						<Flex flex="auto" direction="column">
							<Skeleton className={css.cardHeaderSkeleton} />
							<Skeleton className={css.cardHeaderBottomSkeleton} />
						</Flex>
					</MediaBreakpointDown>
					<Flex flex="auto" direction="column" className={css.cardContentWrapper}>
						<Flex direction="column" className={css.cardWrapperSkeleton}>
							<ProductFormPriceSkeleton className={css.cardPriceSkeleton} />
							<ProductFormOptionsSubscriptionSkeleton className={css.cardSubscriptionSkeleton} />
							<MediaBreakpointUp name="lg">
								<ProductDeliveryInformationBoxSkeleton />
							</MediaBreakpointUp>
							<ProductFormFooterSkeleton className={css.cardFormFooterSkeleton} />
							<Flex direction="column">
								<SpecSkeleton />
								<SpecSkeleton />
							</Flex>
							<LinkArrowSkeleton className={css.cardLinkArrowSkeleton} />
						</Flex>
					</Flex>
					<SellerCardSkeleton />
				</Flex>
				<SplitBoxSkeleton />
				<SplitBoxSkeleton />
				<SplitBoxSkeleton />
				<SplitBoxSkeleton />
				<Flex direction="column" className={css.productSliderSkeleton}>
					<SplitBoxHeaderSkeleton />
					<ProductSliderSkeleton />
				</Flex>
			</main>
		</Container>
	</>
);

export { ProductPageSkeleton };
