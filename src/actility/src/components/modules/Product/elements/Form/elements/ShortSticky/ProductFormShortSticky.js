import PropTypes from 'prop-types';
import imageCard from 'images/image-product-tab.png';
import { Icon } from 'elements/Icon';
import { ChevronArrowRightIcon } from 'icons';
import { ProductRating, useProductFormContext, ProductFormSubscriptionSelect } from 'modules/Product';
import { Image } from 'elements/Image';
import { useMediaBreakpoint } from 'providers';
import { Flex } from 'elements/Flex';
import { InputNumber } from 'elements/InputNumber';

import { ProductFormShortStickyWrapper } from './ProductFormShortStickyWrapper';
import css from './ProductFormShortSticky.module.scss';

const ProductFormShortSticky = (
	{
		className,
		data,
		onCustomizeClick,
	},
) => {
	const { isBreakpointDown } = useMediaBreakpoint();
	const {
		onOpenConfigurator, onOpenDetail, total, form, onAddToCart,
		count,
	} = useProductFormContext();

	return (
		<ProductFormShortStickyWrapper
			className={className}
		>
			<div className={css.wrapperBottomInner}>
				<button
					type="button"
					onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
					className={css.wrapperBottomCard}
				>
					<div className={css.wrapperBottomCardImage}>
						{data?.mediaGallery?.length > 0 && (
							<Image src={data?.mediaGallery?.[0]?.url} alt={imageCard} />
						)}
					</div>
					<div className={css.wrapperBottomCardContent}>
						<div className={css.wrapperBottomCardContentList}>
							{data?.manufacturerName?.length > 0 && (
								<span className={css.wrapperBottomCardContentListBrand}>
									{data?.manufacturerName}
								</span>
							)}
							{data?.vendorName?.length > 0 && (
								<p className={css.wrapperBottomCardContentListSeller}>
									<span className={css.wrapperBottomCardContentListTitle}>Seller:</span>
									{data?.vendorName}
								</p>
							)}
						</div>
						<div className={css.wrapperBottomCardContentTitle}>
							{data?.name}
						</div>
					</div>
				</button>

				<button
					type="button"
					onClick={() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })}
				>
					<ProductRating
						className={css.isBottom}
						data={data}
						variant="listVertical"
					/>
				</button>

				{data?.isExistSubscription && (
					<div className={css.divider} />
				)}

				{data?.isExistSubscription && (
					<ProductFormSubscriptionSelect
						data={data}
						className={css.subscriptionSelect}
					/>
				)}

				{data?.isExistCustomization && (
					<button
						type="button"
						onClick={onOpenDetail}
						className={css.priceSelect}
					>
						<div className={css.priceSelectContent}>
							<p className={css.priceSelectType}>Total price</p>
							<h3 className={css.priceSelectValue}>
								{total?.label}
							</h3>
						</div>
						<div className={css.priceSelectIconWrapper}>
							<Icon src={ChevronArrowRightIcon} className={css.priceSelectIcon} />
						</div>
					</button>
				)}
			</div>
			{(form.formState.isValid || !data?.isExistCustomization) ? (
				<Flex className={css.addToCartButtonWrapper}>
					<InputNumber
						value={count.value}
						onChange={count.setValue}
					/>
					<button
						type="button"
						className={css.wrapperBottomButton}
						onClick={onAddToCart}
					>
						{data?.addToCartLabel}
					</button>
				</Flex>
			) : (
				<button
					type="button"
					className={css.wrapperBottomButton}
					onClick={() => {
						if (isBreakpointDown('lg') && data?.isSimpleProduct) {
							onOpenConfigurator();
						} else {
							onCustomizeClick?.();
						}
					}}
				>
					Customize
				</button>
			)}
		</ProductFormShortStickyWrapper>
	);
};

ProductFormShortSticky.propTypes = {
	className: PropTypes.string,
	data: PropTypes.oneOfType([PropTypes.object]),
	onCustomizeClick: PropTypes.func,
};

ProductFormShortSticky.defaultProps = {
	className: null,
	data: null,
	onCustomizeClick: null,
};

export { ProductFormShortSticky };
