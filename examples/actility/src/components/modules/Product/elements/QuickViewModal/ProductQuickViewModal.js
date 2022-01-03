import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { classNames } from 'helpers';
import { ModalPortal } from 'elements/Modal';
import { Flex } from 'elements/Flex';
import { Rating } from 'elements/Rating';
import {
	ProductActionButtons, ProductDeliveryInformationBox, ProductForm, ProductFormPrice, ProductFormProvider,
	ProductGallery,
} from 'modules/Product';
import { ProductDetailQuery } from 'schemas';
import { LinkArrow } from 'elements/LinkArrow';
import { useRouter } from 'hooks';
import { Icon } from 'elements/Icon';
import { ChevronArrowRightIcon } from 'icons';
import { Skeleton } from 'elements/Skeleton';
import { ProductGallerySkeleton } from 'modules/Product/elements/Gallery/ProductGallery.skeleton';
import { ProductDeliveryInformationBoxSkeleton } from 'modules/Product/elements/DeliveryInformationBox/ProductDeliveryInformationBox.skeleton';
import { ProductFormPriceSkeleton } from 'modules/Product/elements/Form/elements/Price/ProductFormPrice.skeleton';
import { ProductFormFooterSkeleton } from 'modules/Product/elements/Form/elements/Footer/ProductFormFooter.skeleton';
import { SpecSkeleton } from 'elements/Spec/Spec.skeleton';

import css from './ProductQuickViewModal.module.scss';

const ProductQuickViewModal = (
	{
		className,
		isOpen,
		onDismiss,
		onOpenNext,
		onOpenPrev,
		productId,
	},
) => {
	const { getEntityUrl } = useRouter();
	const { data: { productDetail = null } = {}, loading } = useQuery(ProductDetailQuery, {
		variables: {
			id: productId,
		},
		skip: !productId || !isOpen,
	});

	if (loading) {
		return (
			<ModalPortal
				className={classNames(css.wrapper, className)}
				isOpen={!!isOpen}
				onDismiss={onDismiss}
			>
				<div className={css.wrapperSkeleton}>
					<Skeleton className={css.quickViewTitleSkeleton} />
					<Flex direction="column" flex="auto" className={css.quickViewLeftSkeleton}>
						<Flex>
							<ProductGallerySkeleton variant="quickView" />
						</Flex>
						<ProductDeliveryInformationBoxSkeleton className={css.deliverySkeleton} />
					</Flex>
					<Flex direction="column" flex="auto" className={css.quickViewRightSkeleton}>
						<ProductFormPriceSkeleton />
						<ProductFormFooterSkeleton className={css.quickViewFormFooterSkeleton} />
						<Flex direction="column">
							<SpecSkeleton />
						</Flex>
					</Flex>
				</div>
			</ModalPortal>
		);
	}

	return (
		<ModalPortal
			className={classNames(css.wrapper, className)}
			isOpen={!!isOpen}
			onDismiss={onDismiss}
		>
			<ProductFormProvider data={productDetail}>
				{onOpenPrev && (
					<Flex
						as="button"
						asProps={{
							type: 'button',
							onClick: onOpenPrev,
						}}
						justifyContent="center"
						alignItems="center"
						className={css.arrowPrev}
					>
						<Icon
							src={ChevronArrowRightIcon}
							className={css.arrowIcon}
						/>
					</Flex>
				)}
				{onOpenNext && (
					<Flex
						as="button"
						asProps={{
							type: 'button',
							onClick: onOpenNext,
						}}
						justifyContent="center"
						alignItems="center"
						className={css.arrowNext}
					>
						<Icon
							src={ChevronArrowRightIcon}
							className={css.arrowIcon}
						/>
					</Flex>
				)}
				<Flex className={css.header}>
					<Flex
						alignItems="center"
						as="h2"
						flex="auto"
						className={css.title}
					>
						{loading ? (
							<Skeleton width="65%" height="100%" />
						) : (
							productDetail?.name
						)}
					</Flex>
					<Rating variant="singleLargeQuickView" />
				</Flex>

				<Flex className={css.content}>
					<Flex
						className={css.side}
						direction="column"
					>
						<ProductGallery variant="quickViewSlider" data={productDetail}>
							<ProductActionButtons
								data={productDetail}
								variant="vertical"
							/>
						</ProductGallery>
						<div className={css.sideDelivery}>
							<ProductDeliveryInformationBox variant="quickView" />
						</div>
					</Flex>

					<div className={css.main}>
						<ProductFormPrice className={css.quickViewPrice} data={productDetail} />
						<ProductForm
							data={productDetail}
							variant="quickView"
							className={css.form}
						/>
						{!productDetail?.isSimpleProduct && (
							<Flex className={css.mainLinkArrow} justifyContent="end">
								<LinkArrow
									variant="smallBold"
									to={getEntityUrl(productDetail)}
								>
									Go to product page
								</LinkArrow>
							</Flex>
						)}
					</div>
				</Flex>

			</ProductFormProvider>
		</ModalPortal>
	);
};
ProductQuickViewModal.propTypes = {
	className: PropTypes.string,
	isOpen: PropTypes.bool,
	onDismiss: PropTypes.func,
	onOpenNext: PropTypes.func,
	onOpenPrev: PropTypes.func,
	productId: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number]),
};

ProductQuickViewModal.defaultProps = {
	className: null,
	isOpen: false,
	onDismiss: null,
	onOpenNext: null,
	onOpenPrev: null,
	productId: null,
};

export { ProductQuickViewModal };
