import { useState } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import {
	Slider,
	SliderPagination,
	SliderSlide,
} from 'elements/Slider';
import Badge from 'elements/Badge';
import { Image } from 'elements/Image';

import css from './ProductGallery.module.scss';

import { ProductGalleryModal } from '../GalleryModal';

const VARIANTS = {
	cardSlider: css.cardSlider,
	quickViewSlider: css.quickViewSlider,
};

const ProductGallery = (
	{
		children,
		data,
		className,
		variant,
		isZoom,
	},
) => {
	const [mainSwiper, setMainSwiper] = useState(null);
	const [mainSwiperActiveSlide, setMainSwiperActiveSlide] = useState(0);
	const [isOpenProductGallery, setOpenProductGallery] = useState(false);

	return (
		<>
			{isZoom && (
				<ProductGalleryModal
					isOpen={isOpenProductGallery}
					onDismiss={() => setOpenProductGallery(false)}
					imageIndex={isOpenProductGallery ? mainSwiperActiveSlide : 0}
					data={data}
				/>
			)}
			<div className={classNames(VARIANTS[variant], className)}>
				<div className={css.cardSliderThumbs}>
					<Slider
						slidesPerView="auto"
						spaceBetween={4}
						direction="vertical"
					>
						{data?.mediaGallery?.map?.(({
							url,
							label,
						}, index) => (
							<SliderSlide
								key={url || index}
								onClick={() => {
									mainSwiper?.slideTo(index);
								}}
								className={classNames(
									css.cardSliderThumbsSlide,
									mainSwiperActiveSlide === index && css.isActive,
								)}
							>
								<div className={css.cardSliderThumbsImageWrapper}>
									<Image src={url} alt={label} />
								</div>
							</SliderSlide>
						))}
					</Slider>
				</div>
				<div className={css.cardSliderMainWrapper}>
					<Badge
						variant="categoryLabel"
						icon={data?.categories?.[0]?.categoryWidgetSvgIcon}
						className={css.cardSliderCategoryLabel}
					>
						{data?.categories?.[0]?.name}
					</Badge>
					<div className={css.cardSliderMain}>
						<Slider
							className={css.productPageMainSwiper}
							onSwiper={setMainSwiper}
							onSlideChange={({ activeIndex }) => setMainSwiperActiveSlide(activeIndex)}
							watchOverflow
							watchSlidesProgress
						>
							{data?.mediaGallery?.map?.(({
								url,
								label,
							}, index) => (
								<SliderSlide
									key={url || index}
									className={classNames(css.cardSliderMainSlide)}
								>
									<Image
										src={url}
										onClick={() => isZoom && setOpenProductGallery(true)}
										alt={label}
										className={css.cardSliderMainSlideImg}
									/>
								</SliderSlide>
							))}
							{variant !== 'quickViewSlider' && <SliderPagination className={css.cardSliderMainPagination} />}
						</Slider>
					</div>

					{children}
				</div>
			</div>
		</>
	);
};

ProductGallery.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	data: PropTypes.shape({
		categories: PropTypes.arrayOf(PropTypes.shape({
			categoryWidgetSvgIcon: PropTypes.string,
			name: PropTypes.string,
		})),
		mediaGallery: PropTypes.arrayOf(PropTypes.shape({
			url: PropTypes.string,
			label: PropTypes.string,
		})),
	}),
	className: PropTypes.string,
	isZoom: PropTypes.bool,
	variant: PropTypes.oneOf(['cardSlider', 'quickViewSlider']),
};

ProductGallery.defaultProps = {
	children: null,
	data: null,
	className: null,
	isZoom: false,
	variant: 'cardSlider',
};

export { ProductGallery };
