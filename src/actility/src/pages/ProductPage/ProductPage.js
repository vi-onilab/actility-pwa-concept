import { memo, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {
	Breadcrumb,
	Breadcrumbs,
} from 'elements/Breadcrumbs';
import { Container } from 'elements/Container';
import { NavigationProvider, NavigationFloat, useNavigationFloat } from 'elements/Navigation';
import { SellerCard } from 'modules/Seller';
import {
	MediaBreakpointDown,
	MediaBreakpointUp,
} from 'providers';
import { ProductDetailQuery } from 'schemas';
import {
	ProductActionButtons,
	ProductDeliveryInformationBox,
	ProductForm,
	ProductFormPrice,
	ProductGallery,
	ProductSectionCertifications,
	ProductSectionDescription,
	ProductSectionEndlessPossibilities,
	ProductSectionKeyFeaturesHighlights,
	ProductSectionReviews,
	ProductSectionSellerQuestions,
	ProductSectionShippingConditions,
	ProductSectionSpecifications,
	ProductFormShortSticky,
	ProductSectionCarousels, ProductRating, ProductProvider,
} from 'modules/Product';
import { useRouter, useUrlResolver } from 'hooks';
import { classNames } from 'helpers';
import { Error404 } from 'elements/Error404';
import { ProductPageSkeleton } from 'pages/ProductPage/ProductPage.skeleton';

import { InViewHidden } from 'elements/InViewHidden';
import css from './ProductPage.module.scss';

const ProductPage = () => {
	const headerRef = useRef(null);
	const { data: urlResolver } = useUrlResolver();
	const params = useParams();
	const { getEntityUrl } = useRouter();
	const {
		registerNavigation,
		list,
	} = useNavigationFloat();
	const pageNavigationHiddenRef = useRef();

	const id = urlResolver?.id ?? params?.id;

	const {
		data: { productDetail = null } = {},
		loading,
	} = useQuery(ProductDetailQuery, {
		variables: {
			id,
		},
		skip: !id,
	});

	if (!loading && !productDetail) {
		return (
			<Error404 />
		);
	}

	const firstCategory = productDetail?.categories?.[0];

	if (loading) {
		return (
			<ProductPageSkeleton />
		);
	}

	return (
		<ProductProvider data={productDetail}>
			<section className={css.wrapper}>
				<Breadcrumbs isHome>
					{firstCategory && (
						<Breadcrumb to={getEntityUrl(firstCategory)}>
							{firstCategory?.name}
						</Breadcrumb>
					)}
					<Breadcrumb>
						{productDetail?.name}
					</Breadcrumb>
				</Breadcrumbs>
				<NavigationProvider hiddenByRef={pageNavigationHiddenRef}>
					<NavigationFloat data={list} />
					<ProductFormShortSticky
						data={productDetail}
						onCustomizeClick={() => {
							pageNavigationHiddenRef.current?.scrollIntoView?.({
								behavior: 'smooth',
								block: 'start',
							});
						}}
					/>
				</NavigationProvider>
				<main className={css.main}>
					<div ref={pageNavigationHiddenRef}>
						<MediaBreakpointUp name="lg">
							<div ref={headerRef} className={css.cardHeader}>
								<Container className={css.cardHeaderContainer}>
									<h2 className={css.cardHeaderTitle}>
										{productDetail?.name}
									</h2>
									<div className={css.cardHeaderBottom}>
										{productDetail?.isExistReviews && (
											<button
												type="button"
												onClick={() => (
													document.getElementById('reviews')
														?.scrollIntoView({
															behavior: 'smooth',
															block: 'center',
														})
												)}
											>
												<ProductRating
													data={productDetail}
													variant="list"
												/>
											</button>
										)}

										<ProductActionButtons data={productDetail} />
										<ProductDeliveryInformationBox />
									</div>
								</Container>
							</div>
						</MediaBreakpointUp>
						<div className={css.cardContent}>
							<Container className={css.cardContentContainer}>
								<ProductGallery isZoom data={productDetail} className={css.gallery}>
									<MediaBreakpointDown name="lg">
										<ProductActionButtons data={productDetail} variant="vertical" />
									</MediaBreakpointDown>
									<MediaBreakpointUp name="lg">
										<InViewHidden by={headerRef}>
											<ProductDeliveryInformationBox className={css.cardContentContainerDelivery} />
										</InViewHidden>
									</MediaBreakpointUp>
								</ProductGallery>
								<MediaBreakpointDown name="lg">
									<div className={css.cardHeader}>
										<h2 className={css.cardHeaderTitle}>
											{productDetail?.name}
										</h2>
										{productDetail?.isExistReviews && (
											<div className={css.cardHeaderBottom}>
												<ProductRating variant="list" count="1" />
											</div>
										)}
									</div>
								</MediaBreakpointDown>

								<div
									className={classNames(css.cardWrapper, !productDetail?.isSimpleProduct && css.cardWrapperFull)}
								>
									<ProductFormPrice data={productDetail} />

									<ProductForm data={productDetail} />
								</div>
								{!!productDetail?.vendorInfo && (
									<SellerCard
										data={productDetail?.vendorInfo}
										className={css.cardSeller}
									/>
								)}
							</Container>
						</div>
					</div>

					<ProductSectionKeyFeaturesHighlights
						ref={registerNavigation('Key features highlights', { position: 1 })}
					/>

					<ProductSectionEndlessPossibilities
						ref={registerNavigation('Endless possibilities', { position: 2 })}
					/>

					<ProductSectionDescription
						ref={registerNavigation('Description', { position: 3 })}
					/>

					<ProductSectionCertifications
						ref={registerNavigation('Certifications', { position: 4 })}
					/>

					<ProductSectionSpecifications
						ref={registerNavigation('Specifications', { position: 5 })}
					/>

					<ProductSectionShippingConditions
						ref={registerNavigation('Shipping conditions', { position: 6 })}
					/>

					<ProductSectionReviews
						ref={registerNavigation('Ratings & reviews', { position: 7 })}
					/>

					<ProductSectionSellerQuestions
						ref={registerNavigation('Seller questions', { position: 8 })}
					/>

					<ProductSectionCarousels data={productDetail} />
				</main>
			</section>

		</ProductProvider>
	);
};

export default memo(ProductPage);
